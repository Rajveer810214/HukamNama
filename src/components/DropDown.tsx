// Dropdown.js
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

interface DropdownProps {
  dropdownName: string;
  options: string[];
  onOptionChange?: (option: string, id: string) => void;
  ids: string[];
}

const Dropdown: React.FC<DropdownProps> = ({
  dropdownName,
  options,
  onOptionChange,
  ids,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string;
    setSelectedOption(selectedValue);
    const selectedId = ids[options.indexOf(selectedValue)]; // Map selected option to its corresponding ID
    onOptionChange && onOptionChange(selectedValue, selectedId);
  };

  return (
    <FormControl
      variant="outlined"
      style={{ marginBottom: "16px", marginTop: "16px", minWidth: "120px" }}
    >
      <Select value={selectedOption} onChange={handleChange} displayEmpty>
        <MenuItem value="" disabled>
          {dropdownName}
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
