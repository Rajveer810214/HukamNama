import React from "react";
import { useState } from "react";
import AttractiveDropdown from "./DropDown";
import LogoUploadButton from "./LogoButton";
import ExportButton from "./ExportButton";
import Canvas from "./Canvas";
import logo from "../assets/logo.jpg";
import Quote from "./Quote";
import { Typography } from "@mui/material";
import "../Theme/fonts/fonts.css";

const TemplatePage: React.FC = () => {
const handleLock = (id: string) => (text: string) => {
  // Logic to handle the locked text, you can set it in the state or perform any other action
  document.getElementById(id)!.innerText = text;

};
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);

  const handleLogoSelect = (file: File) => {
    setSelectedLogo(file);
  };
  
 const handleFontChange = (font: string, className: string) => {
   // Apply the selected font to all elements with the specified class
   const elements = document.getElementsByClassName(className);
   for (let i = 0; i < elements.length; i++) {
     const element = elements[i] as HTMLElement;
     element.style.fontFamily = font;
   }
 };

  const handleThemeChange = (theme: string, id: string) => {
    // Apply the selected theme to the component with the specified ID
    document.getElementById(id)!.style.backgroundColor = theme;
  };
  return (
    <div fullWidth style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Left Part - 25% */}
      <div
        style={{ width: "25%", padding: "20px", backgroundColor: "#f0f0f0" }}
      >
        <div
          style={{
            marginRight: "100px",
          }}
        >
          <AttractiveDropdown
            dropdownName="Choose Punjabi Font"
            options={[
              "Raaj",
              "GurbaniAkhar",
              "Anmol",
              "Noto-Bold",
              "Gurbani Akhar Heavy",
              "Gurbani Akhar Thick",
            ]}
            onOptionChange={(font) => handleFontChange(font, "punjabi")}
            ids={[]}
          />
        </div>
        <div
          style={{
            marginRight: "100px",
          }}
        >
          <AttractiveDropdown
            dropdownName="Choose English Font"
            options={["Caveat", "Muli", "PT-Serif"]}
            onOptionChange={(font) => handleFontChange(font, "english")}
            ids={[]}
          />
        </div>
        <div style={{}}>
          <AttractiveDropdown
            dropdownName="Choose Theme"
            options={["Theme 1", "Theme 2", "Theme 3"]}
            onOptionChange={handleThemeChange}
            ids={["main"]}
          />
        </div>

        <div
          style={{
            marginBottom: "1vh",
          }}
        >
          <Quote onLock={handleLock("appname")} name="Add Gurudwara name" />
        </div>
        <div
          style={{
            marginBottom: "1vh",
          }}
        >
          <Quote onLock={handleLock("quote")} name="Add any message" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <LogoUploadButton onLogoSelect={handleLogoSelect} />

          <ExportButton
            onExport={() => console.log("Export to PNG clicked")}
            canvasId={"template"}
          />
        </div>
      </div>

      {/* Right Part - 75% */}
      <div
        style={{ width: "75%", padding: "20px", backgroundColor: "#ffffff" }}
      >
        <Canvas canvasId={"template"}>
          {/* Header */}
          <div
            id="main"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "15vh",
              marginBottom: "2vh",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              {/* Logo on top right */}
              {selectedLogo ? (
                <img
                  src={URL.createObjectURL(selectedLogo)}
                  alt="Uploaded Logo"
                  style={{ width: "50px", height: "50px", marginRight: "20px" }}
                />
              ) : (
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "50px", height: "50px", marginRight: "20px" }}
                />
              )}

              {/* Centered appname */}
              <div
                style={{
                  color: "black",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <h5
                  className="english"
                  id="appname"
                  style={{
                    color: "red",
                    margin: 0,
                  }}
                ></h5>
                <p style={{ margin: 0 }}>{new Date().toLocaleDateString()}</p>
                <Typography
                  className="punjabi"
                  align="center"
                  variant="h6"
                  fontFamily={"Anmol"}
                  style={{
                    color: "black",
                    padding: "1.5%",
                  }}
                >
                  ਅੱਜ ਦਾ ਹੁਕਮਨਾਮਾ
                </Typography>
              </div>
            </div>
          </div>

          {/* Mid Part */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              height: "65vh",
            }}
          >
            <div
              style={{
                width: "33%", // Adjusted width
                backgroundColor: "#000000",
                padding: "10px",
              }}
            >
              {/* Left Part of Mid */}
              <p className="punjabi">Left Content</p>
            </div>
            <div
              style={{
                width: "33%", // Adjusted width
                backgroundColor: "#f0f0f0",
                padding: "10px",
              }}
            >
              {/* Middle Part of Mid */}
              <p className="punjabi">Middle Content</p>
            </div>
            <div
              style={{
                width: "33%", // Adjusted width
                backgroundColor: "#bbbbbb",
                padding: "10px",
              }}
            >
              {/* Middle Part of Mid */}
              <p className="english">right Content</p>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{ backgroundColor: "#f0f0f0", width: "100%", height: "8vh" }}
          >
            <p
              className="punjabi"
              id="quote"
              style={{
                height: "100%",
                color: "red",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            ></p>
          </div>
        </Canvas>
      </div>
    </div>
  );
};

export default TemplatePage;
