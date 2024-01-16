import React, { useState } from 'react';
import ItemPopup from './ItemPopup'

function Side() {
    const [open, setOpen] = useState(false);
    const[selectedItem, setSelectedItem] = useState(null)
    const[isPopupVisible, setIsPopupVisible] = useState(false)

    const handleClickOpen = () => {

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [jsonData, setJsonData] = useState({
      items: [
        {
          image: 'http://example.com/image1.jpg',
          title: 'Item 1'
        },
        {
          image: 'http://example.com/image2.jpg',
          title: 'Item 2'
        },
        {
          image: 'http://example.com/image3.jpg',
          title: 'Item 3'
        }
      ]
    });

    // const [jsonData, setJsonData] = useState({
    //   {
    //     image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg',
    //     title: 'Item 1',
    //   },
    //   {
    //     image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1701927338/fwr3x08jn3qv0mruqzje.jpg',
    //     title: 'Item 2',
    //   },
    //   {
    //     image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1701927696/ofgpqk6m7qwiad6xrbtc.jpg',
    //     title: 'Item 3',
    //   },
    //   {
    //     image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1703482054/vfxjg7gj5evzoicgkuen.jpg',
    //     title: 'Item 3',
    //   },
    //   {
    //     image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1702552358/h052zwolc2dj5jfyq5xi.jpg',
    //     title: 'Item 3',
    //   },
    //   {
    //     image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1702552359/vahtamhlmnnsiebhargq.jpg',
    //     title: 'Item 3',
    //   },
    // });

  return (
    <div className='sm:flex gap-6 max'>
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
      {jsonData.items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Side








