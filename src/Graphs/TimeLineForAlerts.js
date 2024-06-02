import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';
import jsonData from '../data/eval.json';
import { useThemeContext } from '../Context/ThemeContext';
import './TimeLineForAlerts.css'; 

const TimeLineForAlerts = () => {
    const { mode } = useThemeContext(); 

    const sourceIPData = jsonData.reduce((acc, curr) => {
        const ip = curr.src_ip;
        acc[ip] = acc[ip] ? acc[ip] + 1 : 1;
        return acc;
    }, {});

    const chartData = Object.entries(sourceIPData).map(([ip, count]) => ({ ip, count }));

    const backgroundColor = mode === 'dark' ? '#000' : '#fff'; 

    return (
        <div className="chart-container" style={{ '--background-color': backgroundColor }}> 
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    <XAxis dataKey="ip">
                        <Label value="Source IP Addresses" position="insideBottom" offset={-5}/>
                    </XAxis>
                    <YAxis>
                        <Label value="Count" position="insideLeft" angle={-90} offset={5} />
                    </YAxis>
                    <Tooltip/>
                    <Bar dataKey="count" fill='#8884d8' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TimeLineForAlerts;
