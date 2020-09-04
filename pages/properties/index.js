import { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

import { setPropertyListStart } from "../../redux/property/properties.actions";
import { selectPropertyList } from "../../redux/property/properties.selectors";

import { toggleContactPopupPosition } from "../../redux/contact-popup/contact-popup.actions";

import Filters from "../../components/filters/filters";
import PropertyList from "../../containers/property-list/property-list";

import { Container, Heading } from "../../styles/properties/style";

import Layout from "../../components/layout/layout";

const Properties = () => {
  const dispatch = useDispatch();
  const propertyList = useSelector(selectPropertyList);

  useEffect(() => {
    dispatch(toggleContactPopupPosition(true));

    return () => {
      dispatch(toggleContactPopupPosition(false));
    };
  });

  useEffect(() => {
    if (propertyList.length === 0) {
      dispatch(setPropertyListStart());
    }
  }, [dispatch, propertyList]);

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
        <title>Workcations Properties</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Heading>
          find your <span>Workcation</span>
        </Heading>
        <Filters />
        <PropertyList loadElements={loadElements} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Properties;
