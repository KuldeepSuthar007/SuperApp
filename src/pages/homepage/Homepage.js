import UserProfile from '../../components/UserProfile/UserProfile'
import NewsCard from '../../components/News/NewsCard'
import Weather from '../../components/Weather/Weather'
import Homestyle from './Homepage.module.css'

function Homepage() {
    const apiKey = process.env.REACT_APP_WEATHER_API
    // const newsapiKey = process.env.REACT_APP_NEWS_API

    return (
        <>
            <div className={Homestyle.dashboard}>
                <div className={Homestyle.leftsection}>
                    <UserProfile />
                    <Weather apiKey={apiKey} />
                </div>
                <div className={Homestyle.rightsection} > <NewsCard /></div>
            </div>

        </>

    )
}

export default Homepage