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
import {IndicatorsFSSPNUM} from "../components/fss/indicatorsFCCP/IndicatorsFSSPNUM";
import {IndicatorsFSSPAmount} from "../components/fss/indicatorsFCCP/IndicatorsFSSPAmount";
import {DebtVolNum} from "../components/debtVlolume/debpVolNumWrapper";
import GeneralTable from "../components/table/generalTable";
import {TotalCredits} from "../components/first/TotoalCredits";
import {OutdatedDebt} from "../components/first/OutdatedDebt";

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
        <Card>
          <CardBody>
            {/*<h6 className="text-uppercase mb-5">Tiny Charts</h6>*/}
            {/*<TinyCharts />*/}
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mb-12">
            {/*  Объём долгов / количество кредитов*/}



              <center>
                <h3>Как растёт кредитная задолженность россиян</h3>
                <i>Закредитованность россиян выросла в пятнадцать раз</i>
              </center>
              <br/>
              <br/>
              <br/>
            </div>



            <div className="col-12 col-md-6 mb-6">
              <TotalCredits />
            </div>

            <div className="col-12 col-md-6 mb-6">
              <OutdatedDebt />
            </div>

            <div className="col-12 col-md-12 mb-12">
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
            <div className="col-12 col-md-12 mb-12">
              <center>
                <h3>Банкротства стремительно растут</h3>
                <i>В некоторых регионов в прошлом году обанкротилось больше граждан чем за предыдущие шесть лет</i>
              </center>
              <br/>
              <br/>
            </div>

            <div className="col-12 col-md-8 mb-8">
              <BancBtCourt />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <p style={{width: "400px", float: "left", marginTop: "40px"}}>
                Описание: общий рост, чемпионы.
                <br/>
                В ряде регионов в прошлом году выросло больше, чем за предыдущие шесть
              </p>
            </div>



            <div className="col-12 col-md-12 mb-12">
            </div>
            <div className="col-12 col-md-12 mb-12">
              <br/>
              <br/>
              <br/>
              <center>
                <h3>ФССП — коллекторы банков на аутсорсе</h3>
                <i>В прошлом году против россиян велось почти 12 миллионов производств по выбиванию долгов в пользу кредитных организаций</i>
              </center>
              <br/>
              <br/>
              <br/>
            </div>

            <div className="col-12 col-md-6 mb-6">
              <IndicatorsFSSPAmount />
            </div>
            <div className="col-12 col-md-6 mb-6">
              <IndicatorsFSSPNUM />
            </div>






            <div className="col-12 col-md-12 mb-12">
              <br/>
              <br/>
              <br/>
              <center>

                <h3>Индекс закредитованности регионов</h3>
                <i>Где и сколько кредитов берут граждане</i>
              </center>
            <GeneralTable />

              {/*<div className="col-12 col-md-12 mb-12">*/}
              {/*  <MortgageToCitisents />*/}
                {/*<RadialBarChartExample />*/}
              {/*</div>*/}
            </div>

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


            <div className="col-12 col-md-6 mb-4">
              <IndicatorsFSSPNUM />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <IndicatorsFSSPAmount/>
            </div>
          </div>
        </div>

          </CardBody>
        </Card>
      </ViewContent>
    </Layout>
  );
}
