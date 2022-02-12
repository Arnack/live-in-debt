import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import mapData from "./helpers/mapData";


if (typeof Highcharts === 'object') {
    require('highcharts/modules/map')(Highcharts);
}

const options = {
    chart: {
        map: 'countries/ru/custom/ru-all-disputed'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ru/custom/ru-all-disputed.js">Russia with disputed territories</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: [],
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
}



export const RusMap = ({ mapTitle,  data }) => {


    const mapOptions = {
        title: {
            text: mapTitle || ''
        },
        colorAxis: {
            min: 0,
            // stops: [[0.4, '#f88f8f'], [0.65, '#fd4d4d'], [1, '#ff0000']]
        },

        series: [
            {
                mapData: mapData,
                name: 'Russia',
                data
            }
        ]
    };

    return <>
        <HighchartsReact
            highcharts={Highcharts}
            constructorType={'mapChart'}
            options={mapOptions}
        />
    </>
}