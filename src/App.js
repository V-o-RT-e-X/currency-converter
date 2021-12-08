import React from 'react'
import {
  Route,
  Routes
} from "react-router-dom"
import './App.css'
import Converter from './container/Converter/Converter'
import Currency from './container/Currency/Currency'
import Layout from './componens/Layout/Layout'

const App = () => {
  return (
    <div className='app'>
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Converter/>}/>
          <Route path="currency" element={<Currency/>}/>
          <Route path="*" element={<Converter/>}/>
        </Route>
      </Routes>
    </div>
    </div>
  )
}
export default App