import React from 'react'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'

import './Weather.css'



const Weather = () => {
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type='text' placeholder='Search'/>
        <img src={search_icon} alt='search image'/>      
      </div>
      <img src={clear_icon} className='clear_icon' />
      <p className='temperature'>20*C</p>
      <p className='location'>Malabe</p>

      <div className="weather-data">
        <div className="col">
        <img src={wind_icon} />
          <div>
            <p>45%</p>
            <span>Wind</span>
          </div>
        </div>

        <div className="col">
        <img src={humidity_icon} />

          <div>
            <p>32%</p>
            <span>Humidity</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather