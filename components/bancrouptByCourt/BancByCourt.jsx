import React, { useState } from "react";
import { CommonChart } from "../commonChart/CommonChart";

const categories = [2016, 2017, 2018, 2019, 2020, 2021];
const data = [19574, 29827, 43984, 68980, 119045, 192846];
export const BancBtCourt = () => {
  return (
    <>
      <CommonChart
        type={"column"}
        label={
          "Судебное признание гражданина банкротом с реализацией имущества гражданина"
        }
        data={data}
        categories={categories}
      />
    </>
  );
};
