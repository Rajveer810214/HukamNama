import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

interface ExportButtonProps {
  onExport: (format: string) => void;
}

const ExportButton: React.FC<ExportButtonProps> = ({ onExport }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExportClick = (format: string) => {
    handleClose();
    onExport(format);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SaveAltIcon />}
        onClick={handleClick}
      >
        Export
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleExportClick("png")}>PNG</MenuItem>
        <MenuItem onClick={() => handleExportClick("jpeg")}>JPEG</MenuItem>
      </Menu>
    </div>
  );
};

export default ExportButton;
