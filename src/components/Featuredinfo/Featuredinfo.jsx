import React from 'react'
import './Featuredinfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

const Featuredinfo = () => {
  return (
    <div className='Featuredinfo'>
      <div className="featuredItem">
        <span className='featuredTitle'> 𝐑𝐞𝐯𝐚𝐧𝐮𝐞 </span>
        <div className="featuredMoneyContainer">
            <span className="fetauredMoney">$2,144</span>
            <span className="fetauredMoneyRate">
                -11.4 <ArrowDownward className='featuredIcon negative'/>
             </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className='featuredTitle'>𝐒𝐚𝐥𝐞𝐬</span>
        <div className="featuredMoneyContainer">
            <span className="fetauredMoney">$2,144</span>
            <span className="fetauredMoneyRate">
                -11.4 <ArrowDownward className='featuredIcon negative'/>
             </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className='featuredTitle'>𝐂𝐨𝐬𝐭</span>
        <div className="featuredMoneyContainer">
            <span className="fetauredMoney">$2,144</span>
            <span className="fetauredMoneyRate">
                -11.4 <ArrowUpward className='featuredIcon'/>
             </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default Featuredinfo
