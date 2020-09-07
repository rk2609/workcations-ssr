import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useEffect } from "react";

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
    Router.events.on("routeChangeComplete", logPageView);
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
