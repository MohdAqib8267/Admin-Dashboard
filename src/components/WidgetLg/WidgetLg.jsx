import React from 'react'
import './WidgetLg.css'

const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton widgetSmButton " + type}>{type}</button>;
      };
  return (
    <div className='WidgetLg'>
      <div className="widgetLg-wrapper">
            <span className="widget-title">
                𝐋𝐚𝐭𝐞𝐬𝐭 𝐓𝐫𝐚𝐧𝐬𝐚𝐜𝐭𝐢𝐨𝐧
            </span>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className='widgetLgTh grid'>𝐂𝐮𝐬𝐭𝐨𝐦𝐞𝐫</th>
                    <th className='widgetLgTh grid'>𝐃𝐚𝐭𝐞</th>
                    <th className='widgetLgTh grid'>𝐀𝐦𝐨𝐮𝐧𝐭</th>
                    <th className='widgetLgTh grid'>𝐒𝐭𝐚𝐭𝐮𝐬</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className="widgetLgUser grid">
                        <img src="https://havokjournal.com/wp-content/uploads/2015/01/Hackers-Hacking-Cyber-Crime-Cyber-Theft-scaled.jpeg" alt="" />
                       <span className="widgetSmUsername">𝕿𝖔𝖓𝖞 𝕾𝖙𝖆𝖗𝖐</span>

                    </td>
                    
                    <td className="widgetLgDate grid">2 Jun 2022</td>
                    <td className="widgetLgAmount grid">$ 70.00</td>
                    <td className="widgetLgStatus  grid">
                    <Button type="Approved" />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className="widgetLgUser grid">
                        <img src="https://havokjournal.com/wp-content/uploads/2015/01/Hackers-Hacking-Cyber-Crime-Cyber-Theft-scaled.jpeg" alt="" />
                       <span className="widgetSmUsername">𝕿𝖔𝖒 𝕳𝖔𝖑𝖑𝖆𝖓𝖉</span>

                    </td>
                    
                    <td className="widgetLgDate grid">2 Jun 2022</td>
                    <td className="widgetLgAmount grid">$ 70.00</td>
                    <td className="widgetLgStatus-pending  grid">
                        
                    <Button type="Pending" />
                        </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className="widgetLgUser grid">
                        <img src="https://havokjournal.com/wp-content/uploads/2015/01/Hackers-Hacking-Cyber-Crime-Cyber-Theft-scaled.jpeg" alt="" />
                       <span className="widgetSmUsername">𝕿𝖔𝖒 𝕳𝖎𝖉𝖉𝖑𝖊𝖘𝖙𝖔𝖓</span>

                    </td>
                    
                    <td className="widgetLgDate grid">2 Jun 2022</td>
                    <td className="widgetLgAmount grid">$ 70.00</td>
                    <td className="widgetLgStatus  grid">
                    <Button type="Decliend" />
                        
                        </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className="widgetLgUser grid">
                        <img src="https://havokjournal.com/wp-content/uploads/2015/01/Hackers-Hacking-Cyber-Crime-Cyber-Theft-scaled.jpeg" alt="" />
                       <span className="widgetSmUsername">𝕮𝖍𝖗𝖎𝖘 𝕰𝖛𝖆𝖓𝖘</span>

                    </td>
                    
                    <td className="widgetLgDate grid">2 Jun 2022</td>
                    <td className="widgetLgAmount grid">$ 70.00</td>
                    <td className="widgetLgStatus grid">
                    <Button type="Approved" />
                        </td>
                </tr>
     
            </table>
      </div>
    </div>
  )
}

export default WidgetLg
