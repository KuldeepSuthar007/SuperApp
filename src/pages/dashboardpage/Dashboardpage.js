import UserProfile from '../../components/UserProfile/UserProfile'
import NewsCard from '../../components/News/NewsCard'
import Weather from '../../components/Weather/Weather'
import dashstyle from './Dashboard.module.css'

function Dashboardpage() {
    return (
        <>
            <div className={dashstyle.dashboard}>
                <div className={dashstyle.leftsection}>
                    <UserProfile />
                    <Weather />
                </div>
                <div className={dashstyle.rightsection}> <NewsCard /></div>

            </div>

        </>

    )
}

export default Dashboardpage