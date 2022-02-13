import React from "react";
import {CommonChart} from "../commonChart/CommonChart";


const categories = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
const data = []
export const IndicatorsFSSPAmount = () => {
    return (
        <>
            <CommonChart
                label={"Общая сумма взыскиваемых с граждан средств\n в пользу кредитных организаций (ФССП)"}
                data={data}
                type={"column"}
                categories={categories}
            />
        </>
    );
};
