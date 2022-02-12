import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardBody } from 'reactstrap';
const data = [
  { month: '2015.01', a: 4000, b: 2400, c: 2400 },
  { month: '2015.02', a: 3000, b: 1398, c: 2210 },
  { month: '2015.03', a: 2000, b: 9800, c: 2290 },
  { month: '2015.04', a: 2780, b: 3908, c: 2000 },
  { month: '2015.05', a: 1890, b: 4800, c: 2181 },
  { month: '2015.06', a: 2390, b: 3800, c: 2500 },
  { month: '2015.07', a: 3490, b: 4300, c: 2100 },
];

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AreaChartExample = () => (
  <Card>
    <CardBody style={{ width: '100%', height: '350px' }}>
      <h6 className="text-uppercase mb-4">Area Chart Full</h6>
      <ResponsiveContainer>
        <AreaChart
          width={600}
          height={300}
          data={data}
          stackOffset="expand"
          margin={{ top: 20, right: 10, left: -20, bottom: 20 }}>
          <XAxis dataKey="month" fontSize={10} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={toPercent} fontSize={10} tickLine={false} axisLine={false} />
          {/* <CartesianGrid strokeDasharray="3 3"/> */}
          <Tooltip
            content={renderTooltipContent}
            wrapperStyle={{ background: '#fff', padding: '1rem', fontSize: 10 }}
          />
          <Area type="monotone" dataKey="a" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="c" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </CardBody>
  </Card>
);

export default AreaChartExample;
