import React from 'react'

function ItemCard() {
  return (
    <div className='flex m-4 p-6 border-2 overflow-x-auto rounded-lg shadow-xl'>
        <div className='flex gap-10 text-sm items-center'>
          <a href="#" className='bg-black text-white px-4 py-2 rounded border-2  border-transparent hover:border-black hover:bg-white hover:text-black'>ALL</a>
          <a href="#" className=' border-2 border-transparent hover:border-black px-4 py-2 rounded'>Burger</a>
          <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded'>Breakfast</a>
          <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded'>Lunch</a>
          <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded'>Dinner</a>
          <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded'>Pizza</a>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default ItemCard