import React from 'react'
import './TimeLineForAlerts.css';
import Protocols from './Protocols';
import EventType from './EventType';

const PieCharts = () => {
  return (
    <div className='chart-container flex flex-col md:flex-row md:gap-2'>
        <Protocols/>
        <EventType/>
    </div>
  )
}

export default PieCharts
