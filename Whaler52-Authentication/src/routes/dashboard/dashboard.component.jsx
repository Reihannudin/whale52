
import { Routes  , Route} from 'react-router-dom'
import { Profile } from '../../component/profile/profile.component'
import { DashboardNavigation } from '../dashboard-navigation/dashboard-navigation.component'
import './dashboard.style.scss'

import { Attendance } from '../attendance/attendance.component'
import { Assigment } from '../assigment/assigment.component'
import { Assessment } from '../assessment/assessment.component'
import { Resource} from '../resource/resource.component'


export const Dashboard = () => {
    return(
        <div className='dashboard-section'>
            <div className="dashboard-container">
                  <div className='nav-dashboard-container'>
                      <Profile />
                      <DashboardNavigation />
                  </div>
            </div>
            <div className='dashboard-content'>
                    <Routes>
                        <Route path='/attendance' element={<Attendance />} />
                        <Route path='/assigment' element={<Assigment />} />
                        <Route path='/assessment' element={<Assessment />} />
                        <Route path='/resource' element={<Resource />} />    
                    </Routes>
            </div>
        </div>
    )
}

