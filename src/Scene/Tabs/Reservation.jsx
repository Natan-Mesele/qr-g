import React, { useState } from 'react';
import CustomSelector from '../../components/CustomSelector';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@material-ui/core";

const Reservation = ({ passFormData }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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

  const backgroundImageUrl =
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    
  return (
    <div className='pt-10 pb-16 h-screen bg-cover bg-center'
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded bg-gray-50">
        <div className="">
          <div className='text-center mt-2 mb-8'>
            <h1 className='text-md font-bold mb-1'>TABLE RESERVATION</h1>
            <span className='text-md text-gray-500'>Make table reservation at QRAnbessa.</span>
          </div>  
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Your name'
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Phone'
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className='flex gap-4'>
          <div className="mb-4 w-full">
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <FormControl fullWidth margin="normal mb-4">
            <CustomSelector
              label="Select A Branch"
              menuItems={[
                { id: "option1", name: "HeaderQuarter" },
                { id: "option2", name: "Castle" },
              ]}
              onChange={handleOptionChange}
              value={selectedOption}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </FormControl>
        <button type="submit" className="bg-gray-500 mt-3 text-white p-2 rounded-md border-2  border-transparent hover:border-black hover:bg-white hover:text-black sm:text-center">
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default Reservation;
