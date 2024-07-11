import './App.css'
import React from 'react'
import SignInForm from './component/SignInForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UploadTech from './Dashboard/DashboardComponent/UploadTech'
import About from './component/About'
import Layout from './Layout'
import Home from './Home';
function App() {
  return (
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Layout />}>
  <Route path='home' element={<Home />} />
  <Route path='about' element={<About />} />
  <Route path='login' element={ <SignInForm/>} />
  <Route path='login' element={ <SignInForm />} />
  </Route>
  <Route path='/dashboard' element={<Layout />}>
  {/* <Route path='dashboard' element={<Dashboard />} /> */}
  <Route path='/dashboard/uploadtech' element={ <UploadTech/>} />
  </Route>
  </Routes>
</BrowserRouter>
  )
}
export default App

