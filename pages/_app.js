import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { wrapper } from "../redux/store";

const theme = {
  colors: {
    primary: "#ff6b6c",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
