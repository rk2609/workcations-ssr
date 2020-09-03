import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { setPropertyListStart } from "../../redux/property/properties.actions";
import { selectPropertyList } from "../../redux/property/properties.selectors";

import {
  CarouselFlex,
  CarouselItem,
  Image,
  ImageText,
  Tag,
  CarouselPrice,
  CarouselDetails,
} from "./carousel.style";

const Carousel = ({ slug }) => {
  const dispatch = useDispatch();
  const propertyList = useSelector(selectPropertyList);

  useEffect(() => {
    if (propertyList.length === 0) {
      dispatch(setPropertyListStart());
    }
  }, [dispatch, propertyList]);

  return (
    <CarouselFlex className="carousel">
      {propertyList.map((property) =>
        slug !== property.slug && property.visibility === "TRUE" ? (
          <Link href={"/property/" + property.slug} key={property.slug}>
            <CarouselItem key={property.slug}>
              <Image
                style={{
                  backgroundImage:
                    "url(https://www.wanderon.in/workcations/" +
                    property.slug +
                    "/" +
                    property.images[0] +
                    ".jpg)",
                }}
              >
                <ImageText>
                  <Tag tag={property.type}>{property.type}</Tag>
                  <CarouselPrice>
                    {property.long}
                    <span>/night</span>
                  </CarouselPrice>
                </ImageText>
              </Image>
              <CarouselDetails>
                <div>{property.titleShort}</div>
                <span>
                  {property.location.city}, {property.location.state}
                </span>
              </CarouselDetails>
            </CarouselItem>
          </Link>
        ) : null
      )}
    </CarouselFlex>
  );
};

export default Carousel;
