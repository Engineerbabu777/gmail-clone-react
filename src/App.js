import React from 'react'
import './App.css'
import Header from './components/Header'
import SIdebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Mail from './components/Mail'
import EmailList from './components/MailList'

function App () {
  return (
    <Router>
      <div className='app'>
        {/* HEADER! */}
        <Header />

        <div className='app__body'>
          {/* SIDEBAR! */}
          <SIdebar />

          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>

            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>

        {/* MIDDLE! */}
      </div>
    </Router>
  )
}

export default App
