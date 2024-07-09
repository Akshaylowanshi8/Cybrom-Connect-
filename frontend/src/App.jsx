import './App.css'
import Layout from './Layout'
import Home from './Home'
import React from 'react'
import Footer from './component/Footer'
import SignInForm from './component/SignInForm'
// import Landing from './component/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Layout />}>
  <Route path='home' element={<Home />} />
  {/* <Route path='home' element={  <Landing />} /> */}
  {/* <Route path='home' element={ } /> */}
  <Route path='login' element={ <SignInForm/>} />
  </Route>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App

