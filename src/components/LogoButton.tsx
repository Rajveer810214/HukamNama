// LogoButton.tsx
import React, { ChangeEvent, useRef } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface LogoUploadButtonProps {
  onLogoSelect: (file: File) => void;
}

const LogoUploadButton: React.FC<LogoUploadButtonProps> = ({
  onLogoSelect,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      onLogoSelect(selectedFile);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={(ref) => (inputRef.current = ref)}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
        onClick={handleButtonClick}
      >
        Upload Logo
      </Button>
    </div>
  );
};

export default LogoUploadButton;
