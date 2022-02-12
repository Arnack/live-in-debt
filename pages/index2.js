import React from 'react';
import Layout from '../modules/layout';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  Tooltip,
  AreaChart,
  Area,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Cell,
  Sector,
  ResponsiveContainer,
} from 'recharts';
import { CardGroup, Card, CardBody, CardTitle, Row, Button } from 'reactstrap';

// icons
import IconDollar from 'react-icons/lib/fa/dollar';
import IconTrendUp from 'react-icons/lib/md/trending-up';
import IconLevelUp from 'react-icons/lib/fa/level-up';
import IconLevelDown from 'react-icons/lib/fa/level-down';
import IconAndroid from 'react-icons/lib/fa/android';
import IconCardTravel from 'react-icons/lib/md/card-travel';
import IconDvr from 'react-icons/lib/md/dvr';
import IconBalance from 'react-icons/lib/md/account-balance';
import IconDot from 'react-icons/lib/md/fiber-manual-record';

let tinyChartData = [
  { day: '01', growth: 44, traffic: 1440 },
  { day: '02', growth: 22, traffic: 3320 },
  { day: '03', growth: 58, traffic: 7743 },
  { day: '04', growth: 82, traffic: 2280 },
  { day: '05', growth: 54, traffic: 4480 },
];

const IncomeGrowthTooltip = (props) => {
  const { payload, active } = props;
  if (active) {
    return (
      <div
        style={{
          padding: '3px 7px',
          background: 'rgba(60,70,75,.9)',
          fontSize: 9,
          color: '#fff',
          borderRadius: 2,
        }}>
        {payload[0].value}%
      </div>
    );
  }
  return null;
};

const DashHead = () => (
  <div className="view-header d-flex align-items-center">
    <header className="text-white">
      <h1 className="h5 title text-uppercase">Dashboard</h1>
      <p className="mb-0 subtitle text-nowrap">
        Latest statistics&nbsp;<span className="hidden-sm-down">&amp; summary</span>
      </p>
    </header>
    <div className="ml-auto d-flex mt-2">
      <div className="hidden-sm-down">
        <LineChart width={100} height={35} data={tinyChartData}>
          <Line
            type="monotone"
            dataKey="growth"
            stroke="#FFEA00"
            strokeWidth={1}
            dot={{ strokeWidth: 0, r: 2 }}
          />
          <Tooltip content={<IncomeGrowthTooltip />} />
        </LineChart>
        <p className="small text-uppercase text-white">Income Growth</p>
      </div>
      <div className="ml-5">
        <BarChart width={100} height={35} data={tinyChartData}>
          <Bar type="monotone" dataKey="traffic" fill="#FFEA00" />
        </BarChart>
        <p className="small text-uppercase text-white text-nowrap">Weekly Traffic</p>
      </div>
    </div>
  </div>
);

// Temp Datas
const salesData = [
  { name: 'Jun', iphone: 4000, imac: 2400 },
  { name: 'Jul', iphone: 3000, imac: 1398 },
  { name: 'Aug', iphone: 2000, imac: 2200 },
  { name: 'Sep', iphone: 2780, imac: 3008 },
  { name: 'Oct', iphone: 1890, imac: 2800 },
  { name: 'Nov', iphone: 2390, imac: 3200 },
  { name: 'Dec', iphone: 3490, imac: 3300 },
];

const blocksData = [
  { uv: 2034, sales: 623, br: 56, ns: 2343 },
  { uv: 2734, sales: 1223, br: 43, ns: 3200 },
  { uv: 2522, sales: 723, br: 64, ns: 3063 },
  { uv: 2944, sales: 1043, br: 44, ns: 3666 },
  { uv: 1822, sales: 433, br: 74, ns: 1909 },
];

const trafficSourceData = [
  { name: 'Direct', value: 23 },
  { name: 'Referral', value: 8 },
  { name: 'Organic', value: 44 },
  { name: 'Social', value: 25 },
];
const trafficSourceColors = ['#448AFF', '#00E676', '#7C4DFF', '#40C4FF'];

const TransactionTableData = [
  { date: '22 Mar', name: 'John Doe', earnings: '$304', status: 'pending' },
  { date: '12 Feb', name: 'Maria Smith', earnings: '$834', status: 'done' },
  { date: '28 Jan', name: 'Sofia Andre', earnings: '$943', status: 'done' },
  { date: '03 May', name: 'Jean Wilkinson', earnings: '$1234', status: 'pending' },
  { date: '10 Mar', name: 'Alisha Seth', earnings: '$534', status: 'done' },
];

// Sales Chart
// -----------

const SalesDataChart = () => (
  <ResponsiveContainer>
    <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
      <XAxis
        dataKey="name"
        axisLine={false}
        fontSize={10}
        tickLine={false}
        padding={{ left: 0, right: 5 }}
      />
      <YAxis fontSize={10} axisLine={false} tickLine={false} />
      <CartesianGrid stroke="#eee" vertical={false} />
      <Tooltip wrapperStyle={{ borderColor: '#eee' }} />
      <Legend />
      <Area
        type="monotone"
        dataKey="iphone"
        stackId="1"
        strokeWidth={2}
        stroke="#448AFF"
        fill="#448AFF"
        fillOpacity=".8"
      />
      <Area
        type="monotone"
        dataKey="imac"
        stackId="1"
        strokeWidth={2}
        stroke="#69F0AE"
        fill="#69F0AE"
        fillOpacity=".8"
      />
    </AreaChart>
  </ResponsiveContainer>
);

// Blocks Chart
// ------------
const BlocksChart = ({ dataKey, stroke, fill }) => (
  <ResponsiveContainer>
    <AreaChart data={blocksData} margin={{ top: 0, bottom: 0, right: 0, left: 0 }}>
      <Tooltip
        labelStyle={{ display: 'none' }}
        itemStyle={{ fontSize: 10, color: '#fff' }}
        wrapperStyle={{ padding: '0 4px', background: 'rgba(40,70,80, .94)', border: 'none' }}
      />
      <Area
        type="monotone"
        dataKey={dataKey}
        stroke={stroke}
        fill={fill}
        strokeWidth={2}
        fillOpacity=".8"
      />
    </AreaChart>
  </ResponsiveContainer>
);

// Traffic Source Chart
// --------------------

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333">{`${payload.name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        fontSize={12}>
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const TrafficSourceChart = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          onMouseEnter={onPieEnter}
          data={trafficSourceData}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          outerRadius={90}
          dataKey="value"
          innerRadius={70}
          paddingAngle={4}>
          {trafficSourceData.map((entry, index) => (
            <Cell fill={trafficSourceColors[index]} key={index} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

const TransactionTable = ({ data }) => (
  <table className="table">
    <tbody>
      {data.map((item, i) => (
        <tr key={i}>
          <td className="d-flex flex-column">
            <strong>{item.name}</strong>
            <small>{item.date}</small>
          </td>
          <td className="align-middle">{item.earnings}</td>
          <td className="align-middle text-nowrap">
            <IconDot size="12" color={item.status === 'done' ? '#4CAF50' : '#F44336'} />
            &nbsp;{item.status}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const DashContent = () => (
  <div className="view-content view-dashboard">
    {/** Sales Card **/}
    <CardGroup className="sales-card mb-4">
      <Card style={{ flex: '3 0 0' }}>
        <CardBody>
          <CardTitle className="text-uppercase h6">Sales Statistics</CardTitle>
          <div className="small mb-4 card-subtitle">Growth over time</div>
          <div style={{ width: '100%', height: '280px' }}>
            <SalesDataChart />
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h6 className="text-uppercase title font-weight-bold small">Net Income</h6>
          <h4 className="font-weight-normal mb-0">
            <IconDollar size="16" color="#00c853" />
            23,500
          </h4>
        </CardBody>
        <CardBody>
          <h6 className="text-uppercase title font-weight-bold small text-nowrap">
            Forecast Income
          </h6>
          <h4 className="font-weight-normal mb-0">
            <IconDollar size="16" color="#00c853" />
            83,230
          </h4>
        </CardBody>
        <CardBody>
          <h6 className="text-uppercase title font-weight-bold small">Pageviews</h6>
          <h4 className="font-weight-normal mb-0">
            <IconTrendUp size="16" color="#00c853" />
            21,32,520
          </h4>
        </CardBody>
      </Card>
    </CardGroup>

    <Row>
      {/* blocks */}
      <div className="col-sm-6 col-md-3">
        <Card className="mb-4">
          <CardBody>
            <CardTitle className="text-uppercase small font-weight-bold">New Visitors</CardTitle>
            <div className="d-flex align-items-center">
              <h3 className="mr-2 font-weight-normal">2,544</h3>
              <div className="small">
                <IconLevelDown size="14" />
                <span className="badge badge-danger">-28%</span>
              </div>
            </div>
          </CardBody>
          <div style={{ width: '100%', height: '60px' }}>
            <BlocksChart dataKey="uv" stroke="#69F0AE" fill="#69F0AE" />
          </div>
        </Card>

        <Card className="mb-4">
          <CardBody>
            <CardTitle className="text-uppercase small font-weight-bold">Bounce Rate</CardTitle>
            <div className="d-flex align-items-center">
              <h3 className="mr-2 font-weight-normal">65%</h3>
              <div className="small">
                <IconLevelDown size="14" />
                <span className="badge badge-danger">-12%</span>
              </div>
            </div>
          </CardBody>
          <div style={{ width: '100%', height: '60px' }}>
            <BlocksChart dataKey="br" stroke="#7C4DFF" fill="#7C4DFF" />
          </div>
        </Card>
      </div>
      <div className="col-sm-6 col-md-3">
        <Card className="mb-4">
          <CardBody>
            <CardTitle className="text-uppercase small font-weight-bold">Purchases</CardTitle>
            <div className="d-flex align-items-center">
              <h3 className="mr-2 font-weight-normal">789</h3>
              <div className="small">
                <IconLevelUp size="14" />
                <span className="badge badge-success">+8%</span>
              </div>
            </div>
          </CardBody>
          <div style={{ width: '100%', height: '60px' }}>
            <BlocksChart dataKey="sales" stroke="#448AFF" fill="#448AFF" />
          </div>
        </Card>

        <Card className="mb-4">
          <CardBody>
            <CardTitle className="text-uppercase small font-weight-bold">New Sessions</CardTitle>
            <div className="d-flex align-items-center">
              <h3 className="mr-2 font-weight-normal">2994</h3>
              <div className="small">
                <IconLevelUp size="14" />
                <span className="badge badge-success">+19%</span>
              </div>
            </div>
          </CardBody>
          <div style={{ width: '100%', height: '60px' }}>
            <BlocksChart dataKey="ns" stroke="#40C4FF" fill="#40C4FF" />
          </div>
        </Card>
      </div>
      {/* traffic source */}
      <div className="mb-4 col-sm-12 col-md-6">
        <Card>
          <CardBody>
            <CardTitle className="text-uppercase h6">Traffic Sources</CardTitle>
            <div style={{ width: '100%', height: '276px' }}>
              <TrafficSourceChart />
            </div>
          </CardBody>
        </Card>
      </div>
    </Row>

    <Row>
      {/* Recent Activities */}
      <div className="col-md-5 mb-4">
        <Card>
          <CardBody>
            <CardTitle className="h6 text-uppercase">Recent Activities</CardTitle>
            <div className="small mb-4 card-subtitle">At a glance</div>
            <div className="d-flex mb-4 align-items-center">
              <IconAndroid
                size="52"
                style={{ border: '1px solid #eee' }}
                className="mr-3 text-success rounded-circle p-3"
              />
              <div>
                <h6 className="font-weight-semi-bold">Jenna enclosed a doc.</h6>
                <div className="small">3 min ago</div>
              </div>
            </div>

            <div className="d-flex mb-4 align-items-center">
              <IconCardTravel
                size="52"
                style={{ border: '1px solid #eee' }}
                className=" text-info mr-3 rounded-circle p-3"
              />
              <div>
                <h6 className="font-weight-semi-bold">Richard is now out of town.</h6>
                <div className="small">1 hour ago</div>
              </div>
            </div>

            <div className="d-flex mb-4 align-items-center">
              <IconDvr
                size="52"
                style={{ border: '1px solid #eee' }}
                className=" text-danger mr-3 rounded-circle p-3"
              />
              <div>
                <h6 className="font-weight-semi-bold">Your domain will expire in 4 days</h6>
                <div className="small">5 hours ago</div>
              </div>
            </div>

            <div className="d-flex mb-4 align-items-center">
              <IconBalance
                size="52"
                style={{ border: '1px solid #eee' }}
                className=" text-primary mr-3 rounded-circle p-3"
              />
              <div>
                <h6 className="font-weight-semi-bold">Henry just purchased an item</h6>
                <div className="small">4 days ago</div>
              </div>
            </div>

            <div className="text-right">
              <button className="btn btn-sm btn-success">View All</button>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Transactions */}
      <div className="col-md-7 mb-4">
        <Card>
          <CardBody className="table-responsive">
            <CardTitle className="text-uppercase h6">Latest Transactions</CardTitle>
            <div className="small mb-4 card-subtitle">
              <Button color="primary" size="sm">
                View all
              </Button>
            </div>
            <TransactionTable data={TransactionTableData} />
          </CardBody>
        </Card>
      </div>
    </Row>
  </div>
);

export default function Dashboard() {
  return (
    <Layout>
      <DashHead />
      <DashContent />
    </Layout>
  );
}
