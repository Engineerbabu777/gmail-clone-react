import React from 'react'
import './App.css'
import Header from './components/Header'
import SIdebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Mail from './components/Mail'
import EmailList from './components/MailList'
import SendMail from './components/SendMail'
import { useSelector } from 'react-redux'
import { selectMail } from './features/mailSlice'

function App () {

  const isSendMessageOpen = useSelector(selectMail);

  return (
    <Router>
      <div className='app'>
        {/* HEADER! */}
        <Header />

        <div className='app__body'>
          {/* SIDEBAR! */}
          <SIdebar />
          <Routes>
            <Route path='/mail' Component={Mail} />

            <Route path='/' exact Component={EmailList} />
          </Routes>
        </div>

       { isSendMessageOpen && <SendMail />}

        {/* MIDDLE! */}
      </div>
    </Router>
  )
}

export default App
