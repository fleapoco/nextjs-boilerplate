import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@store/index";
import { Toaster } from "react-hot-toast";
import "@css/globals.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS) document.body.classList.add("ios");
  }, []);

  return (
    <>
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
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
