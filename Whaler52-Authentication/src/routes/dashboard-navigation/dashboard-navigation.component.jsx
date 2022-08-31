import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './dashboard-navigation.style.scss'


export const DashboardNavigation = () => {
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
        </Fragment>
    )
}