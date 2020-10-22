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
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const maximumDate = {
    year: 2021,
    month: 3,
    day: 31,
  };

  console.log(inventory, slug, title, minDuration, type);

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

  const disabledDays = allDatesData
    .filter((item) => item.availability <= 0)
    .map((item) => {
      return {
        date: item.date,
        year: Number(item.date.split("-")[0]),
        month: Number(item.date.split("-")[1]),
        day: Number(item.date.split("-")[2]),
      };
    });

  const durationTypes = ["short", "weekly", "momthly"];

  const [duration, setDuration] = useState(1);

  const [durationDisabled, setDurationDisabled] = useState([
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (minDuration > 20) {
      setDurationDisabled([true, true, false]);
      setDuration(2);
      return;
    }
    if (minDuration > 6) {
      setDurationDisabled([true, false, false]);
      return;
    }
  }, [minDuration]);

  console.log(durationDisabled);

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
