import React from 'react'
import './Chart.css'

import {
  LineChart,
  Line,
  XAxis,

  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";




const Chart = ({title,dataKey1,dataKey2,data,grid}) => {
   
  return (
    <div className='Chart'>
      <h3 className='chartTitle'>{title}</h3>
      <LineChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {grid && <CartesianGrid strokeDasharray="5 5" stroke='#e0dfdf' />}
      <XAxis dataKey="name" />
      
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={dataKey2}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey={dataKey1} stroke="#82ca9d" />
    </LineChart>
    </div>
  )
}

export default Chart
