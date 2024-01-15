import React from 'react'

function Side() {
  return (
    <div className='sm:flex gap-6'>
      <div>
        <div className='flex m-4 p-4 border-2 overflow-x-auto rounded-lg shadow-xl sm:shadow-none sm:border-none lg:px-20'>
          <div className='flex gap-8 text-sm items-center sm:grid'>
            <span className='text-sm text-center font-bold'>CATEGORIES</span>
            <a href="#" className='bg-black text-white px-4 py-2 rounded border-2  border-transparent hover:border-black hover:bg-white hover:text-black sm:text-center'>ALL</a>
            <a href="#" className=' border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Burger</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Breakfast</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Lunch</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Dinner</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Pizza</a>
          </div>
        </div>
      </div>
      <div className='mx-4 my-8 sm:mx-0'>
        <ul className='flex flex-wrap gap-4'>
          <li className='border-2 rounded-xl w-48 cursor-pointer md:flex md:w-60'>
            <img src="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg" className='w-36'/>
              <div className='p-2'>
                <p className='text-ms font-bold'>Burger</p>
                <span className='text-xs text-gray-400'>Br 101</span>
              </div>
          </li>
          <li className='border-2 rounded-xl w-48 cursor-pointer md:flex md:w-60'>
            <img src="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg" className='w-36'/>
              <div className='p-2'>
                <p className='text-ms font-bold'>Burger</p>
                <span className='text-xs text-gray-400'>Br 101</span>
              </div>
          </li>
          <li className='border-2 rounded-xl w-48 cursor-pointer md:flex md:w-60'>
            <img src="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg" className='w-36'/>
              <div className='p-2'>
                <p className='text-ms font-bold'>Burger</p>
                <span className='text-xs text-gray-400'>Br 101</span>
              </div>
          </li>
          <li className='border-2 rounded-xl w-48 cursor-pointer md:flex md:w-60'>
            <img src="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg" className='w-36'/>
              <div className='p-2'>
                <p className='text-ms font-bold'>Burger</p>
                <span className='text-xs text-gray-400'>Br 101</span>
              </div>
          </li>
          <li className='border-2 rounded-xl w-48 cursor-pointer md:flex md:w-60'>
            <img src="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg" className='w-36'/>
              <div className='p-2'>
                <p className='text-ms font-bold'>Burger</p>
                <span className='text-xs text-gray-400'>Br 101</span>
              </div>
          </li>
          <li className='border-2 rounded-xl w-48 cursor-pointer md:flex md:w-60'>
            <img src="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg" className='w-36'/>
              <div className='p-2'>
                <p className='text-ms font-bold'>Burger</p>
                <span className='text-xs text-gray-400'>Br 101</span>
              </div>
          </li>
          <li className='border-2 rounded-xl w-48 cursor-pointer md:flex md:w-60'>
            <img src="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg" className='w-36'/>
              <div className='p-2'>
                <p className='text-ms font-bold'>Burger</p>
                <span className='text-xs text-gray-400'>Br 101</span>
              </div>
          </li>
          <li className='border-2 rounded-xl w-48 cursor-pointer md:flex md:w-60'>
            <img src="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg" className='w-36'/>
              <div className='p-2'>
                <p className='text-ms font-bold'>Burger</p>
                <span className='text-xs text-gray-400'>Br 101</span>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Side