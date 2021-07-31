import React,{useState,useEffect} from 'react'

const WeatherCard = ({TempInfo}) => {
    const{weatherState,setWeatherState}=useState();
    const{
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset
    }=TempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":setWeatherState("wi-day-cloudy")
                    
                    break;
                    case "Haze"
                    :setWeatherState("wi-day-foggy")
                    
                    break;
                    case "clear":setWeatherState("wi-day-sunny")
                    
                    break;
            
                default:
                    setWeatherState("wi-da-sunny")
                    break;
            }
            
        }

      
    }, [])
    // converting sec in time
    let sec =sunset;
    let date = new Date(sec * 1000);
    let timestr =`${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
        {/* our  temp card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">{name},{country} </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleDateString()}</div>
        {/* our 4 column section  */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timestr} <br />
                sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}<br />
                humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
               {pressure} <br />
                pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                  {speed} <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
            
        </>
    )
}

export default WeatherCard
