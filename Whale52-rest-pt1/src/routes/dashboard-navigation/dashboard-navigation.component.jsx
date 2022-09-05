import { Fragment } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import './dashboard-navigation.style.scss'


export const DashboardNavigation = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }

    return (
        <Fragment>
            <div className='nav-card-container'>
                <div className='nav-content-container'>
                        <Link className='nav-link nav-button nav-text' to='attendance'>Attendance</Link>
                    </div>
                    <div className='nav-content-container'>
                        <Link className='nav-link nav-button nav-text' to='assigment'>Assigment</Link>
                    </div>
                   <div className='nav-content-container'>
                        <Link className='nav-link nav-button nav-text' to='assessment'>Assessment</Link>
                    </div>
                    <div className='nav-content-container'>
                        <Link className='nav-link nav-button nav-text' to='resource'>Resource</Link> 
                    </div>
                </div>
            
            <div className='footer-dashboard'>
                <button className='back-button' onClick={goToHome}>Back</button>
            </div>
        </Fragment>
    )
}