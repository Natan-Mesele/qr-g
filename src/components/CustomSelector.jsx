import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function CustomSelector({ label, menuItems, onChange, value, required }) {
  return (
    <div className="text-field">
      {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel> */}

      <FormControl
        fullWidth
        // margin="normal"
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>

        <Select
          label={label}
          // required={required}
          // placeholder={`choose ${label}`}
          disabled={menuItems.length ? false : true}
          // labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          // borderRadius={".7rem"}
          // sx={{
          //   "*": { borderRadius: ".7rem" },
          //   backgroundColor: "white",
          //   borderRadius: ".7rem",
          // }}
        >
          {menuItems.map((e) => (
            <MenuItem disabled={e.disabled} value={e.id}>
              {e.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomSelector;
