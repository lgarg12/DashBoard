import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';
import jsonData from '../data/eval.json';
import './TimeLineForAlerts.css'; 

const Dest_IpAddresses = () => {
    const destIPData = jsonData.reduce((acc, curr) => {
        const ip = curr.dest_ip;
        acc[ip] = acc[ip] ? acc[ip] + 1 : 1;
        return acc;
    }, {});

    const chartData = Object.entries(destIPData).map(([ip, count]) => ({ ip, count }));

    return (
        <div className="chart-container"> 
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    <XAxis dataKey="ip">
                        <Label value="Destination IP Addresses" position="insideBottom" offset={-5}/>
                    </XAxis>
                    <YAxis>
                        <Label value="Count" position="insideLeft" angle={-90} offset={5} />
                    </YAxis>
                    <Tooltip/>
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dest_IpAddresses;
