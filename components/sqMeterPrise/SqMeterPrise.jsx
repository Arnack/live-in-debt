import React, { useState } from "react";
import { CommonChart } from "../commonChart/CommonChart";

const categories = [
  "I квартал 2019 г.",
  "II квартал 2019 г.",
  "III квартал 2019 г.",
  "IV квартал 2019 г.",
  "I квартал 2020 г.",
  "II квартал 2020 г.",
  "III квартал 2020 г.",
  "IV квартал 2020 г.",
  "I квартал 2021 г.",
  "II квартал 2021 г.",
  "III квартал 2021 г.",
];
const data = [
  58855.94,
  59447.48,
  60603.69,
  61293.51,
  66285.35,
  67670.66,
  70041.88,
  72857.5,
  75500.12,
  79897.03,
  83379.72,
];

export const SqMeterPrise = () => {
  return (
    <>
      <CommonChart
        label={"Средняя цена квадратного метра"}
        data={data}
        categories={categories}
      />
    </>
  );
};
