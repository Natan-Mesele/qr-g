import React, { useState } from 'react';

const Reservation = ({ passFormData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    passFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 mb-4 p-4 border rounded">
      <div className="mb-4">
        <div className='text-center mt-2 mb-8'>
          <h1 className='text-md font-bold mb-1'>TABLE RESERVATION</h1>
          <span className='text-md text-gray-500'>Make table reservation at QRAnbessa.</span>
        </div>  
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-600">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-sm font-medium text-gray-600">
          Time:
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button type="submit" className="bg-gray-500 text-white p-2 rounded-md border-2  border-transparent hover:border-black hover:bg-white hover:text-black sm:text-center">
        Submit
      </button>
    </form>
  );
};

export default Reservation;
