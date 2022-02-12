import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardBody } from 'reactstrap';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const RadialBarChartExample = () => (
  <Card>
    <CardBody style={{ width: '100%', height: '300px' }}>
      <h6 className="text-uppercase mb-4">Pie Charts</h6>
      <ResponsiveContainer>
        <PieChart width={800} height={400}>
          <Pie
            isAnimationActive={false}
            dataKey="value"
            data={data01}
            cx={150}
            cy={100}
            outerRadius={60}
            fill="#8884d8"
            label
          />
          <Pie
            data={data02}
            cx={350}
            dataKey="value"
            cy={100}
            innerRadius={40}
            outerRadius={60}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </CardBody>
  </Card>
);

export default RadialBarChartExample;
