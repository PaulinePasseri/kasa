import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Error from './components/error'
import Header from './components/header'
import Footer from './components/footer'
import Accomodation from './components/accomodation'

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
