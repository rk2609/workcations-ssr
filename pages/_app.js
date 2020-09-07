import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

import { initGA, logPageView } from "../components/ga";

import { wrapper } from "../redux/store";

const theme = {
  colors: {
    primary: "#ff6b6c",
  },
};

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    initGA();
    logPageView();
    const options = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init("717219922161498", options);
    ReactPixel.pageView();
    Router.events.on("routeChangeComplete", () => {
      logPageView();
      ReactPixel.pageView();
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
