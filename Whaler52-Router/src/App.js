import { Route , Routes } from 'react-router-dom'
import './App.css';

import { Dashboard } from './routes/dashboard/dashboard.component'


function App() {
  return (
    <Dashboard />
    // <Routes>
    //   <Route path='/' element={<Dashboard />} >
    //     {/* <Route path='/attendance' element={<Attendance />} />
    //     <Route path='/assigment' element={<Assigment />} />
    //     <Route path='/assessment' element={<Assessment />} />
    //     <Route path='/resource' element={<Resource />} /> */}
    //   </Route>
    // </Routes>
  );
}

export default App;
