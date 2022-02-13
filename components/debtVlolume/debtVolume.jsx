import React from "react";
import {CommonChart} from "../commonChart/CommonChart";


const categories = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
const data = []
export const IndicatorsFSSPAmount = () => {
    return (
        <>
            <CommonChart
                label={"Сумма дел о взыскании с физических лиц в пользу кредитных организаций в производстве ФССП"}
                data={data}
                categories={categories}
            />
        </>
    );
};
