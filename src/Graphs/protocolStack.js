import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, Legend } from 'recharts';
import jsonData from '../data/eval.json';
import './TimeLineForAlerts.css'


const ProtocolStack = () => {
    const protocolCounts = jsonData.reduce((acc, curr) => {
        const protocol = curr.proto;
        acc[protocol] = acc[protocol] ? acc[protocol] + 1 : 1;
        return acc;
    }, {});

    const chartData = Object.entries(protocolCounts).map(([protocol, count]) => ({ protocol, count }));

    return (
        <div className='chart-container'>
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="protocol" tickMargin={10}>
                    <Label value="Protocols" position="insideBottom" offset={-5} />
                </XAxis>
                <YAxis>
                    <Label value="Count" position="insideLeft" angle={-90} offset={10} />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" stackId="a" />
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default ProtocolStack;
