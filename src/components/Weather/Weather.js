import React, { useState, useEffect } from 'react'
import weastyle from './Weather.module.css'
import rainimg from '../../assets/Vector (2).png'
import pressureimg from '../../assets/Vector (3).png'
import windimg from '../../assets/Vector (4).png'
import humnityimg from '../../assets/Group.png'


function Weather(props) {

    let [weatherdata, setWeatherdata] = useState({});

    const updateWeather = async () => {
        const url = `http://api.weatherapi.com/v1/current.json?key=4902336f54f84ab091070811232606&q=London`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setWeatherdata(parsedData.current)

    }
    useEffect(() => {
        updateWeather()
    }, [])



    return (
        <div className={weastyle.wcontainer}>
            <div className={weastyle.topcon}>
                <p>{weatherdata.last_updated}</p>
            </div>
            <div className={weastyle.botcon}>
                <div className={weastyle.box1} >
                    <img src={rainimg} alt="" style={{ width: "90px", height: "80px" }} />
                    {/* <p>{weatherdata.condition.text}</p> */}
                </div>
                <hr />
                <div className={weastyle.box2}>
                    {/* <p>{weatherdata.temp_c}°C</p> */}
                    <div>
                        <img src={pressureimg} alt="" style={{ width: "20px", height: "35px" }} />
                        <div className={weastyle.pressure}>
                            {/* <p>{weatherdata.pressure_mb} mbar</p> */}
                            <p>Pressure</p>
                        </div>
                    </div>

                </div>
                <hr />
                <div className={weastyle.box3}>
                    <div>
                        <img src={windimg} alt="" style={{ width: "40px", height: "40px" }} />
                        <div className={weastyle.wind}>
                            {/* <p>{weatherdata.wind_kph}km/h</p><p>Wind</p> */}
                        </div>

                    </div>
                    <div>
                        <img src={humnityimg} alt="" style={{ width: "27px", height: "35px" }} />
                        <div className={weastyle.humnity}>
                            {/* <p>{weatherdata.humidity}%</p> */}
                            <p>Humidiy</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Weather