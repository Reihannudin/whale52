import { Fragment , useContext} from 'react'
import { Link , Outlet } from 'react-router-dom'

import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.util'

import { ReactComponent as WhaleLogo } from '../../assets/whale52logo.svg'
import './home-navigation.style.scss'

export const HomeNavigation = () => {

    const { currentUser } = useContext(UserContext);

    // const { currentUser, setCurrentUser } = useContext(UserContext)

    // console.log(currentUser)
    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);

    return(
        <Fragment>
            <div className='navigation'>
                <Link  className="logo-container" to="/">
                    <WhaleLogo className='logo'/>
                </Link>
                <div className='text-container'>
                    <Link className='nav-link-home nav-text-home' to='features/'>
                        Features
                     </Link> 
                     <Link className='nav-link-home nav-text-home' to='developer/'>
                        Developer
                     </Link> 
                    {currentUser ?(
                        <span className='nav-link-home nav-text-home' onClick={signOutUser}>
                          {' '}
                          Sign out{' '}
                        </span>
                    ) : (
                       <Link className='nav-link-home nav-text-home' to='auth/'>
                           Sign in
                       </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}