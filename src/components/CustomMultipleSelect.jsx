import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select } from '@mui/material'
import React from 'react'

function CustomMultipleSelect({ selected, placeholder, options, setSelected }) {
    const handleChange = (event) => { 
        const {
            target: { value },
          } = event;
        
          setSelected(value);
        
    }
    return (
        <div>
             <FormControl fullWidth
          // margin="normal"
          >
      <InputLabel id="demo-multiple-checkbox">{placeholder}</InputLabel>

            <Select
                id="demo-multiple-checkbox"
                multiple
                value={selected}
                onChange={handleChange}
                label={placeholder}
                renderValue={(selected) => selected.map((e) => e.name).join(", ")}
            >
                {options.map((option) => (
                    <MenuItem key={option.id} value={option}>
                        <Checkbox checked={selected.indexOf(option) > -1} />
                        <ListItemText primary={option.name} />
                    </MenuItem>
                ))}
            </Select>
            </FormControl>
        </div>
    )
}

export default CustomMultipleSelect