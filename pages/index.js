import { useEffect, useState } from "react";

import Head from "next/head";

import Layout from "../components/layout/layout";

import Hero from "../components/hero/hero";
import Outlook from "../components/outlook/outlook";
import Destinations from "../components/destinations/destinations";
import Recreational from "../components/recreational/recreational";
import Faqs from "../components/faq/faq";

import SectionContainer from "../style-components/section-container/section-container.style";

const Home = () => {
  const isServer = typeof window === "undefined";

  const [loadElements, setLoadElements] = useState(false);

  const handleScroll = () => {
    if (isServer || loadElements) return;
    setLoadElements(true);
  };

  useEffect(() => {
    if (!isServer) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isServer) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <Layout>
      <Head>
        <title>Workcations - Think Remote Work! Think Workcations!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Outlook />
      {loadElements ? <Destinations /> : null}
      {loadElements ? <Recreational /> : null}
      {loadElements ? (
        <SectionContainer>
          <Faqs />
        </SectionContainer>
      ) : null}
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
