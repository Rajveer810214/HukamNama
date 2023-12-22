import React from "react";
import { Typography, Button } from "@mui/material";
import SearchBar from "./SearchBar";
import ExportButton from "./ExportButton";
import LogoUploadButton from "./LogoButton";
import Dropdown from "./DropDown";

const HomePage: React.FC = () => {
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  return (
    <div>
      <Dropdown
        dropdownName="Font"
        options={dropdownOptions}
      />
      <LogoUploadButton />
      <ExportButton />
      <SearchBar />
      <Typography variant="h2">
        ਹੁਕਮੈ ਅੰਦਰਿ ਸਭੁ ਕੋ ਬਾਹਰਿ ਹੁਕਮ ਨ ਕੋਇ।। ਨਾਨਕ ਹੁਕਮੈ ਜੇ ਬੁਝੈ ਤ ਹਉਮੈ ਕਹੈ ਨ
        ਕੋਇ।।
      </Typography>
      
    </div>
  );
};

export default HomePage;
