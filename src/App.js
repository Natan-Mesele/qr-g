import React from 'react'
import Header from './components/Header'
import ItemCard from './components/ItemCard';
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
          </Routes>
      </div>
    </Router>
  )
}

export default App