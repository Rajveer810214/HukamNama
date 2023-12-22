import React from "react";
import { Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import WelcomeShabad from "./WelcomeShabad";

const HomePage: React.FC = () => {
  return (
    <div style={{backgroundColor:'white', flex:1, height:'100vh', width:'100vw'}}>
      <Navbar/>
      <WelcomeShabad/>
      <SearchBar onSearch={function (_query: string): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default HomePage;
