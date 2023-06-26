import React from 'react'
import newsstyle from './NewsCard.module.css'
import imgge15 from '../../assets/image 15.png'
function NewsCard() {
    return (
        <div className={newsstyle.card}>
            <div className={newsstyle.image}>
                <img src={imgge15} alt="" />
                <div className={newsstyle.title}>
                    <p>Want to climb Mount Everest?</p>
                    <div className={newsstyle.date}>
                        <p>2-20-2023</p> | <p>07:35 PM</p>
                    </div>
                </div>
            </div>

            <div className={newsstyle.description} ><p>In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world’s highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the......</p></div>
        </div>
    )
}

export default NewsCard