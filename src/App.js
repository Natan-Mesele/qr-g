import React from 'react'
import Header from './components/Header'
import ItemCard from './components/ItemCard';
import Side from './components/Side';

function App() {
  return (
    <div className="App">
      <Header />
      <Side />
      <ItemCard />
    </div>
  )
}

export default App