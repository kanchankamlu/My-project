import React, { useContext, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin'
import UserLogin from './components/userLogin'
import { AppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import ViewApplications from './pages/viewApplications'
import ManageJobs from './pages/ManageJobs'
import AddJob from './pages/addJob'
import 'quill/dist/quill.snow.css'

const App = () => {

  const {showUserLogin} = useContext(AppContext)
  const {showRecruiterLogin} = useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      {showUserLogin && <UserLogin/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/apply-job/:id' element={<ApplyJob/>} />
        <Route path='/applications' element={<Applications/>} />
        <Route path= '/dashboard' element={<Dashboard/>}>
            <Route path = 'add-job' element= {<AddJob/>}/>
            <Route path = 'manage-jobs' element= {<ManageJobs/>}/>
            <Route path = 'view-applications' element= {<ViewApplications/>}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App