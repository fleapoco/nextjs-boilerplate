import { NextPage } from "next";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import { IPageProps } from "../types";
import Landing from "../components/pages/Landing";
import NotFound from "../components/pages/NotFound";
import { validate } from "../hooks/httpService";

const Index: NextPage<IPageProps> = ({ status, data }) => {
  return status ? <Landing /> : <NotFound />;
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
