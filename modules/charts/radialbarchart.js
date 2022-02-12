import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardBody } from 'reactstrap';

const data = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
  { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
  { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
  { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' },
];

const RadialBarChartExample = () => (
  <Card>
    <CardBody style={{ width: '100%', height: '400px' }}>
      <h6 className="text-uppercase mb-4">Radial BarChart</h6>
      <ResponsiveContainer>
        <RadialBarChart
          width={450}
          height={300}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}>
          <RadialBar minAngle={15} label background clockWise={true} dataKey="uv" />
          <Legend wrapperStyle={{ bottom: 45, left: 0, lineHeight: '24px', fontSize: 11 }} />
        </RadialBarChart>
      </ResponsiveContainer>
    </CardBody>
  </Card>
);

export default RadialBarChartExample;
