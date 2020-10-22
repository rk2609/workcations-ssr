import React, { useState, useEffect } from "react";

import Calendar from "../calendar/calendar";

import { Container } from "./book-now-new.style";

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

const BookNowNew = ({ inventory, slug, title, minDuration, type }) => {
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

  const durationTypes = ["short", "weekly", "momthly"];

  const [duration, setDuration] = useState(1);

  const startingDate = () => {
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

  const startingRange = startingDate();

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

  return (
    <Container>
      <Calendar
        selectedDayRange={selectedDayRange}
        setSelectedDayRange={setSelectedDayRange}
        disabledDays={disabledDays}
        maximumDate={maximumDate}
      />
    </Container>
  );
};

export default BookNowNew;
