import React, { useState } from "react";
import {CommonChart} from "../../commonChart/CommonChart";

const categories = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
const data = [2198329, 2432066, 3061975, 3997078, 4865598, 6116385, 7986789, 10542880, 12926212, 16160967];

export const IndicatorsFSSPNUM = () => {
    return (
        <>
            <CommonChart
                label={"Дел о взыскании с физических лиц в пользу кредитных организаций в производстве ФССП"}
                data={data}
                categories={categories}
            />
        </>
    );
};
