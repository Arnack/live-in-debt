import React from 'react';
import { Tooltip, LineChart, Line, BarChart, Bar, AreaChart, Area, ComposedChart } from 'recharts';
import { Row, Col } from 'reactstrap';

const data = [
  { uv: 2034, sales: 623, br: 56, ns: 2343 },
  { uv: 2734, sales: 1223, br: 43, ns: 3200 },
  { uv: 2522, sales: 723, br: 64, ns: 3063 },
  { uv: 2944, sales: 1043, br: 44, ns: 3666 },
  { uv: 1822, sales: 433, br: 74, ns: 1909 },
  { uv: 1122, sales: 893, br: 64, ns: 2309 },
];

const TinyLineChart = () => (
  <Col sm={3}>
    <LineChart width={140} height={60} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
      <Tooltip labelStyle={{ display: 'none' }} />
    </LineChart>
    <div className="ml-2 small">Line Chart</div>
  </Col>
);

const TinyBarChart = () => (
  <Col sm={3}>
    <BarChart width={140} height={60} data={data}>
      <Bar type="monotone" dataKey="sales" fill="#8884d8" />
      <Tooltip labelStyle={{ display: 'none' }} />
    </BarChart>
    <div className="ml-2 small">Bar Chart</div>
  </Col>
);

const TinyAreaChart = () => (
  <Col sm={3}>
    <AreaChart width={140} height={60} data={data}>
      <Area type="monotone" dataKey="br" fill="#8884d8" stroke="#8884d8" />
      <Tooltip labelStyle={{ display: 'none' }} />
    </AreaChart>
    <div className="ml-2 small">Area Chart</div>
  </Col>
);

const TinyPieChart = () => (
  <Col sm={3}>
    <ComposedChart width={140} height={60} data={data}>
      <Bar dataKey="ns" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      <Tooltip labelStyle={{ display: 'none' }} />
    </ComposedChart>
    <div className="ml-2 small">Composed Chart</div>
  </Col>
);

const TinyCharts = () => (
  <Row>
    <TinyLineChart />
    <TinyBarChart />
    <TinyAreaChart />
    <TinyPieChart />
  </Row>
);

export default TinyCharts;
