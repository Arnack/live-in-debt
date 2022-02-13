import React from "react";
import {CommonChart} from "../../commonChart/CommonChart";


const categories = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
const data = [927966600, 1112624872, 1440895429, 1864710740, 2256402852, 2439548754, 2541102119, 2664216859, 2719223365, 2880078264];

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
