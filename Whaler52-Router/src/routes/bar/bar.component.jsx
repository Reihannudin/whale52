
import { Fragment } from 'react'

import { Profile } from '../../component/profile/profile.component'
import { Navigation } from '../navigation/navigation.component'
import './bar.style.scss'

export const Bar= () => {
    return(
        <Fragment>
            <div className="dashboard-container">
                <div className='nav-dashboard-container'>
                    <Profile />
                    <Navigation />
                </div>
            </div>
        </Fragment>
    )
}