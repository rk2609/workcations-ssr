import { useRouter } from "next/router";

import Head from "next/head";

import Layout from "../../components/layout/layout";
import FiltersMobile from "../../components/filters-mobile/filters-mobile";

const MobileFilter = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <Layout>
      <Head>
        <title>Filter By {type}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FiltersMobile filterType={type} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          type: "type",
        },
      },
      {
        params: {
          type: "states",
        },
      },
      {
        params: {
          type: "price",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default MobileFilter;
