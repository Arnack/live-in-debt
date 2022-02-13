import React, {useState} from "react";
import {Card, CardBody, Collapse} from "reactstrap";
import Layout from "../modules/layout";
import TinyCharts from "../modules/charts/tinycharts";
import AreaChartExample from "../modules/charts/areachart";
import RadarChartExample from "../modules/charts/radarchart";
import RadialBarChartExample from "../modules/charts/radialbarchart";
import PieChartExample from "../modules/charts/piechart";
import screenfull from "screenfull";
import IconFullScreen from "react-icons/lib/md/crop-free";
import {RusMap} from "../components/rusmap/rusmap";
import {MortgageChart} from "../components/mortgage/mortgage";
import {MortgageToCitisents} from "../components/mortgageToCitisents/MortgageToSitisents";
import {MortgagePercentAmongAllCredits} from "../components/mortgagePercentAmongAllCredits/MortgagePercentAmongAllCredits";
import {AvarageInetersMortgageRate} from "../components/avarageInetersMortgageRate/AvarageInetersMortgageRate";
import {SqMeterPrise} from "../components/sqMeterPrise/SqMeterPrise";
import {MortgageNumByRegions} from "../components/mortgageumberByRegions/MortgageNumByRegions";
import {KeyRate} from "../components/keyRate/KeyRate";
import {BancBtCourt} from "../components/bancrouptByCourt/BancByCourt";
import {BancrouptMap} from "../components/bancrouptMAP/BancrouptMap";
import {OutdatedMortMap} from "../components/outdatedMortgMap/OutdatedMortMap";
import {IndicatorsFSSPNUM} from "../components/fss/indicatorsFCCP/IndicatorsFSSPNUM";
import {IndicatorsFSSPAmount} from "../components/fss/indicatorsFCCP/IndicatorsFSSPAmount";
import {DebtVolNum} from "../components/debtVlolume/debpVolNumWrapper";
import GeneralTable from "../components/table/generalTable";
import {TotalCredits} from "../components/first/TotoalCredits";
import {OutdatedDebt} from "../components/first/OutdatedDebt";
import {IdxMortMap} from "../components/mortIdx/mortIdxMap/IdxMortMap";
import {MortgageGrow} from "../components/mortgage/mortgageGrows";
import {RadialBarChartExample2} from "../modules/charts/piechart2";

const ViewHeader = () => (


    <div className="view-header">
        <header className="text-white">
            <h1 className="h5 title text-uppercase">Кредитный прожектор</h1>
            <p className="mb-0 subtitle">Исследование закредитованности россиян</p>
            <title>
                Кредитный прожектор
            </title>

            {/*<IconFullScreen size="22" color="#fff" onClick={() => screenfull.toggle()} />*/}
        </header>
    </div>
);

const ViewContent = ({children}) => (
    <div className="view-content view-components">{children}</div>
);

export default function ChartsPage() {


    const [isExtraCollapsed, setIsExtraCollapsed] = useState(true);
    return (
        <Layout>
            <ViewHeader/>
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
                                    <TotalCredits/>
                                </div>

                                <div className="col-12 col-md-6 mb-6">
                                    <OutdatedDebt/>
                                </div>

                                <div className="col-12 col-md-12 mb-12">
                                    <br/>
                                </div>



                                <div className="col-12 col-md-4 mb-4">
                                    <h3> В 5 раз за десять лет</h3>
                                    <p>
                                        Выросла средняя сумма кредитов, которая приходится на гражданина России — с 28 тысяч до 176 тысяч
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <h3>12 000 000 производств</h3>
                                    <p>
                                        находилось в работе ФССП по взысканию кредитов граждан в 2021 году</p>
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <h3> 25 000 000 000 000 рублей</h3>
                                    <p>
                                        составляет объем кредитов россиян. Это больше объема бюджета России</p>
                                </div>

                                <div style={{paddingLeft: "40px"}} className="col-12 col-md-12 mb-12">


                                </div>
                                <div className="col-12 col-md-12 mb-12">
                                    <br/>
                                    <br/>
                                </div>
                                <div className="col-12 col-md-12 mb-12">
                                    <center>
                                        <h3>Банкротства стремительно растут</h3>
                                        <i>В некоторых регионах в прошлом году обанкротилось больше граждан чем за
                                            предыдущие шесть лет</i>
                                    </center>
                                    <br/>
                                    <br/>
                                </div>

                                <div className="col-12 col-md-8 mb-8">
                                    <BancBtCourt/>
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <p style={{width: "400px", float: "left", marginTop: "40px"}}>
                                        С момента создания процедуры банкротства физических лиц в октябре 2015 года ею
                                        воспользовались более 475 тысяч раз. За шесть лет количество судебных решений о
                                        банкротстве увеличилось в 10 раз.
                                    </p>
                                    <p style={{width: "400px", float: "left", marginTop: "40px"}}>
                                        В 2021 году больше всего процедур продажи приставами имущества граждан на число жителей региона
                                        прошло в Магаданской области, Республике Тыва и Карачаево-Черкесской Республике.
                                        Меньше всего — в Челябинской и Липецкой областях, а также Москве.
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
                                        <i>В прошлом году против россиян велось почти 12 миллионов производств по
                                            выбиванию долгов в пользу кредитных организаций</i>
                                    </center>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>

                                <div className="col-12 col-md-6 mb-6">
                                    <IndicatorsFSSPAmount/>
                                </div>
                                <div className="col-12 col-md-6 mb-6">
                                    <IndicatorsFSSPNUM/>
                                </div>


                                <div className="col-12 col-md-12 mb-12">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <center>

                                        <h3>Индекс ипотечной закредитованности регионов</h3>
                                        <i>Где и сколько кредитов берут граждане</i>
                                    </center>
                                </div>


                                <div className="col-12 col-md-12 mb-12">
                                    <IdxMortMap/>
                                </div>

                                <div className="col-12 col-md-12 mb-12">
                                    <GeneralTable/>
                                </div>
                                {/*  <MortgageToCitisents />*/}
                                {/*<RadialBarChartExample />*/}


                                <div className="col-12 col-md-12 mb-12">
                                </div>
                                <div className="col-12 col-md-6 mb-6">
                                    <strong>Количество кредитов, взятых россиянами</strong>
                                    <p>С 2019 года россияне взяли более 38 млн кредитов. Большой скачок пришелся на 2021
                                        год — по сравнению с предыдущим количество кредитов увеличилось на 1,98 млн
                                        единиц. За десять лет объем кредитов вырос в 4,5 раза, увеличившись до 25 трлн
                                        рублей, превысив прогнозируемый общий объем доходов федерального бюджета в 2022
                                        году.
                                    </p>
                                    <p>За десять лет средняя сумма кредитов, которая приходится на гражданина России,
                                        выросла с 28 тысяч до 176 тысяч рублей.
                                    </p>
                                </div>

                                <div className="col-12 col-md-6 mb-6">

                                    <strong>Объем просроченных кредитов</strong>
                                    <p>Рост просроченной задолженности по кредитам россиян перед банками начался с 2014 года. Первый пик был в сентябре 2016 года, когда россияне задолжали 923 млрд рублей.
                                        Максимальный объем просроченных долгов пришелся на декабрь 2021 года — тогда россияне не выплатили банкам более триллиона рублей. В январе 2022 года эта сумма долгов уменьшилась на 21 млрд рублей.
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 mb-6">

                                    <strong>Отдельные показатели</strong>
                                    <p>
                                        475 126 россиян стали банкротами с 2015 года <br/>
                                        25 000 000 000 000 рублей — объем кредитов россиян в 2022 году <br/>
                                        1 008 000 000 000 рублей россияне не смогли вернуть банкам <br/>
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 mb-6">


                                    <strong>Ипотеки</strong>
                                    <p>
                                        Ипотеки занимают около трети всех кредитов россиян. Еще одну треть занимают заемы на ремонт квартиры. С каждым годом число ипотек растет. Если в 2018 году россияне взяли 189874 ипотек, то в январе 2022 года это число уже увеличилось на 57180 ипотек.
                                    </p>

                                </div>


                                <div className="col-12 col-md-12 mb-12">
                                    <br/>
                                    <br/>
                                </div>


                                {/*Ипотеки*/}
                                <div className="col-12 col-md-12 mb-12">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <center>

                                        <h3>Ипотека — главная форма кредита</h3>
                                        <i>Россиянам хочется иметь свой дом, даже несмотря на то, что он подорожал в
                                            полтора раза за пять лет</i>
                                    </center>
                                    <br/>
                                    <br/>
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <MortgageToCitisents/>
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <MortgageGrow/>
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <SqMeterPrise/>
                                </div>


                                <div className="col-12 col-md-12 mb-12">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <center>

                                        <h3>Как судят россиян за долги</h3>
                                        <i>И сколько на этом зарабатывает государство</i>
                                    </center>
                                    <br/>
                                    <br/>
                                </div>
                                <div className="col-12 col-md-4 mb-4">

                                    <PieChartExample/>
                                </div>
                                <div className="col-12 col-md-4 mb-4">

                                    <RadialBarChartExample2 />
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <div>
                                        <h4>
                                            Топ 3 банков истцов
                                        </h4>
                                        <p>
                                            АО "Банк Русский Стандарт" <br/>
                                            ПАО "Совкомбанк" <br/>
                                            АО "Тинькофф Банк"<br/>
                                        </p>
<p>
    Сумма госпошлин за 1 день  <strong>2 123 006</strong> руб
</p>
<p>
    Средний размер госпошлины <strong>5 485.8 руб</strong> руб
</p>

                                    </div>
                                </div>

                                <div className="col-12 col-md-12 mb-12">
                                <center>
                                    <h4 style={{cursor: "pointer", textAlign: 'center',
                                    borderRadius: "4px", border: "1px solid lightgray",
                                        margin: "16px auto",
                                     padding: "4px 16px", background: "#f7f6f6"}}
                                        onClick={() => setIsExtraCollapsed(!isExtraCollapsed)}>
                                        Больше интересных графиков для исследователей и аналитиков
                                    </h4>
                                </center>
                                </div>

                                <Collapse isOpen={!isExtraCollapsed}  >
<div className="row">
                                    <div className="col-12 col-md-6 mb-6">
                                        <BancrouptMap />
                                    </div>

                                    <div className="col-12 col-md-6 mb-6">
                                        <MortgageNumByRegions />
                                    </div>


                                    <div className="col-12 col-md-6 mb-6">
                                        <OutdatedMortMap />
                                        {/*<AreaChartExample />*/}
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
                                </Collapse>




                            </div>
                        </div>

                    </CardBody>
                </Card>

                <div className="container"
                     style={{
                         background: "black",
                         color: "white"

                     }}
                >
                    <div className="row">
                        <div className="col-12 col-md-12 mb-12">
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <strong>Над проектом работали:</strong>
                            <p>Виталия Чикнаева @vitalia_chik <br/>
                            Альбина Замалетдинова @beaal<br/>
                            Степан Бубнов @Stefs<br/>
                            Григорий Орлов @utrom_go<br/>
                            Константин Ворович @vorovich</p>

                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <strong>Проект был запушен во время хакатона «Прожектор-2022»</strong>
                            <p>За время время хакатона, команда не взяла ни одного кредита.<br/>
                            Репозитории проекта открыты для контрибьюции: <a
                                    style={{
                                        color: "white",
                                        textDecoration: "underline"
                                    }}
                                    href="https://github.com/Arnack/live-in-debt">live-in-debt</a>
                            </p>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <strong> Данные, которые мы использовали:</strong>
                                <ul>
                                    <li>ЦБ</li>
                                    <li>Росстат</li>
                                    <li>Data.gov.ru</li>
                                    <li>ЕФРСБ</li>
                                    <li>НБКИ</li>
                                    <li>EМИСС</li>
                                    <li>ФССП</li>
                                </ul>

                        </div>
                    </div>

                </div>
            </ViewContent>
        </Layout>
    );
}
