import React from 'react'
import Header from './Scene/Header'
import ItemCard from './Scene/ItemCard';
import Reservation from './Scene/Tabs/Reservation'
import Login from './Scene/Tabs/Login'
import Cart from './Scene/Tabs/Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<ItemCard/>}></Route>
            <Route path="/reservation" element={<Reservation/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
      </div>
    </Router>
  )
}

export default App