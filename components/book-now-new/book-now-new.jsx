import React, { useState, useEffect, Fragment } from "react";
import AddToCart from "../add-to-cart/add-to-cart";

import Calendar from "../calendar/calendar";

import {
  Container,
  SubContainer,
  Top,
  Heading,
  DurationWrapper,
  DurationItem,
  Line,
  CinCoutHeading,
  RoomsContainer,
  Card,
  ImageContainer,
  Image,
  RoomFeatures,
  AvailableRooms,
  Details,
  Title,
  SharingItem,
  Sharing,
  PricingContainer,
  Pricing,
  Striked,
  Price,
  Unit,
  AddToCartButtons,
  AddButton,
  QuantityContainer,
  MinusButton,
  Quantity,
  PlusButton,
} from "./book-now-new.style";

const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

const getNoOfDays = (date1, date2) => {
  return (date2.getTime() - date1.getTime()) / 86400000;
};

const addDays = (days, currentDate) => {
  const date = new Date(currentDate);
  date.setDate(date.getDate() + days);
  return date;
};

const getDatesBetweenPricing = (from, to) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  let dateArray = [];
  let currentDate = fromDate;

  while (currentDate < toDate) {
    dateArray.push(
      `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`
    );
    currentDate = addDays(1, currentDate);
  }

  return dateArray;
};

const getDatesBetween = (from, to) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  let dateArray = [];
  let currentDate = fromDate;

  while (currentDate <= toDate) {
    dateArray.push(
      `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`
    );
    currentDate = addDays(1, currentDate);
  }

  return dateArray;
};

const mappingTree = [
  "Single Sharing",
  "Double Sharing",
  "Triple Sharing",
  "Quad Sharing",
  "Entire Apartment",
  "Dorm Bed",
  "Single Room",
  "Entire Room",
];

const mappingImages = [
  "/book-now/person.svg",
  "/book-now/2person.svg",
  "/book-now/3person.svg",
  "/book-now/4person.svg",
  "/book-now/apartment.svg",
  "/book-now/person.svg",
  "/book-now/person.svg",
  "/book-now/apartment.svg",
];

const typesOfViews = [
  "Mountain View",
  "Beach View",
  "Forest View",
  "Lake View",
  "River View",
];

const typesOfUnit = ["Room", "Unit", "Bed", "Cottage"];

const getRoomSharing = (unit, occupancy) => {
  const mappingIndex =
    unit === 0 || unit === 3
      ? occupancy === 1
        ? 0
        : occupancy === 2
        ? 1
        : occupancy === 3
        ? 2
        : 3
      : unit === 1
      ? 4
      : 5;

  return mappingIndex;
};

const BookNowNew = ({
  inventory,
  slug,
  title,
  minDuration,
  type,
  isServer,
}) => {
  const maximumDate = {
    year: 2021,
    month: 3,
    day: 31,
  };

  const pricingArray = inventory.map((item) =>
    item.pricing.map((pricingItem, i) => {
      return {
        from: pricingItem.from,
        to: pricingItem.to,
        dates:
          pricingItem.from !== 0
            ? getDatesBetween(pricingItem.from, pricingItem.to)
            : [],
        available: pricingItem.available,
        roomOnly: pricingItem.roomOnly,
        extraBed: pricingItem.extraBed,
      };
    })
  );

  const [today, setToday] = useState(new Date());

  const allDatesData = getDatesBetween(
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
    "2021-03-31"
  )
    .map((item) => {
      return {
        date: item,
        pricing: pricingArray.map((pricingItem) => {
          for (let i = 1; i < pricingItem.length; i++) {
            if (pricingItem[i].dates.indexOf(item) !== -1) {
              return {
                available: pricingItem[i].available,
                roomOnly: pricingItem[i].roomOnly,
                extraBed: pricingItem[i].extraBed,
              };
            }
          }
          return {
            available: pricingItem[0].available,
            roomOnly: pricingItem[0].roomOnly,
            extraBed: pricingItem[0].extraBed,
          };
        }),
      };
    })
    .map((item) => {
      return {
        date: item.date,
        pricing: item.pricing,
        availability: item.pricing
          .map((pricingItem) => pricingItem.available)
          .reduce((total, num) => total + num, 0),
      };
    });

  const disabledDates = allDatesData.filter((item) => item.availability <= 0);

  const disabledDays = disabledDates.map((item) => {
    return {
      date: item.date,
      year: Number(item.date.split("-")[0]),
      month: Number(item.date.split("-")[1]),
      day: Number(item.date.split("-")[2]),
    };
  });

  const durationTypes = ["short", "weekly", "monthly"];

  const [duration, setDuration] = useState(0);

  const [durationDisabled, setDurationDisabled] = useState([
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (minDuration > 20) {
      setDurationDisabled([true, true, false]);
      setDuration(2);
    } else if (minDuration > 6) {
      setDurationDisabled([true, false, false]);
      setDuration(1);
    }
  }, [minDuration]);

  const getStartingRangeShort = () => {
    const allDatesLength = allDatesData.length;

    for (let i = 0; i < allDatesLength; i++) {
      const startingDate = allDatesData[i].date;

      const dateRange = getDatesBetween(
        startingDate,
        addDays(minDuration, startingDate)
      );

      const blockedDates = dateRange.filter(
        (item) =>
          disabledDates.map((dateItem) => dateItem.date).indexOf(item) !== -1
      );

      if (blockedDates.length === 0) {
        return dateRange;
      }
    }
  };

  const getStartingRangeWeekly = () => {
    const allDatesLength = allDatesData.length;

    for (let i = 0; i < allDatesLength; i++) {
      const startingDate = allDatesData[i].date;

      const dateRange = getDatesBetween(
        startingDate,
        addDays(minDuration < 7 ? 7 : minDuration, startingDate)
      );

      const blockedDates = dateRange.filter(
        (item) =>
          disabledDates.map((dateItem) => dateItem.date).indexOf(item) !== -1
      );

      if (blockedDates.length === 0) {
        return dateRange;
      }
    }
  };

  const getStartingRangeMonthly = () => {
    const allDatesLength = allDatesData.length;

    for (let i = 0; i < allDatesLength; i++) {
      const startingDate = allDatesData[i].date;

      const dateRange = getDatesBetween(
        startingDate,
        addDays(minDuration < 30 ? 30 : minDuration, startingDate)
      );

      const blockedDates = dateRange.filter(
        (item) =>
          disabledDates.map((dateItem) => dateItem.date).indexOf(item) !== -1
      );

      if (blockedDates.length === 0) {
        return dateRange;
      }
    }
  };

  const startingRangeShort = getStartingRangeShort();
  const startingRangeWeekly = getStartingRangeWeekly();
  const startingRangeMonthly = getStartingRangeMonthly();

  const [startingRange, setStartingRange] = useState(
    duration === 0
      ? startingRangeShort
      : duration === 1
      ? startingRangeWeekly
      : startingRangeMonthly
  );

  const durationUpdated = (duration) => {
    duration === 0
      ? setStartingRange(startingRangeShort)
      : duration === 1
      ? setStartingRange(startingRangeWeekly)
      : setStartingRange(startingRangeMonthly);
  };

  const [selectedDayRange, setSelectedDayRange] = useState({
    from: {
      year: Number(startingRange[0].split("-")[0]),
      month: Number(startingRange[0].split("-")[1]),
      day: Number(startingRange[0].split("-")[2]),
    },
    to: {
      year: Number(startingRange[startingRange.length - 1].split("-")[0]),
      month: Number(startingRange[startingRange.length - 1].split("-")[1]),
      day: Number(startingRange[startingRange.length - 1].split("-")[2]),
    },
  });

  useEffect(() => {
    setSelectedDayRange({
      from: {
        year: Number(startingRange[0].split("-")[0]),
        month: Number(startingRange[0].split("-")[1]),
        day: Number(startingRange[0].split("-")[2]),
      },
      to: {
        year: Number(startingRange[startingRange.length - 1].split("-")[0]),
        month: Number(startingRange[startingRange.length - 1].split("-")[1]),
        day: Number(startingRange[startingRange.length - 1].split("-")[2]),
      },
    });
  }, [startingRange]);

  const [pricingDuration, setPricingDuration] = useState("ultraShort");

  useEffect(() => {
    if (!!selectedDayRange.from && !!selectedDayRange.to) {
      const startingDate = new Date(
        `${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`
      );
      const endingDate = new Date(
        `${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`
      );
      const noOfDays = Math.round(getNoOfDays(startingDate, endingDate));

      noOfDays < 7 && duration !== 0
        ? setDuration(0)
        : noOfDays > 7 && noOfDays < 22 && duration !== 1
        ? setDuration(1)
        : noOfDays > 21 && duration !== 2
        ? setDuration(2)
        : null;

      noOfDays > 29
        ? setPricingDuration("monthly")
        : noOfDays > 20
        ? setPricingDuration("ultraLong")
        : noOfDays > 15
        ? setPricingDuration("long")
        : noOfDays > 10
        ? setPricingDuration("normal")
        : noOfDays > 5
        ? setPricingDuration("short")
        : setPricingDuration("ultraShort");
    }
  }, [selectedDayRange]);

  const [cartDetails, setCartDetails] = useState(null);

  useEffect(() => {
    if (!!selectedDayRange.from && !!selectedDayRange.to) {
      const startingDate = new Date(
        `${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`
      );
      const endingDate = new Date(
        `${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`
      );
      const datesList = allDatesData.map((item) => item.date);
      setCartDetails(
        inventory.map((room, i) => {
          return {
            id: room.id,
            max: room.max,
            name: room.name,
            occupancy: room.occupancy,
            unit: room.unit,
            pricing: getDatesBetweenPricing(startingDate, endingDate).map(
              (dateItem, j) => {
                const index = datesList.indexOf(dateItem);
                return {
                  date: dateItem,
                  available: allDatesData[index].pricing[i].available,
                  roomOnly: allDatesData[index].pricing[i].roomOnly,
                  extraBed: allDatesData[index].pricing[i].extraBed,
                };
              }
            ),
            available: Math.min(
              ...getDatesBetweenPricing(startingDate, endingDate)
                .map((dateItem, j) => {
                  const index = datesList.indexOf(dateItem);
                  return {
                    date: dateItem,
                    available: allDatesData[index].pricing[i].available,
                    roomOnly: allDatesData[index].pricing[i].roomOnly,
                    extraBed: allDatesData[index].pricing[i].extraBed,
                  };
                })
                .map((pricingItem) => pricingItem.available)
            ),
          };
        })
      );
    }
  }, [selectedDayRange]);

  const getRoomPrice = (roomIndex, pricingDuration) => {
    if (!!cartDetails && cartDetails.length > 0) {
      return (
        Math.round(
          arrAvg(
            cartDetails[roomIndex].pricing.map(
              (pricingItem) => pricingItem.roomOnly[pricingDuration]
            )
          ) / 50
        ) * 50
      );
    }
    return inventory[roomIndex].pricing[0].roomOnly[pricingDuration];
  };

  const getExtraBedPrice = (roomIndex, extraBedIndex, pricingDuration) => {
    if (!!cartDetails && cartDetails.length > 0) {
      switch (extraBedIndex) {
        case 0:
          return (
            Math.round(
              arrAvg(
                cartDetails[roomIndex].pricing.map(
                  (pricingItem) =>
                    pricingItem.roomOnly[pricingDuration] +
                    pricingItem.extraBed[0][pricingDuration]
                )
              ) / 50
            ) * 50
          );
        case 1:
          return (
            Math.round(
              arrAvg(
                cartDetails[roomIndex].pricing.map(
                  (pricingItem) =>
                    pricingItem.roomOnly[pricingDuration] +
                    pricingItem.extraBed[0][pricingDuration] +
                    pricingItem.extraBed[1][pricingDuration]
                )
              ) / 50
            ) * 50
          );
        case 2:
          return (
            Math.round(
              arrAvg(
                cartDetails[roomIndex].pricing.map(
                  (pricingItem) =>
                    pricingItem.roomOnly[pricingDuration] +
                    pricingItem.extraBed[0][pricingDuration] +
                    pricingItem.extraBed[1][pricingDuration] +
                    pricingItem.extraBed[2][pricingDuration]
                )
              ) / 50
            ) * 50
          );
        case 3:
          return (
            Math.round(
              arrAvg(
                cartDetails[roomIndex].pricing.map(
                  (pricingItem) =>
                    pricingItem.roomOnly[pricingDuration] +
                    pricingItem.extraBed[0][pricingDuration] +
                    pricingItem.extraBed[1][pricingDuration] +
                    pricingItem.extraBed[2][pricingDuration] +
                    pricingItem.extraBed[3][pricingDuration]
                )
              ) / 50
            ) * 50
          );
        case 4:
          return (
            Math.round(
              arrAvg(
                cartDetails[roomIndex].pricing.map(
                  (pricingItem) =>
                    pricingItem.roomOnly[pricingDuration] +
                    pricingItem.extraBed[0][pricingDuration] +
                    pricingItem.extraBed[1][pricingDuration] +
                    pricingItem.extraBed[2][pricingDuration] +
                    pricingItem.extraBed[3][pricingDuration] +
                    pricingItem.extraBed[4][pricingDuration]
                )
              ) / 50
            ) * 50
          );
        case 5:
          return (
            Math.round(
              arrAvg(
                cartDetails[roomIndex].pricing.map(
                  (pricingItem) =>
                    pricingItem.roomOnly[pricingDuration] +
                    pricingItem.extraBed[0][pricingDuration] +
                    pricingItem.extraBed[1][pricingDuration] +
                    pricingItem.extraBed[2][pricingDuration] +
                    pricingItem.extraBed[3][pricingDuration] +
                    pricingItem.extraBed[4][pricingDuration] +
                    pricingItem.extraBed[5][pricingDuration]
                )
              ) / 50
            ) * 50
          );
      }
    }

    switch (extraBedIndex) {
      case 0:
        return (
          inventory[roomIndex].pricing[0].roomOnly[pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[0][pricingDuration]
        );
      case 1:
        return (
          inventory[roomIndex].pricing[0].roomOnly[pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[0][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[1][pricingDuration]
        );
      case 2:
        return (
          inventory[roomIndex].pricing[0].roomOnly[pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[0][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[1][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[2][pricingDuration]
        );
      case 3:
        return (
          inventory[roomIndex].pricing[0].roomOnly[pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[0][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[1][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[2][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[3][pricingDuration]
        );
      case 4:
        return (
          inventory[roomIndex].pricing[0].roomOnly[pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[0][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[1][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[2][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[3][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[4][pricingDuration]
        );
      case 5:
        return (
          inventory[roomIndex].pricing[0].roomOnly[pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[0][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[1][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[2][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[3][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[4][pricingDuration] +
          inventory[roomIndex].pricing[0].extraBed[5][pricingDuration]
        );
    }
  };

  const sharingCounts = inventory.map((room, i) =>
    new Array(room.pricing[0].extraBed.length + 1).fill(0)
  );

  const [roomCount, setRoomCount] = useState(sharingCounts);

  useEffect(() => {
    setRoomCount(sharingCounts);
  }, [selectedDayRange]);

  const addRoom = (roomIndex, sharingIndex) => {
    setRoomCount(
      roomCount.map((item, i) =>
        item.map((subItem, j) =>
          roomIndex === i &&
          sharingIndex === j &&
          item.reduce((a, b) => a + b, 0) < cartDetails[i].available
            ? subItem + 1
            : subItem
        )
      )
    );
  };

  const removeRoom = (roomIndex, sharingIndex) => {
    setRoomCount(
      roomCount.map((item, i) =>
        item.map((subItem, j) =>
          roomIndex === i && sharingIndex === j && subItem > 0
            ? subItem - 1
            : subItem
        )
      )
    );
  };

  return (
    <Container>
      {!isServer ? (
        <SubContainer>
          <Top>
            <Heading>Book With Us</Heading>
            <DurationWrapper>
              <DurationItem
                isActive={duration === 0}
                isDisabled={durationDisabled[0]}
                onClick={() => {
                  if (!durationDisabled[0] && duration !== 0) {
                    setDuration(0);
                    durationUpdated(0);
                  }
                }}
              >
                Short Stay<span>(1-6 days)</span>
              </DurationItem>
              <DurationItem
                isActive={duration === 1}
                isDisabled={durationDisabled[1]}
                onClick={() => {
                  if (!durationDisabled[1] && duration !== 1) {
                    setDuration(1);
                    durationUpdated(1);
                  }
                }}
              >
                Weekly Stay<span>(7-20 days)</span>
              </DurationItem>
              <DurationItem
                isActive={duration === 2}
                isDisabled={durationDisabled[2]}
                onClick={() => {
                  if (!durationDisabled[2] && duration !== 2) {
                    setDuration(2);
                    durationUpdated(2);
                  }
                }}
              >
                Monthly Stay<span>(20+ days)</span>
              </DurationItem>
            </DurationWrapper>
            <Calendar
              selectedDayRange={selectedDayRange}
              setSelectedDayRange={setSelectedDayRange}
              disabledDays={disabledDays}
              maximumDate={maximumDate}
            />
            <Line />
            <CinCoutHeading>Select Rooms</CinCoutHeading>
          </Top>
          <RoomsContainer className="rooms-container">
            {inventory.map((room, i) => (
              <Card key={`room no ${i + 1}`}>
                <ImageContainer>
                  <Image
                    style={{
                      backgroundImage: `url(https://d1xmqx9e0b6ljd.cloudfront.net/${slug}/${room.images[0]}.jpg)`,
                    }}
                  />
                  <RoomFeatures>
                    {!!cartDetails && cartDetails.length > 0 ? (
                      <AvailableRooms>
                        {cartDetails[i].available} {typesOfUnit[room.unit]}
                        {cartDetails[i].available > 1 ? "s" : null} available!
                      </AvailableRooms>
                    ) : null}
                    {room.size ? (
                      <span>• Room Size: {room.size} sqft</span>
                    ) : null}
                    {room.balcony ? <span>• {room.balcony}</span> : null}
                    {room.view.length > 0 && room.view[0] !== -1 ? (
                      <span>
                        • {typesOfViews[room.view[0]]}{" "}
                        {room.view
                          .filter((view, k) => k > 0)
                          .map((view) => (
                            <Fragment key={`view ${i}`}>
                              & {typesOfViews[view]}
                            </Fragment>
                          ))}
                      </span>
                    ) : null}
                    {room.kitchen ? <span>• {room.kitchen}</span> : null}
                  </RoomFeatures>
                </ImageContainer>
                <Details>
                  <Title>{room.name}</Title>
                  <SharingItem key={`room ${i + 1} sharing 1`}>
                    <Sharing>
                      <img
                        src={
                          mappingImages[
                            getRoomSharing(room.unit, room.occupancy)
                          ]
                        }
                      />
                      {mappingTree[getRoomSharing(room.unit, room.occupancy)]}
                    </Sharing>
                    <PricingContainer>
                      <Pricing>
                        {getRoomPrice(i, pricingDuration) <
                        getRoomPrice(i, "ultraShort") ? (
                          <Striked>₹ {getRoomPrice(i, "ultraShort")}</Striked>
                        ) : null}
                        <Price>
                          ₹ {getRoomPrice(i, pricingDuration)}
                          {getRoomPrice(i, pricingDuration) <
                          getRoomPrice(i, "ultraShort") ? (
                            <span>
                              {Math.round(
                                ((getRoomPrice(i, "ultraShort") -
                                  getRoomPrice(i, pricingDuration)) *
                                  100) /
                                  getRoomPrice(i, "ultraShort")
                              )}
                              % off
                            </span>
                          ) : null}
                        </Price>
                        <Unit>per {typesOfUnit[room.unit]} per night</Unit>
                      </Pricing>
                      {!!cartDetails && cartDetails.length > 0 ? (
                        <AddToCart
                          sharingCount={roomCount[i][0]}
                          roomCount={roomCount[i].reduce((a, b) => a + b, 0)}
                          roomAvailable={cartDetails[i].available}
                          addRoom={() => {
                            addRoom(i, 0);
                          }}
                          removeRoom={() => {
                            removeRoom(i, 0);
                          }}
                        />
                      ) : null}
                    </PricingContainer>
                  </SharingItem>
                  {room.pricing[0].extraBed.map((item, j) => (
                    <SharingItem key={`room ${i + 1} sharing ${j + 2}`}>
                      <Sharing>
                        <img
                          src={
                            mappingImages[
                              getRoomSharing(room.unit, room.occupancy + j + 1)
                            ]
                          }
                        />
                        {
                          mappingTree[
                            getRoomSharing(room.unit, room.occupancy + j + 1)
                          ]
                        }
                      </Sharing>
                      <PricingContainer>
                        <Pricing>
                          {getExtraBedPrice(i, j, pricingDuration) <
                          getExtraBedPrice(i, j, "ultraShort") ? (
                            <Striked>₹ {getRoomPrice(i, "ultraShort")}</Striked>
                          ) : null}
                          <Price>
                            ₹ {getExtraBedPrice(i, j, pricingDuration)}
                            {getExtraBedPrice(i, j, pricingDuration) <
                            getExtraBedPrice(i, j, "ultraShort") ? (
                              <span>
                                {Math.round(
                                  ((getExtraBedPrice(i, j, "ultraShort") -
                                    getExtraBedPrice(i, j, pricingDuration)) *
                                    100) /
                                    getExtraBedPrice(i, j, "ultraShort")
                                )}
                                % off
                              </span>
                            ) : null}
                          </Price>
                          <Unit>per {typesOfUnit[room.unit]} per night</Unit>
                        </Pricing>
                        {!!cartDetails && cartDetails.length > 0 ? (
                          <AddToCart
                            sharingCount={roomCount[i][j + 1]}
                            roomCount={roomCount[i].reduce((a, b) => a + b, 0)}
                            roomAvailable={cartDetails[i].available}
                            addRoom={() => {
                              addRoom(i, j + 1);
                            }}
                            removeRoom={() => {
                              removeRoom(i, j + 1);
                            }}
                          />
                        ) : null}
                      </PricingContainer>
                    </SharingItem>
                  ))}
                </Details>
              </Card>
            ))}
          </RoomsContainer>
        </SubContainer>
      ) : null}
    </Container>
  );
};

export default BookNowNew;
