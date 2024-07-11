import './App.css'
import React from 'react'
import Footer from './component/Footer'
import SignInForm from './component/SignInForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UploadTech from './Dashboard/DashboardComponent/UploadTech'
import About from './component/About'
import Layout from './Layout'
import Home from './Home';
import AdminHome from './Dashboard/DashboardLayout/Asideheader';
import ActiveTechnology from './Dashboard/DashboardComponent/ActiveTechnology'

function App() {
  return (
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Layout />}>
  <Route path='home' element={<Home />} />
  <Route path='about' element={<About />} />
  {/* <Route path='home' element={  <Landing />} /> */}
  {/* <Route path='home' element={ } /> */}
  <Route path='login' element={ <SignInForm/>} />
  <Route path='login' element={ <SignInForm />} />
  </Route>


  <Route path='/dashboard' element={<AdminHome />}>
  <Route path='/dashboard/uploadtech' element={ <UploadTech/>} />
  <Route path='/dashboard/alltech' element={ <ActiveTechnology/>} />
  </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App;

