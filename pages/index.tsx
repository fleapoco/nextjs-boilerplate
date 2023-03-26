import { NextPage } from "next";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import { BASE_URL } from "../hooks/useAPI";
import { IPageProps } from "../types";
import Landing from "../components/pages/Landing";
import NotFound from "../components/pages/NotFound";

const Index: NextPage<IPageProps> = ({ status, data }) => {
  return status ? <Landing /> : <NotFound />;
};

export async function getServerSideProps({ req, params }: { res: any; req: any; params: any; query: any }) {
  try {
    // Do some api call to validate
    // const cookies = new Cookies(req.headers.cookie);
    // const raw = await fetch(`${BASE_URL}/validate`);
    // const response = await raw.json();
    // return { props: response };
    return { props: { status: true } };
  } catch (error) {
    return { props: { status: false } };
  }
}

export default Index;
