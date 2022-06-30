import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Landing from './Landing'
function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
