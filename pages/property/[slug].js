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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
  const getProperties = async (url, requestOptions) =>
    await fetch(url, requestOptions)
      .then((res) => res.text())
      .then((res) => JSON.parse(res).feed.entry)
      .then((obj) => {
        return obj.map((item) => {
          return {
            slug: item.gsx$slug.$t,
            title: item.gsx$title.$t,
            titleShort: item.gsx$titleshort.$t,
            type: item.gsx$type.$t,
            location: { city: item.gsx$city.$t, state: item.gsx$state.$t },
            images: [
              item.gsx$imagefirst.$t,
              item.gsx$imagesecond.$t,
              item.gsx$imagethird.$t,
              item.gsx$imagefourth.$t,
            ],
            features: [
              item.gsx$featurefirst.$t,
              item.gsx$featuresecond.$t,
              item.gsx$featurethird.$t,
              item.gsx$featurefourth.$t,
            ],
            ultrashort: item.gsx$ultrashort.$t,
            short: item.gsx$short.$t,
            normal: item.gsx$normal.$t,
            long: item.gsx$long.$t,
            ultralong: item.gsx$ultralong.$t,
            visibility: item.gsx$visibility.$t,
          };
        });
      });

  const getPropertiesListExcel = async () => {
    const url =
      "https://spreadsheets.google.com/feeds/list/14sxSAFqgV2o3xTlK2nghOxXhecij8FGQlZpECee45gM/1/public/values?alt=json";

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return await getProperties(url, requestOptions);
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
  const getProperties = async (url, requestOptions) =>
    await fetch(url, requestOptions)
      .then((res) => res.text())
      .then((res) => JSON.parse(res).feed.entry)
      .then((obj) => {
        return obj.map((item) => {
          return {
            slug: item.gsx$slug.$t,
            title: item.gsx$title.$t,
            titleShort: item.gsx$titleshort.$t,
            type: item.gsx$type.$t,
            location: { city: item.gsx$city.$t, state: item.gsx$state.$t },
            images: [
              item.gsx$imagefirst.$t,
              item.gsx$imagesecond.$t,
              item.gsx$imagethird.$t,
              item.gsx$imagefourth.$t,
            ],
            features: [
              item.gsx$featurefirst.$t,
              item.gsx$featuresecond.$t,
              item.gsx$featurethird.$t,
              item.gsx$featurefourth.$t,
            ],
            ultrashort: item.gsx$ultrashort.$t,
            short: item.gsx$short.$t,
            normal: item.gsx$normal.$t,
            long: item.gsx$long.$t,
            ultralong: item.gsx$ultralong.$t,
            visibility: item.gsx$visibility.$t,
          };
        });
      });

  const getProperty = async (url, requestOptions) =>
    await fetch(url, requestOptions)
      .then((res) => res.text())
      .then((result) => JSON.parse(result).feed.entry)
      .then((obj) => {
        return [
          {
            slug: obj[0].gsx$slug.$t,
            title: obj[0].gsx$title.$t,
            titleShort: obj[0].gsx$titleshort.$t,
            type: obj[0].gsx$type.$t,
            location: { city: obj[0].gsx$city.$t, state: obj[0].gsx$state.$t },
            minDuration: Number(obj[0].gsx$minduration.$t),
            about: obj[0].gsx$about.$t,
            breakfast: Number(obj[0].gsx$breakfast.$t),
            lunch: Number(obj[0].gsx$lunch.$t),
            dinner: Number(obj[0].gsx$dinner.$t),
            features: obj
              .filter((item) => item.gsx$features.$t !== "")
              .map((item) => item.gsx$features.$t),
            inventory: [
              ...new Set(
                obj
                  .filter((item) => item.gsx$roomtype.$t !== "")
                  .map((item) => item.gsx$roomtype.$t)
              ),
            ].map((roomType) => {
              const index = obj
                .map((item) => item.gsx$roomtype.$t)
                .indexOf(roomType);
              return {
                type: roomType,
                image: obj[index].gsx$image.$t,
                max: Number(obj[index].gsx$max.$t),
                unit: obj[index].gsx$unit.$t,
                ultrashort: obj
                  .filter((item) => item.gsx$roomtype.$t === roomType)
                  .map((item) => {
                    return {
                      sharing: item.gsx$sharing.$t,
                      cost: Number(item.gsx$ultrashort.$t),
                    };
                  }),
                short: obj
                  .filter((item) => item.gsx$roomtype.$t === roomType)
                  .map((item) => {
                    return {
                      sharing: item.gsx$sharing.$t,
                      cost: Number(item.gsx$short.$t),
                    };
                  }),
                normal: obj
                  .filter((item) => item.gsx$roomtype.$t === roomType)
                  .map((item) => {
                    return {
                      sharing: item.gsx$sharing.$t,
                      cost: Number(item.gsx$normal.$t),
                    };
                  }),
                long: obj
                  .filter((item) => item.gsx$roomtype.$t === roomType)
                  .map((item) => {
                    return {
                      sharing: item.gsx$sharing.$t,
                      cost: Number(item.gsx$long.$t),
                    };
                  }),
                ultralong: obj
                  .filter((item) => item.gsx$roomtype.$t === roomType)
                  .map((item) => {
                    return {
                      sharing: item.gsx$sharing.$t,
                      cost: Number(item.gsx$ultralong.$t),
                    };
                  }),
              };
            }),

            images: obj
              .filter((item) => item.gsx$images.$t !== "")
              .map((item) => item.gsx$images.$t),
            inclusions: obj
              .filter((item) => item.gsx$inclusions.$t !== "")
              .map((item) => item.gsx$inclusions.$t),
            exclusions: obj
              .filter((item) => item.gsx$exclusions.$t !== "")
              .map((item) => item.gsx$exclusions.$t),
            nearby: obj
              .filter((item) => item.gsx$nearbytitle.$t !== "")
              .map((item) => {
                return {
                  image: item.gsx$nearbyimage.$t,
                  title: item.gsx$nearbytitle.$t,
                  distance: item.gsx$nearbydistance.$t,
                };
              }),
            essentials: obj
              .filter((item) => item.gsx$essentialstitle.$t !== "")
              .map((item) => {
                return {
                  title: item.gsx$essentialstitle.$t,
                  distance: item.gsx$essentialsdistance.$t,
                };
              }),
          },
        ];
      });

  const getPropertyExcel = async (slug) => {
    let sheetNo = 5;

    await getProperties(
      "https://spreadsheets.google.com/feeds/list/14sxSAFqgV2o3xTlK2nghOxXhecij8FGQlZpECee45gM/1/public/values?alt=json",
      {
        method: "GET",
        redirect: "follow",
      }
    ).then((res) => {
      sheetNo = res.map((item) => item.slug).indexOf(slug) + 3;
    });

    const url =
      "https://spreadsheets.google.com/feeds/list/14sxSAFqgV2o3xTlK2nghOxXhecij8FGQlZpECee45gM/" +
      sheetNo +
      "/public/values?alt=json";

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    return await getProperty(url, requestOptions);
  };

  const propertyData = await getPropertyExcel(params.slug);

  return {
    props: { property: propertyData[0] },
    revalidate: 1,
  };
};

export default Property;
