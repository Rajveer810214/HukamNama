import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import { CenterFocusStrong, CenterFocusStrongOutlined } from "@mui/icons-material";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Trigger the search action
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      gap={2}
      style={{ flex:1, flexDirection:'column',minHeight: "30vh", minWidth:"100vh"}}
      
    >
      <Grid item xs={8} sm={12} md={10} alignItems={"center"} justifyContent={"center"}>
        <TextField
          type="search"
          value={searchQuery}
          placeholder="Enter shabad to search"
          onChange={handleSearch}
          style={{minWidth:'60vw'}}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSearch} edge="end">
                <SearchIcon />
              </IconButton>
            ),
          }}
          // sx={{ borderRadius: "100px" }} // Set border radius as needed
          
          variant="outlined"
          fullWidth
        />
              
      </Grid>
      <Button variant="contained">Select</Button>
    </Grid>
  );
};

export default SearchBar;
