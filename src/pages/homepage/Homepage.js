import UserProfile from '../../components/UserProfile/UserProfile'
import NewsCard from '../../components/News/NewsCard'
import Weather from '../../components/Weather/Weather'
import Homestyle from './Homepage.module.css'

function Homepage() {
    return (
        <>
            <div className={Homestyle.dashboard}>
                <div className={Homestyle.leftsection}>
                    <UserProfile />
                    <Weather />
                </div>
                <div className={Homestyle.rightsection}> <NewsCard /></div>
            </div>

        </>

    )
}

export default Homepage