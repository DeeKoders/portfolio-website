import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Education from './components/Education/Education'
import Landing from './Landing'
function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
