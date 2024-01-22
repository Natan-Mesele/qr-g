import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close'

const RegisterPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-6/6 mx-auto sm:w-5/6 md:w-5/6 lg:w-3/6 lg:mx-auto">
        <CloseIcon
          className="cursor-pointer text-black float-end "
          onClick={onClose}
        />
        <img
          src="http://res.cloudinary.com/dsskh3fao/image/upload/v1699358469/s3uyag6gbpeknahenyfn.png"
          alt=""
          className="w-2/6 mx-auto mt-8"
        />
        <h2 className="text-md font-bold mb-6 mt-4 text-black text-center">Enter your credentials</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password *"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password *"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-green-300 float-right"
          >
            Register
          </button>
        </form>
        <div className='flex mt-20 justify-center gap-2 text-sm'>
            <h3 className='text-black'>Already have an account?</h3>
            <button className='text-blue-300'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
