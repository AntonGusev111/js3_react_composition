import React from 'react'

export default function FooterWeather(props) {

    const {data} = props;

  return (
    <div className='WeatherBlock'>
        <h4>Погода</h4>
        <div className="blockWeatherContent">
            <div className="imgWeather">
                <img className="imgWeather" src={data.img} alt="" />
                <p className="tempNow">{data.temp_day}</p>
            </div>
            <div className="TDaysWeather">
                <p>Утром {data.temp_morning}</p>
                <p>днем {data.temp_day}</p>
            </div>
        </div>
      
    </div>
  )
}

/**
 * Этот элемент формирует блок прогноза погоды
 */