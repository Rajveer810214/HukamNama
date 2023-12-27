import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import html2canvas from "html2canvas";

interface ExportButtonProps {
  onExport: (format: string) => void;
  canvasId: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({ onExport, canvasId }) => {
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
    setTimeout(() => exportCanvasToImage(format), 100);
  };

  const exportCanvasToImage = async (format: string) => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if (canvas) {
      try {
        const canvasDataUrl = await html2canvas(canvas, { useCORS: true }).then(
          (canvas) => canvas.toDataURL("image/" + format)
        );
        const link = document.createElement("a");
        link.href = canvasDataUrl;
        link.download = "Hukamnama " + new Date().toJSON().slice(0, 10) ;
        link.click();
      } catch (error) {
        console.error("Error exporting canvas:", error);
      }
    } else {
      console.error("Canvas not found");
    }
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
