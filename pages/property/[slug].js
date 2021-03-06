import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

import Layout from "../../components/layout/layout";
import PropertyPage from "../../containers/property-page/property-page";
import Spinner from "../../components/spinner/spinner";

const Property = ({ property }) => {
  const router = useRouter();

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
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      {router.isFallback ? (
        <Spinner />
      ) : (
        <PropertyPage {...property} loadElements={loadElements} />
      )}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const getPropertiesListExcel = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const url =
      "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/properties";

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  };

  const properties = await getPropertiesListExcel();

  const pathArray = properties.map((property) => {
    return {
      params: {
        slug: property.slug,
      },
    };
  });

  return {
    paths: pathArray,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const getPropertyExcel = async (slug) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const url =
      "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/property/" +
      slug;

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  };

  const propertyData = await getPropertyExcel(params.slug);

  return {
    props: { property: propertyData[0] },
    revalidate: 1,
  };
};

export default Property;
