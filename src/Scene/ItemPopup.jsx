import React, { useState } from "react";
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

const MyComponent = ({ Item, handleClose }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedMOptions, setSelectedMOptions] = useState([]);
  const [textInput, setTextInput] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const handleSelectMChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  return ( 
      <Dialog open onClose={handleClose} maxWidth="md">
        <DialogTitle className="text-start text-xs font-bold">
          Burger
        </DialogTitle>
        <DialogContent className="text-center">
          <div className="flex justify-center">
            <img
              src="http://res.cloudinary.com/dsskh3fao/image/upload/v1701977156/kd2euwbl9rgtivwwgvcc.jpg"
              alt="Dialog Image"
              className="w-60 object-contain rounded-full mb-4"
            />
          </div>
          <div>
            <h3 className="text-lg text-center mb-4">Burger</h3>
            <span>101 Br.</span>
            <p className="text-left mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem i
            </p>
          </div>
          <FormControl fullWidth margin="normal">
            <InputLabel className="a mx-4 ">Select Option</InputLabel>
            <Select
              value={selectedOptions}
              onChange={handleSelectChange}
              multiple
              input={<OutlinedInput />}
              className="w-full"
              variant="outlined"
            >
              <MenuItem value="option1">Small</MenuItem>
              <MenuItem value="option2">Middle</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel className="a mx-4 ">Select Addon</InputLabel>
            <Select
              label="Text Field"
              value={selectedMOptions}
              onChange={handleSelectMChange}
              multiple
              renderValue={(selected) => selected.join(", ")}
              input={<OutlinedInput />}
              className="w-full"
              variant="outlined"
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <div>
            <p className="a mb-2">Special Instruction</p>
            <TextField
              label="Special Instruction"
              value={textInput}
              onChange={handleTextChange}
              fullWidth
              variant="outlined"
            />
          </div>
        </DialogContent>
        <DialogActions className="justify-center my-1 mr-9">
          <button
            onClick={handleClose}
            color="primary"
            className="mr-4 bg-black text-white px-4 py-2 rounded-sm hover:border-black hover:bg-white border-2 border-transparent hover:text-black text-sm"
          >
            CANCEL
          </button>
          <button
            onClick={handleClose}
            color="primary"
            variant="contained"
            className="bg-black text-white px-4 py-2 rounded-sm border-2 border-transparent hover:border-black hover:bg-white hover:text-black text-sm"
          >
            ADD TO CART
          </button>
        </DialogActions>
      </Dialog>
   
  );
};

export default MyComponent;
