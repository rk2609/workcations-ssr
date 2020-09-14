import { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { setPropertyListStart } from "../../redux/property/properties.actions";
import { selectPropertyList } from "../../redux/property/properties.selectors";

import { toggleContactPopupPosition } from "../../redux/contact-popup/contact-popup.actions";

import Filters from "../../components/filters/filters";
import PropertyList from "../../containers/property-list/property-list";

import { Container, Heading } from "../../styles/properties/style";

import Layout from "../../components/layout/layout";

const Properties = () => {
  const router = useRouter();
  const { cities, max, min, states, types } = router.query;

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

  const handleFilter = (states, cities, min, max, types) => {
    console.log(states, cities, min, max, types);
    let queryLink = "?";

    if (states && states.length) {
      queryLink += "&states=" + states[0];
      for (let i = 1; i < states.length; i++) {
        queryLink += "-" + states[i];
      }
    }

    if (cities && cities.length) {
      queryLink += "&cities=" + cities[0];
      for (let i = 1; i < cities.length; i++) {
        queryLink += "-" + cities[i];
      }
    }

    if (types && types.length) {
      queryLink += "&types=" + types[0];
      for (let i = 1; i < types.length; i++) {
        queryLink += "-" + types[i];
      }
    }

    if (min) {
      queryLink += "&min=" + min;
    }

    if (max) {
      queryLink += "&max=" + max;
    }
    router.push(`${encodeURI(queryLink)}`, undefined, { shallow: true });
  };

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
        <Filters
          citiesLink={cities}
          statesLink={states}
          typesLink={types}
          minLink={min}
          maxLink={max}
          handleFilter={handleFilter}
        />
        <PropertyList
          cities={cities}
          states={states}
          types={types}
          min={min}
          max={max}
          loadElements={loadElements}
        />
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
