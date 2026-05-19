import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/tsx/Home'
import AboutUs from './pages/tsx/AboutUs'
import Product from './pages/tsx/Product'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/product" element={<Product />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App