import './feature-banner.style.scss'
import { ReactComponent as Attendance} from '../../../assets/attendance.svg'
import { ReactComponent as Assigment} from '../../../assets/assigment.svg'
import { ReactComponent as Resource} from '../../../assets/resource.svg'



export const FeatureBanner = () =>{
    return(
        <div className='feature-banner-section'>
            <h1 className='title-feature-banner'>Our Feature</h1>
            <div className='feature-banner-container'>
                <div className='feature-banner-box'>
                    <div className='feature-banner-content'>
                        <Attendance className='logo-feature'/>
                        <h1 className='feature-banner-title'>Attendance</h1>
                        <p className='feature-banner-p'>Make attendance easier, more efficient, flexible and stay stored</p>
                    </div>
                </div>
                <div className='feature-banner-box'>
                    <div className='feature-banner-content'>
                        <Assigment className='logo-feature'/>
                        <h1 className='feature-banner-title'>Assigment</h1>
                        <p className='feature-banner-p'>Make school assignments, more organized, and study anywhere</p>
                    </div>
                </div>
                <div className='feature-banner-box'>
                    <div className='feature-banner-content'>
                        <Resource className='logo-feature'/>
                        <h1 className='feature-banner-title'>Resource</h1>
                        <p className='feature-banner-p'>make resources easy to find whenever you want to read</p>
                    </div>
                </div>
            </div>
        </div>
    )
}