import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Label } from 'recharts';
import jsonData from '../data/eval.json';


const CustomLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    const yPosition = cy + 120;
    return (
        <text x={cx} y={yPosition} textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="#BEBEBE">
            Protocols 
        </text>
    );
};

const Protocols = () => {
    const eventTypeCounts = jsonData.reduce((acc, curr) => {
        const proto = curr.proto;
        acc[proto] = acc[proto] ? acc[proto] + 1 : 1;
        return acc;
    }, {});

    
    const chartData = Object.entries(eventTypeCounts).map(([proto, count]) => ({ proto, count }));

    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div className='w-1/2'>
        <ResponsiveContainer width="100%" height={500}>
            <PieChart>
                <Pie data={chartData} dataKey="count" nameKey="proto" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                    <Label content={<CustomLabel />} position="center" />
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Protocols
