import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Product from './pages/tsx/Product'

function App() {

  return (
    <>
      <Product />
      <ToastContainer />
    </>
  )
}

export default App
