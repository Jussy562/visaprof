import React from 'react';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Visaprof from './pages/visaprof/visaprof';
import './App.css';
import './index.css';
import Payment from './pages/payment/payment';


function App() {
  

  return (
    <div className="w-full px-6 md:px-12 py-8 md:py-16">
      <Router>
        <Routes>
          <Route path='/' element={<Visaprof />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </Router>
      
    
     
    </div>
  )
}

export default App
