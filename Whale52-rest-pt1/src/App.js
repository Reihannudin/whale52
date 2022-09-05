import { Route , Routes } from 'react-router-dom'
import './App.css';

import { HomeNavigation }  from './routes/home-navigation/home-navigation.component'
import { SignUpForm } from './component/sign-up/sign-up.component'
import { Home } from './routes/home/home.component'
import { Dashboard } from './routes/dashboard/dashboard.component'
import { Authentication } from './routes/authentication/authentication.component'
import { Features } from './routes/features/features.component'
import { Developer } from './routes/developer/developer.component'

function App() {
  return (
    <Routes>
    <Route path='/' element={<HomeNavigation />}>
      <Route index element={<Home />} />
      <Route  path='/features' element={<Features />} />
      <Route  path='/developer' element={<Developer />} />
    </Route>
    <Route path='auth/*' element={<Authentication />} >
      <Route path=':sign-up' element={<SignUpForm />} />
    </Route>
    <Route path='dashboard/*' element={<Dashboard />}>
    </Route>
  </Routes>
  );
}

export default App;
