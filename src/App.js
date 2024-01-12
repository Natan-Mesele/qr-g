import React from 'react'
import Header from './components/Header'
import Side from './components/Side'
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
            <Route path="/" element={<Side/>}></Route>
          </Routes>
      </div>
    </Router>
  )
}

export default App