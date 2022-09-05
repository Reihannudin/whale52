// import { Link } from 'react-router-dom'
import { Routes  , Route} from 'react-router-dom'
import { SignInForm } from '../../component/sign-in/sign-in.component'
import { SignUpForm } from '../../component/sign-up/sign-up.component'

import './authentication.style.scss'

export const Authentication = () => {
    return(
        <div className='authentication-section'>
            <div className='authentication-container'> 
                <Routes>
                    <Route index element={<SignInForm/>} />
                    <Route path='sign-up' element={<SignUpForm />} />
                </Routes>
             </div> 
        </div>
    )
}


//   {/* <div className='banner-text'>
//                 <h2>Welcome to Whaler-52</h2>
//                 <h3>manage your school activities</h3>
//             </div> */}