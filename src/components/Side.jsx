import React from 'react'

function Side() {
  return (
    <div className='flex m-4 p-6 border-2 overflow-x-auto rounded-lg shadow-xl'>
        <div className='flex gap-12 '>
          <a href="#" className='bg-black text-white p-2'>ALL</a>
          <a href="#">Burger</a>
          <a href="#">Breakfast</a>
          <a href="#">Lunch</a>
          <a href="#">Dinner</a>
          <a href="#">Pizza</a>
        </div>
    </div>
  )
}

export default Side
