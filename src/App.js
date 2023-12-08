import React from 'react'
import './App.css'
import Header from './components/Header'
import SIdebar from './components/Sidebar'

function App () {
  return (
    <div className='app'>
      {/* HEADER! */}
      <Header />

      {/* SIDEBAR! */}
      <SIdebar />
    </div>
  )
}

export default App
