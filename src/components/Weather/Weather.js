import React from 'react'
import weastyle from './Weather.module.css'
import weatherimg from '../../assets/Vector (2).png';
import pressureimg from '../../assets/Vector (3).png'
import windimg from '../../assets/Vector (4).png'
import humnityimg from '../../assets/Group.png'
function Weather() {
    return (
        <div className={weastyle.wcontainer}>
            <div className={weastyle.topcon}>
                <p>2-20-2023</p>
                <p>07:35 PM</p>
            </div>
            <div className={weastyle.botcon}>
                <div className={weastyle.box1} >
                    <img src={weatherimg} alt="" style={{ width: "90px", height: "80px" }} />
                    <p>Heavy Rain</p>
                </div>
                <hr />
                <div className={weastyle.box2}>
                    <p>24°C</p>
                    <div>
                        <img src={pressureimg} alt="" style={{ width: "20px", height: "35px" }} />
                        <div className={weastyle.pressure}>
                            <p>1010 mbar</p>
                            <p>Pressure</p>
                        </div>
                    </div>

                </div>
                <hr />
                <div className={weastyle.box3}>
                    <div>
                        <img src={windimg} alt="" style={{ width: "40px", height: "40px" }} />
                        <div className={weastyle.wind}>
                            <p>3.7 km/h</p><p>Wind</p>
                        </div>

                    </div>
                    <div>
                        <img src={humnityimg} alt="" style={{ width: "27px", height: "35px" }} />
                        <div className={weastyle.humnity}>
                            <p>83%</p>
                            <p>Humidiy</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Weather