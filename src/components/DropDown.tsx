import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

interface DropdownProps {
  dropdownName: string;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({
  dropdownName,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <FormControl
      variant="outlined"
      style={{ marginBottom: "16px", marginTop: "16px" , minWidth:"120px" }}
    >
      <Select value={selectedOption} onChange={handleChange} displayEmpty>
        <MenuItem value="" disabled>
          {dropdownName}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
