import { Route , Routes } from 'react-router-dom'
import './App.css';

import { SignUpForm } from './component/sign-up/sign-up.component'
import { Home } from './routes/home/home.component'
import { Dashboard } from './routes/dashboard/dashboard.component'
import { Authentication } from './routes/authentication/authentication.component'

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='auth' element={<Authentication />} >
      <Route path=':sign-up' element={<SignUpForm />} />
    </Route>
    <Route path='dashboard/*' element={<Dashboard />}>
    </Route>
  </Routes>
  );
}

export default App;
