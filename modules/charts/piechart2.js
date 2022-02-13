import React from 'react';
import {PieChart, Pie, Tooltip, ResponsiveContainer, Cell} from 'recharts';
import { Card, CardBody } from 'reactstrap';

const data01 = [
  { name: 'Банки %', value: 45.7 },
  { name: 'Другие организации %', value: 54.3 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const RadialBarChartExample2 = () => (
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
