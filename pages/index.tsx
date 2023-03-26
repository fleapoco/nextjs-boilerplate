import { NextPage } from "next";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import { IPageProps } from "@interface/index";
import Landing from "@components/pages/Landing";
import NotFound from "@components/pages/NotFound";
import { validate } from "@hooks/httpService";
import { Head } from "@components/common/Head";
import { PageConfig } from "@utils/index";
import Loader from "@components/common/Loader";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Index: NextPage<IPageProps> = ({ status, data }) => {
  const router = useRouter();

  useEffect(() => {
    if (!status) {
      router.push("/dashboard");
      return;
    }
  }, []);

  return status ? (
    <>
      <Head title={PageConfig.home.title} description={PageConfig.home.description} />
      <Landing />
    </>
  ) : (
    <Loader />
  );
};

export async function getServerSideProps({ req, params }: { res: any; req: any; params: any; query: any }) {
  try {
    // const cookies = new Cookies(req.headers.cookie);
    // const resp = await validate({ token: cookies.get("token") });
    // return { props: { status: true, data: resp } };
    return { props: { status: true } };
  } catch (error: any) {
    return { props: { status: false, message: error.message } };
  }
}

export default Index;
