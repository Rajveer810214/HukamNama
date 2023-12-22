import React from "react";
import { Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const HomePage: React.FC = () => {
  return (
    <div>
  

      <SearchBar onSearch={function (_query: string): void {
        throw new Error("Function not implemented.");
      } } />
      <Typography variant="h2">
        ਹੁਕਮੈ ਅੰਦਰਿ ਸਭੁ ਕੋ ਬਾਹਰਿ ਹੁਕਮ ਨ ਕੋਇ।। ਨਾਨਕ ਹੁਕਮੈ ਜੇ ਬੁਝੈ ਤ ਹਉਮੈ ਕਹੈ ਨ
        ਕੋਇ।।
      </Typography>
      
    </div>
  );
};

export default HomePage;
