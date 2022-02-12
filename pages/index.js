import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Layout from '../modules/layout';
import TinyCharts from '../modules/charts/tinycharts';
import AreaChartExample from '../modules/charts/areachart';
import RadarChartExample from '../modules/charts/radarchart';
import RadialBarChartExample from '../modules/charts/radialbarchart';
import PieChartExample from '../modules/charts/piechart';
import screenfull from 'screenfull';
import IconFullScreen from "react-icons/lib/md/crop-free";
import {RusMap} from "../components/rusmap/rusmap";
import {MortgageChart} from "../components/mortgage/mortgage";
import {MortgageToCitisents} from "../components/mortgageToCitisents/MortgageToSitisents";
import {MortgagePercentAmongAllCredits} from "../components/mortgagePercentAmongAllCredits/MortgagePercentAmongAllCredits";
import {AvarageInetersMortgageRate} from "../components/avarageInetersMortgageRate/AvarageInetersMortgageRate";


const ViewHeader = () => (
  <div className="view-header">
    <header className="text-white">
      <h1 className="h5 title text-uppercase">Жизнь в кредит</h1>
      <p className="mb-0 subtitle">Исследование закредитованности россиян</p>

      {/*<IconFullScreen size="22" color="#fff" onClick={() => screenfull.toggle()} />*/}
    </header>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

export default function ChartsPage() {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <Card className="mb-4">
          <CardBody>
            {/*<h6 className="text-uppercase mb-5">Tiny Charts</h6>*/}
            {/*<TinyCharts />*/}
          </CardBody>
        </Card>
        <div className="row">
          <div className="col-12 col-md-12 mb-12">
            <AvarageInetersMortgageRate />
            {/*<AreaChartExample />*/}
          </div>

          <div className="col-12 col-md-12 mb-12">
            <MortgageToCitisents />
            {/*<RadialBarChartExample />*/}
          </div>
          <div className="col-12 col-md-6 mb-6">
            <MortgageChart />
            {/*<RadarChartExample />*/}
          </div>
          <div className="col-12 col-md-6 mb-4">
            <MortgagePercentAmongAllCredits />
            {/*<PieChartExample />*/}
          </div>
          <div className="col-12 col-md-6 mb-4">


            {/*<iframe title="Средний уровень ипотечной ставки" aria-label="Map" id="datawrapper-chart-2TLYo"*/}
            {/*        src="https://datawrapper.dwcdn.net/2TLYo/1/" scrolling="no" frameBorder="0"*/}
            {/*        style="width: 0; min-width: 100% !important; border: none;" height="444"></iframe>*/}
            {/*<script*/}
            {/*    type="text/javascript">!function (){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();*/}
            {/*</script>*/}

            {/*<PieChartExample />*/}
          </div>
        </div>
      </ViewContent>
    </Layout>
  );
}
