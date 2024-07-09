import './App.css'
import React from 'react'
// import Landing from './component/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home';
import SignInForm from './component/SignInForm';

function App() {
  return (
    <>
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Layout />}>
  <Route path='home' element={<Home />} />
  <Route path='login' element={ <SignInForm />} />
  </Route>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App

