/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Piechart({ dataset }) {
    console.log(dataset);
    
    const data = [
        { name: "Gizi Buruk", value: dataset.gizi_buruk },
        { name: "Gizi Kurang", value: dataset.gizi_kurang },
        { name: "Gizi Baik", value: dataset.gizi_baik },
        { name: "Gizi Lebih", value: dataset.gizi_lebih },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'}>
                {data[index].name}
            </text>
        );
    };

    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={isSmallScreen ? 150 : 190}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </>
    )
} 