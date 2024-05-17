import React from 'react'
import "./calendar.css"
import Sidebar from '../Sidebar/Sidebar'
function calendar() {
  return (
    <div className='cal'>
      <div>
        <Sidebar/>
      </div>
      <div>
        add your google calendar
         <iframe src="" title="Description of the content" className='responsive-iframe' ></iframe>
      </div>
        
    </div>
  )
}

export default calendar