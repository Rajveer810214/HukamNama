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
      className="english"
        style={{ width: "20%", padding: "20px", backgroundColor: "#f0f0f0" }}
      >
        <div
          style={{
            marginRight: "100px",
            marginBottom: "1vh",

          }}
        >
          <AttractiveDropdown
            dropdownName="Choose Punjabi Font"
            options={[
              "Raaj",
              "Raavi",
              "Anmol",
              "Noto-Bold",
              "Joy",
              "Lohit-Punjabi",
            ]}
            onOptionChange={(font) => handleFontChange(font, "punjabi")}
            ids={[]}
          />
        </div>
        <div
          style={{
            marginRight: "100px",
            marginBottom: "1vh",
          }}
        >
          <AttractiveDropdown
            dropdownName="Choose English Font"
            options={["Arial", "Verdana", "PT-Serif", "Roboto", "Garamond", "FreeSans", "Times New Roman"]}
            onOptionChange={(font) => handleFontChange(font, "english")}
            ids={[]}
          />
        </div>
        <div style={{marginBottom: "1vh"}}>
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
          <Quote onLock={handleLock("appname")} name="Add Gurudwara name" characters={60} />
        </div>
        <div
          style={{
            marginBottom: "1vh",
          }}
        >
          <Quote onLock={handleLock("quote")} name="Add any message" characters={150} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1vh",
          }}
        >
          <LogoUploadButton onLogoSelect={handleLogoSelect} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1vh",
          }}
        >
          <ExportButton
            onExport={() => console.log("Export to PNG clicked")}
            canvasId={"template"}
          />
        </div>
      </div>

      {/* Right Part - 75% */}
      <div
        style={{ width: "80%", padding: "20px", backgroundColor: "#ffffff" }}
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
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "15vh",
              }}
            >
              {/* Logo on top right */}
              {selectedLogo ? (
                <img
                  src={URL.createObjectURL(selectedLogo)}
                  alt="Uploaded Logo"
                  style={{ width: "90px", height: "90px", marginRight: "5px" }}
                />
              ) : (
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "90px", height: "90px", marginRight: "5px" }}
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
                <h3
                  className="english"
                  id="appname"
                  style={{
                    color: "red",
                    margin: 0,
                  }}
                ></h3>
                <p style={{ margin: 0 }}>{new Date().toLocaleDateString()}</p>
                <Typography
                  className="punjabi"
                  align="center"
                  variant="h6"
                  fontFamily={"Anmol"}
                  style={{
                    color: "black",
                    padding: "1px",
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
                backgroundColor: "#857C8D",
                padding: "5px",
              }}
            >
              <p className="punjabi">
                ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥ ਸਲੋਕ ਮਹਲਾ ੯ ॥ ਗੁਨ ਗੋਬਿੰਦ ਗਾਇਓ ਨਹੀ ਜਨਮੁ ਅਕਾਰਥ
                ਕੀਨੁ ॥ ਕਹੁ ਨਾਨਕ ਹਰਿ ਭਜੁ ਮਨਾ ਜਿਹ ਬਿਧਿ ਜਲ ਕਉ ਮੀਨੁ ॥੧॥ ਬਿਖਿਅਨ ਸਿਉ
                ਕਾਹੇ ਰਚਿਓ ਨਿਮਖ ਨ ਹੋਹਿ ਉਦਾਸੁ ॥ ਕਹੁ ਨਾਨਕ ਭਜੁ ਹਰਿ ਮਨਾ ਪਰੈ ਨ ਜਮ ਕੀ
                ਫਾਸ ॥੨॥ ਤਰਨਾਪੋ ਇਉ ਹੀ ਗਇਓ ਲੀਓ ਜਰਾ ਤਨੁ ਜੀਤਿ ॥ ਕਹੁ ਨਾਨਕ ਭਜੁ ਹਰਿ ਮਨਾ
                ਅਉਧ ਜਾਤੁ ਹੈ ਬੀਤਿ ॥੩॥ ਬਿਰਧਿ ਭਇਓ ਸੂਝੈ ਨਹੀ ਕਾਲੁ ਪਹੂਚਿਓ ਆਨਿ ॥੫॥ ਪਤਿਤ
                ਉਧਾਰਨ ਭੈ ਹਰਨ ਹਰਿ ਅਨਾਥ ਕੇ ਨਾਥ ॥ ਕਹੁ ਨਾਨਕ ਤਿਹ ਜਾਨੀਐ ਸਦਾ ਬਸਤੁ ਤੁਮ
                ਸਾਥਿ ॥੬॥ ਤਨੁ ਧਨੁ ਜਿਹ ਤੋ ਕਉ ਦੀਓ ਤਾਂ ਸਿਉ ਨੇਹੁ ਨ ਕੀਨ ॥ ਕਹੁ ਨਾਨਕ ਨਰ
                ਬਾਵਰੇ ਅਬ ਕਿਉ ਡੋਲਤ ਦੀਨ ॥੭॥ ਤਨੁ ਧਨੁ ਸੰਪੈ ਸੁਖ ਦੀਓ ਅਰੁ ਜਿਹ ਨੀਕੇ ਧਾਮ
                ॥ ਕਹੁ ਨਾਨਕ ਸੁਨੁ ਰੇ ਮਨਾ ਸਿਮਰਤ ਕਾਹਿ ਨ ਰਾਮੁ ॥੮॥ ਸਭ ਸੁਖ ਦਾਤਾ ਰਾਮੁ ਹੈ
                ਦੂਸਰ ਨਾਹਿਨ ਕੋਇ ॥
              </p>
            </div>
            <div
              style={{
                width: "33%", // Adjusted width
                backgroundColor: "#94BFBE",
                padding: "10px",
              }}
            >
              {/* Middle Part of Mid */}
              <p className="punjabi">
                ਕਾਹੇ ਰਚਿਓ ਨਿਮਖ ਨ ਹੋਹਿ ਉਦਾਸੁ ॥ ਕਹੁ ਨਾਨਕ ਭਜੁ ਹਰਿ ਮਨਾ ਪਰੈ ਨ ਜਮ ਕੀ
                ਫਾਸ ॥੨॥ ਤਰਨਾਪੋ ਇਉ ਹੀ ਗਇਓ ਲੀਓ ਜਰਾ ਤਨੁ ਜੀਤਿ ॥ ਕਹੁ ਨਾਨਕ ਭਜੁ ਹਰਿ ਮਨਾ
                ਅਉਧ ਜਾਤੁ ਹੈ ਬੀਤਿ ॥੩॥ ਬਿਰਧਿ ਭਇਓ ਸੂਝੈ ਨਹੀ ਕਾਲੁ ਪਹੂਚਿਓ ਆਨਿ ॥ ਕਹੁ
                ਨਾਨਕ ਨਰ ਬਾਵਰੇ ਕਿਉ ਨ ਭਜੈ ਭਗਵਾਨੁ ॥੪॥ ਧਨੁ ਦਾਰਾ ਸੰਪਤਿ ਸਗਲ ਜਿਨਿ ਅਪੁਨੀ
                ਕਰਿ ਮਾਨਿ ॥ ਇਨ ਮੈ ਕਛੁ ਸੰਗੀ ਨਹੀ ਨਾਨਕ ਸਾਚੀ ਜਾਨਿ ॥੫॥ ਪਤਿਤ ਉਧਾਰਨ ਭੈ
                ਹਰਨ ਹਰਿ ਅਨਾਥ ਕੇ ਨਾਥ ॥ ਕਹੁ ਨਾਨਕ ਤਿਹ ਜਾਨੀਐ ਸਦਾ ਬਸਤੁ ਤੁਮ ਸਾਥਿ ॥੬॥
                ਤਨੁ ਧਨੁ ਜਿਹ ਤੋ ਕਉ ਦੀਓ ਤਾਂ ਸਿਉ ਨੇਹੁ ਨ ਕੀਨ ॥ ਕਹੁ ਨਾਨਕ ਨਰ ਬਾਵਰੇ ਅਬ
                ਕਿਉ ਡੋਲਤ ਦੀਨ ॥੭॥ ਤਨੁ ਧਨੁ ਸੰਪੈ ਸੁਖ ਦੀਓ ਅਰੁ ਜਿਹ ਨੀਕੇ ਧਾਮ ॥ ਕਹੁ
                ਨਾਨਕ ਸੁਨੁ ਰੇ ਮਨਾ ਸਿਮਰਤ ਕਾਹਿ ਨ ਰਾਮੁ ॥੮॥ ਸਭ ਸੁਖ ਦਾਤਾ ਰਾਮੁ ਹੈ ਦੂਸਰ
                ਨਾਹਿਨ ਕੋਇ ॥
              </p>
            </div>
            <div
              style={{
                width: "33%", // Adjusted width
                backgroundColor: "#ACF7C1",
                padding: "10px",
              }}
            >
              {/* Middle Part of Mid */}
              <p className="english" style={{ overflow: "hidden" }}>
                Salok Mahala 9: The virtues of the Lord are sung, and one's life
                becomes fruitful by meditating on the purpose of life. Says
                Nanak, worship the Lord in such a way that, like the fish in
                water, you remain absorbed in Him. ||1|| Why have you formed
                attachments to poison? In an instant, you will become sad. Says
                Nanak, meditate on the Lord, and you will not be subject to the
                noose of death. ||2|| You have crossed over the treacherous
                world-ocean, and your body has conquered old age. Says Nanak,
                meditate on the Lord; your time of death is near. ||3||
              </p>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{ backgroundColor: "#f0f0f0", width: "100%", height: "8vh" }}
          >
            <p
              className="english"
              id="quote"
              style={{
                height: "100%",
                color: "red",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontSize:"18px",
                overflow:'-moz-hidden-unscrollable',
                marginInline:'3px'
              }}
            ></p>
          </div>
        </Canvas>
      </div>
    </div>
  );
};

export default TemplatePage;
