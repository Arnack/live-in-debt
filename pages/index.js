import React from "react";
import { Card, CardBody } from "reactstrap";
import Layout from "../modules/layout";
import TinyCharts from "../modules/charts/tinycharts";
import AreaChartExample from "../modules/charts/areachart";
import RadarChartExample from "../modules/charts/radarchart";
import RadialBarChartExample from "../modules/charts/radialbarchart";
import PieChartExample from "../modules/charts/piechart";
import screenfull from "screenfull";
import IconFullScreen from "react-icons/lib/md/crop-free";
import { RusMap } from "../components/rusmap/rusmap";
import { MortgageChart } from "../components/mortgage/mortgage";
import { MortgageToCitisents } from "../components/mortgageToCitisents/MortgageToSitisents";
import { MortgagePercentAmongAllCredits } from "../components/mortgagePercentAmongAllCredits/MortgagePercentAmongAllCredits";
import { AvarageInetersMortgageRate } from "../components/avarageInetersMortgageRate/AvarageInetersMortgageRate";
import { SqMeterPrise } from "../components/sqMeterPrise/SqMeterPrise";
import { MortgageNumByRegions } from "../components/mortgageumberByRegions/MortgageNumByRegions";
import { KeyRate } from "../components/keyRate/KeyRate";
import { BancBtCourt } from "../components/bancrouptByCourt/BancByCourt";
import { BancrouptMap } from "../components/bancrouptMAP/BancrouptMap";
import {OutdatedMortMap} from "../components/outdatedMortgMap/OutdatedMortMap";

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
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-6">
              <AvarageInetersMortgageRate />
              {/*<AreaChartExample />*/}
            </div>
            <div className="col-12 col-md-6 mb-6">
              <p style={{ maxWidth: "400px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aspernatur assumenda autem culpa dicta labore laudantium
                repellat ullam voluptatum. A aliquid commodi, dolorum facere
                facilis laudantium obcaecati odio porro possimus.
              </p>
            </div>

            <div className="col-12 col-md-6 mb-6">
              <p
                style={{ maxWidth: "400px", float: "right", marginTop: "40px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aspernatur assumenda autem culpa dicta labore laudantium
                repellat ullam voluptatum. A aliquid commodi, dolorum facere
                facilis laudantium obcaecati odio porro possimus.
              </p>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <BancrouptMap />
            </div>

            <div className="col-12 col-md-6 mb-6">
              <MortgageNumByRegions />
              {/*<AreaChartExample />*/}
            </div>

            <p style={{ maxWidth: "400px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aspernatur assumenda autem culpa dicta labore laudantium repellat
              ullam voluptatum. A aliquid commodi, dolorum facere facilis
              laudantium obcaecati odio porro possimus.
            </p>

            <div className="col-12 col-md-6 mb-6">
              <OutdatedMortMap />
              {/*<AreaChartExample />*/}
            </div>

            <p style={{ maxWidth: "400px", marginTop: '40px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aspernatur assumenda autem culpa dicta labore laudantium repellat
              ullam voluptatum. A aliquid commodi, dolorum facere facilis
              laudantium obcaecati odio porro possimus.
            </p>

            <div className="col-12 col-md-12 mb-12">
              <MortgageToCitisents />
              {/*<RadialBarChartExample />*/}
            </div>
            <div className="col-12 col-md-6 mb-6">
              <MortgageChart />
              {/*<RadarChartExample />*/}
            </div>
            <div className="col-12 col-md-6 mb-6">
              <KeyRate />
              {/*<RadarChartExample />*/}
            </div>
            <div className="col-12 col-md-6 mb-6">
              <BancBtCourt />
              {/*<RadarChartExample />*/}
            </div>
            <div className="col-12 col-md-6 mb-4">
              <MortgagePercentAmongAllCredits />
              {/*<PieChartExample />*/}
            </div>
            <div className="col-12 col-md-6 mb-4">
              <SqMeterPrise />
            </div>
          </div>
        </div>
      </ViewContent>
    </Layout>
  );
}
