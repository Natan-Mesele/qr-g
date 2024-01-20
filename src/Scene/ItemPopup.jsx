import React, { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import CustomMultipleSelect from '../components/CustomMultipleSelect'
import CustomSelector from '../components/CustomSelector'
import CustomTextfield from '../components/CustomTextfield'
import { textAlignment } from '@cloudinary/url-gen/qualifiers';
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

const MyComponent = ({ isPopupVisible, handleClosePopup, selectedItem }) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [count, setCount] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const handleOptionsChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div>
      <Dialog open={isPopupVisible} onClose={handleClosePopup} maxWidth="md" className=" w-6/6 mx-auto sm:w-5/6 md:w-5/6 lg:w-3/6 lg:mx-auto">
      <div className="flex justify-between p-4">
        <h1>Burger</h1>
        <CloseIcon className="cursor-pointer" onClick={handleClosePopup}/>
      </div>
        <DialogContent className="text-center">
          <div className="flex justify-center">
            <img
              src={selectedItem.image}
              alt="Dialog Image"
              className="w-60 object-contain rounded-full mb-4"
            />
          </div>
          <div>
            <h3 className="text-lg text-center mb-4">{selectedItem.title}</h3>
            <span>{selectedItem.ptitle}</span>
            <p className="text-left mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem i
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 p-2 my-3 bg-slate-100">
            <button onClick={handleDecrement} className="a bg-slate-300 w-8 h-8 rounded-full">-</button>
            <h1 className="">{count}</h1>
            <button onClick={handleIncrement} className="a bg-slate-300 w-8 h-8 rounded-full">+</button>
          </div>
          <FormControl fullWidth margin="normal">
            <CustomSelector
              label="Select Option"
              menuItems={[
                { id: "option1", name: "Small" },
                { id: "option2", name: "Middle" },
              ]}
              onChange={handleOptionChange}
              value={selectedOption}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <CustomMultipleSelect
              selected={selectedOptions}
              placeholder="Select Addon"
              options={[
                { id: "option1", name: "Take way 1" },
                { id: "option2", name: "Take Way 2" },
              ]}
              setSelected={handleOptionsChange}
            />
          </FormControl>
          <div>
            <p className="a mb-2">Special Instruction</p>
            <CustomTextfield
            label="Special Instruction"
            onChange={handleTextChange}
            value={textInput}
            fullWidth
            variant="outlined"
          />
          </div>
        </DialogContent>
        <DialogActions className="justify-center my-1 mr-9">
          <button
            onClick={handleClosePopup}
            color="primary"
            className="mr-4 bg-black text-white px-4 py-2 rounded-md hover:border-black hover:bg-white border-2 border-transparent hover:text-black text-sm"
          >
            CANCEL
          </button>
          <button
            onClick={handleClosePopup}
            color="primary"
            variant="contained"
            className="bg-black text-white px-4 py-2 rounded-md border-2 border-transparent hover:border-black hover:bg-white hover:text-black text-sm"
          >
            ADD TO CART
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyComponent;
