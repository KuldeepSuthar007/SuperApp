import React from 'react'
import profileStyle from './UserProfile.module.css'
import image14 from '../../assets/image 14.png'
function UserProfile() {
    const data = JSON.parse(localStorage.getItem('data'))

    return (
        <div className={profileStyle.profcontain} >
            <img src={image14} alt="" />
            <div className={profileStyle.insidecont}>
                <div className={profileStyle.topcont} >
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                    <h2>{data.username}</h2>
                </div>
                <div className={profileStyle.botcont}>
                    <button>Action X</button>
                    <button>Action X</button>
                    <button>Action X</button>
                    <button>Action X</button>
                </div>
            </div>

        </div>
    )
}

export default UserProfile