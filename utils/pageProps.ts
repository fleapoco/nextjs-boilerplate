import { GetServerSidePropsContext } from 'next';
import Cookies from 'universal-cookie';
import { isRouteProtected } from '.';
import { validate } from '@hooks/httpService';
const cookies = new Cookies();

export function withAuthServerSideProps(getServerSidePropsFunc?: Function) {
  return async (context: GetServerSidePropsContext) => {
    const { req, resolvedUrl } = context;
    const cookies = new Cookies(req.headers.cookie);

    const routeIsProtected = isRouteProtected(resolvedUrl.split('/')[1]);

    const validateToken = async () => {
      try {
        const cookies = new Cookies(req.headers.cookie);
        const response = await validate({ token: cookies.get('token') });
        if (!response.success) throw new Error(response.message);
        return { ...response };
      } catch (error: any) {
        return { success: false, data: null, message: error.message };
      }
    };

    const getPageData = async () => {
      try {
        const response = await getServerSidePropsFunc?.(context);
        if (!response.success) throw new Error(response.message);
        return { ...response };
      } catch (error: any) {
        return { success: false, data: null, message: error.message };
      }
    };

    if (routeIsProtected && !cookies.get('token'))
      return { redirect: { destination: '/?redirect=no_access', permanent: false } };

    const response1 = await validateToken();
    if (!response1.success && routeIsProtected)
      return { redirect: { destination: '/?redirect=no_access', permanent: false } };

    const response2 = getServerSidePropsFunc ? await getPageData() : {};
    if (response2.success === false) return { redirect: { destination: '/not-found', permanent: false } };

    return { props: { userProps: response1, pageProps: response2 } };
  };
}
