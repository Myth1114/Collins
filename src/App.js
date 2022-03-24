import React from 'react'
import NavBar from "./Components/NavBar/NavBar.jsx"
import TopHeader from './Components/TopHeader/Topheader'
import LandingPage from './Pages/LandingPage/LandingPage'
function App() {
  return (
    <div className='App'>
      <TopHeader/>
      <NavBar/>
      <LandingPage />
    </div>
  )
}

export default App
