import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Error from './components/Error/error'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Accomodation from './components/Accomodation/accomodation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
