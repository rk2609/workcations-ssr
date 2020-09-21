import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GA_TRACKING_ID } from "../components/ga";

/* <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
      rel="stylesheet"
    />*/

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
            }}
          />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Enjoy work and vacations from Peaceful destinations with Fast wi-fi and homely meals. We are committed to provide chill and productive work environment at affordable prices."
          />
          <meta property="og:image" content="/logo.png" />
          <meta
            property="og:description"
            content="Enjoy work and vacations from Peaceful destinations with Fast wi-fi and homely meals. We are committed to provide chill and productive work environment at affordable prices."
          />
          <meta
            property="og:title"
            content="Workcations - Think Remote Work! Think Workcations!"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://www.wanderon.in" />
          <link rel="dns-prefetch" href="https://www.wanderon.in" />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
