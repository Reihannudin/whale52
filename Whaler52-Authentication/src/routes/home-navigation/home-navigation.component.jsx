import { Fragment } from 'react'
import { Link} from 'react-router-dom'

import { ReactComponent as WhaleLogo } from '../../assets/whale52logo.svg'
import './home-navigation.style.scss'

export const HomeNavigation = () => {
    return(
        <Fragment>
            <div className='navigation'>
                <Link  className="logo-container" to="/">
                    <WhaleLogo className='logo'/>
                </Link>
                <div className='text-container'> 
                    <Link className='nav-link-home nav-text-home' to='auth/'>
                        Sign in
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}