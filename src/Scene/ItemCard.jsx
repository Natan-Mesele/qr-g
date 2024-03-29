import React, { useState } from "react";
import MyComponent from "./ItemPopup";

function ItemCard() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenPopup = (item) => {
    setSelectedItem(item);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
    setIsPopupVisible(false);
  };

  const [jsonData, setJsonData] = useState({
    items: [
      {
        id: 1,
        image:
          "http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg",
        title: "Burger",
        ptitle: "101 Br.",
      },
      {
        id: 2,
        image:
          "http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg",
        title: "Cake",
        ptitle: "50 Br.",
      },
      {
        id: 3,
        image:
          "http://res.cloudinary.com/dsskh3fao/image/upload/v1701927696/ofgpqk6m7qwiad6xrbtc.jpg",
        title: "Pasta",
        ptitle: "68 Br.",
      },
      {
        id: 4,
        image:
          "http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg",
        title: "Coffee",
        ptitle: "30 Br.",
      },
      {
        id: 5,
        image:
          "http://res.cloudinary.com/dsskh3fao/image/upload/v1702552358/h052zwolc2dj5jfyq5xi.jpg",
        title: "Cake 2",
        ptitle: "50 Br.",
      },
      {
        id: 6,
        image:
          "http://res.cloudinary.com/dsskh3fao/image/upload/v1702552359/vahtamhlmnnsiebhargq.jpg",
        title: "Item 3",
        ptitle: "200 Br.",
      },
    ],
  });

  return (
    <div className="sm:flex">
      <div>
        <div className="flex m-4 p-4 border-2 overflow-x-auto rounded-lg shadow-xl sm:shadow-none sm:border-none lg:px-20">
          <div className="flex gap-8 text-sm items-center sm:grid">
            <span className="hidden text-sm text-center font-bold sm:block">
              CATEGORIES
            </span>
            <a
              href="#"
              className="bg-black text-white px-4 py-2 rounded border-2  border-transparent hover:border-black hover:bg-white hover:text-black sm:text-center"
            >
              ALL
            </a>
            <a
              href="#"
              className=" border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center"
            >
              Burger
            </a>
            <a
              href="#"
              className="border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center"
            >
              Breakfast
            </a>
            <a
              href="#"
              className="border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center"
            >
              Lunch
            </a>
            <a
              href="#"
              className="border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center"
            >
              Dinner
            </a>
            <a
              href="#"
              className="border-2 border-transparent hover:border-black px-4 py-2 rounded sm:text-center"
            >
              Pizza
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <ul className="grid grid-cols-2 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-6 m-4">
          {jsonData.items.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleOpenPopup(item)}
              className="border-2 rounded-lg cursor-pointer sm:w-60 lg:w-60"
            >
              <div className="sm:flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-28 sm:w-32 sm:h-24 rounded-md bg-cover bg-[50%] bg-[center] bg-[top]"
                />
                <div className="sm:w-1/2 md:w-full p-2">
                  <h2 className="font-bold text-sm">{item.title}</h2>
                  <span className="text-xs text-gray-500">{item.ptitle}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {isPopupVisible && (
          <MyComponent
            isPopupVisible={isPopupVisible}
            handleClosePopup={handleClosePopup}
            selectedItem={selectedItem}
          />
        )}
      </div>
    </div>
  );
}

export default ItemCard;
