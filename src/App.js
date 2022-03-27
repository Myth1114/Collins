import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar.jsx'
import TopHeader from './Components/TopHeader/Topheader'
import LandingPage from './Pages/LandingPage/LandingPage'
import About from './Pages/About/About.jsx'
import Resources from './Pages/Resources/Resources.jsx'
function App() {
  return (
    <div className='App'>
      <TopHeader />
      <NavBar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/resources' component={Resources} />
      </Switch>
    </div>
  )
}

export default App
