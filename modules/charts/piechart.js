import React from 'react';
import {PieChart, Pie, Tooltip, ResponsiveContainer, Cell} from 'recharts';
import { Card, CardBody } from 'reactstrap';

const data01 = [
  { name: 'Удовл. дела %', value: 30.381 },
  { name: 'Неудовл. дела %', value: 4.709 },
  { name: 'Удовл. частично дела %', value: 13.565 },
  { name: 'Другое (аппеляции и прочее) %', value: 50.565 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RadialBarChartExample = () => (
      // <ResponsiveContainer>
    <div>
        {/*<ResponsiveContainer>*/}
        <strong>Результаты рассмотрения дел</strong>
        <PieChart width={800} height={400}>
            <Pie
                isAnimationActive={false}
                dataKey="value"
                data={data01}
                cx={150}
                cy={100}
                outerRadius={60}
                // fill="#8884d8"
                label
            >
                {data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
        {/*</ResponsiveContainer>*/}
    </div>


      // </ResponsiveContainer>
);

export default RadialBarChartExample;
