import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import './Cleanblog.scss'
function Cleanblog() {
  return (
    <div className='home_page'>
    <Navbar/>
    <div className='maintext'>
    <h1>Clean Blog</h1>
    <p>Blog Theme by Start Bootstrap</p>
    </div>
    <div className='rightbuttondiv'><button className='rightbutton'>TRY LOGGING IN</button>
    </div>
    </div>
  )
}

export default Cleanblog