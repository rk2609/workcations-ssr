import React, { useState, useEffect } from "react";

import Calendar from "../calendar/calendar";

import {
  Container,
  SubContainer,
  Top,
  Heading,
  DurationWrapper,
  DurationItem,
} from "./book-now-new.style";

const getNoOfDays = (date1, date2) => {
  return (date2.getTime() - date1.getTime()) / 86400000;
};

const addDays = (days, currentDate) => {
  const date = new Date(currentDate);
  date.setDate(date.getDate() + days);
  return date;
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
    }
  }, [selectedDayRange]);

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
          </Top>
        </SubContainer>
      ) : null}
    </Container>
  );
};

export default BookNowNew;
