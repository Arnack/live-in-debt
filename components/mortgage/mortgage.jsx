import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Количество кредитных организаций'
    },
    xAxis: {
        categories: ["I квартал 2018 г", "II квартал 2018 г", "III квартал 2018 г", "IV квартал 2018 г", "I квартал 2019 г", "II квартал 2019 г", "III квартал 2019 г", "IV квартал 2019 г", "I квартал 2020 г", "II квартал 2020 г", "III квартал 2020 г", "IV квартал 2020 г", "I квартал 2021 г", "II квартал 2021 г", "III квартал 2021 г"],
    },
    yAxis: {
        label: ""
    },
    series: [
        {
            name: 'Количество организаций',
            data: [542, 524, 508, 484, 474, 464, 454, 442, 434, 427, 418, 406, 398, 378, 373]
        }
    ]
};


export const MortgageChart = () => {
    return <>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </>
}