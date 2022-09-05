import { HomeNavigation }from '../home-navigation/home-navigation.component'
import { Banner } from '../../component/home/banner/banner.component'
import { BlueBanner } from '../../component/home/blue-banner/blue-banner.component'
import { FeatureBanner } from '../../component/home/feature-banner/feature-banner.component'
import { Footer } from '../../component/footer/footer.component'
import { Outlet } from 'react-router-dom'

export const Home = () => {
    return(
        <div>
            <Outlet />
            <Banner />
            <BlueBanner />
            <FeatureBanner />
            <Footer />
        </div>
    )
}