import React, { useState } from "react";
import ItemPopup from "./ItemPopup";

function Side() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleOpenDialog = (itemId) => {
    setSelectedItemId(itemId);
    setIsPopupVisible(true);
  };

  const handleCloseDialog = () => {
    setIsPopupVisible(false);
  };

    const [jsonData, setJsonData] = useState({
      items: [
        {
          id: 1,
          image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg',
          title: 'Burger',
          ptitle: '101 Br.'
        },
        {
          id: 2,
          image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1701927338/fwr3x08jn3qv0mruqzje.jpg',
          title: 'Cake',
          ptitle: '50 Br.'
        },
        {
          id: 3,
          image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1701927696/ofgpqk6m7qwiad6xrbtc.jpg',
          title: 'Pasta',
          ptitle: '68 Br.'
        },
        {
          id: 4,
          image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1703482054/vfxjg7gj5evzoicgkuen.jpg',
          title: 'Coffee',
          ptitle: '30 Br.'
        },
        {
          id: 5,
          image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1702552358/h052zwolc2dj5jfyq5xi.jpg',
          title: 'Cake 2',
          ptitle: '50 Br.'
        },
        {
          id: 6,
          image: 'http://res.cloudinary.com/dsskh3fao/image/upload/v1702552359/vahtamhlmnnsiebhargq.jpg',
          title: 'Item 3',
          ptitle: '200 Br.'
        }
      ]
    });

    
  const getItemById = (itemId) => {
    return jsonData.items.find((item) => item.id === itemId);
  };

  const selectedItem = getItemById(selectedItemId);

  return (
    <div className="sm:flex gap-6 max">
      <div>
        <div className='flex m-4 p-4 border-2 overflow-x-auto rounded-lg shadow-xl sm:shadow-none sm:border-none lg:px-20'>
          <div className='flex gap-8 text-sm items-center sm:grid'>
            <span className='hidden text-sm text-center font-bold sm:block'>CATEGORIES</span>
            <a href="#" className='bg-black text-white px-4 py-2 rounded border-2  border-transparent hover:border-black hover:bg-white hover:text-black sm:text-center'>ALL</a>
            <a href="#" className=' border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Burger</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Breakfast</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Lunch</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Dinner</a>
            <a href="#" className='border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center'>Pizza</a>
          </div>
        </div>
      </div>
      <div className='max-sm:mx-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8'>
        {jsonData.items.map((item, index) => (
          <div key={item.id}>
            <ul>
              <li
                onClick={() => handleOpenDialog(item.id)}
                className='border-2 rounded-lg cursor-pointer'
              >
                <img src={item.image} alt={item.title} className='w-full h-24 object-cover rounded-md' />
                <h2 className='mt-2 p-1'>{item.title}</h2>
                <span className='text-xs text-gray-500 p-1'>{item.ptitle}</span>
              </li>
            </ul>
          </div>
        ))}
        {isPopupVisible && (
          <ItemPopup
            isPopupVisible={isPopupVisible}
            selectedItem={selectedItem}
            handleClose={handleCloseDialog}
          />
        )}
      </div>
    </div>
  );
}

export default Side;
