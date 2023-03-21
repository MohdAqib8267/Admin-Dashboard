import React from 'react'
import Chart from '../../components/Chart/Chart'
import Featuredinfo from '../../components/Featuredinfo/Featuredinfo'
import './Home.css'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
const Home = () => {
  return (
    <div className='Home'>
      <Featuredinfo />
      <Chart data = {userData} title="𝐔𝐬𝐞𝐫 𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬" grid dataKey1="Active_User" dataKey2="Sales" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
