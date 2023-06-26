import React from 'react'
import UserProfile from '../../components/UserProfile/UserProfile'
import Weather from '../../components/Weather/Weather'
import NewsCard from '../../components/News/NewsCard'

function page4() {
    return (
        <>
            <h1 style={{ color: "white" }}>page4</h1>
            <div>
                <UserProfile />
                <Weather />
            </div>
            <div>
                <NewsCard />
            </div>
        </>

    )
}

export default page4