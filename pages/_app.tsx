import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux";
import { Toaster } from "react-hot-toast";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>BeatFantasy</title>
      </Head>
      <Provider store={store}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName="toaster-wrapper"
          containerStyle={{}}
          toastOptions={{
            className: "single-toaster",
            duration: 5000,
            icon: null,
            style: { background: "#ffc107", color: "#fff" },
            success: { style: { background: "#2e3a3a", color: "#fff" } },
            error: { style: { background: "#b33234", color: "#fff" } }
          }}
        />
        <AnyComponent {...pageProps} />
      </Provider>
    </>
  );
}
