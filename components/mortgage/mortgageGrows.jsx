import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Количество ипотек'
    },
    xAxis: {
        categories: ["01.01.2009", "01.01.2010", "01.01.2011", "01.01.2012", "01.01.2013", "01.01.2014", "01.01.2015", "01.01.2016", "01.01.2017", "01.01.2018", "01.01.2019", "01.01.2020", "01.01.2021", "01.01.2022"]
    },
    yAxis: {
        label: ""
    },

    legend: { enabled:false },
    series: [
        {
            name: 'Количество ипотек',
            data: [489032, 177950, 395422, 590437, 740975, 880326, 1059396, 710571, 1169439, 189874, 192834, 192489, 261638, 247054]
        }
    ]
};


export const MortgageGrow = () => {
    return <>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </>
}