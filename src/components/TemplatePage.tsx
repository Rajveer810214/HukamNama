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
import themes from '../Theme/Theme.json'

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
 const [theme, setTheme] = useState({
   "header-footer-background": "#ffa61a",
   "mid-left": "#5a6992",
   "mid-mid": "#6795d3",
   "mid-right": "#fc7d10",
   "text-color": "#06185d",
   "gurbani-color": "#06185d",
 });

const handleThemeChange = (themeName: string): void => {
  // Find the selected theme in the imported themes array
  const selectedTheme = themes.find((theme) => theme.name === themeName);

  // If the selected theme is found, update the state
  if (selectedTheme) {
    setTheme({
      "header-footer-background": selectedTheme["header-footer-background"],
      "mid-left": selectedTheme["mid-left"],
      "mid-mid": selectedTheme["mid-mid"],
      "mid-right": selectedTheme["mid-right"],
      "text-color":selectedTheme['text-color'],
      "gurbani-color":selectedTheme['gurbani-color']
    });
  }
else {
        console.error(`Theme ${themeName} not found in themes.json`);
      }
  
};
function getFormattedDate() {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", options);

  return formattedDate;
}

  return (
    <div style={{ display: "flex", maxHeight: "100vh", maxWidth: "100vw" }}>
      {/* Left Part - 25% */}
      <div
        className="english"
        style={{ width: "20%", padding: "20px", backgroundColor: "#f0f0f0" }}
      >
        <div
          style={{
            marginBottom: "1.2rem",
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
            marginBottom: "1.2rem",
          }}
        >
          <AttractiveDropdown
            dropdownName="Choose English Font"
            options={[
              "Arial",
              "Verdana",
              "PT-Serif",
              "Roboto",
              "Garamond",
              "FreeSans",
              "Times New Roman",
            ]}
            onOptionChange={(font) => handleFontChange(font, "english")}
            ids={[]}
          />
        </div>
        <div style={{ marginBottom: "1.2rem" }}>
          <AttractiveDropdown
            dropdownName="Choose Theme"
            options={[
              "FLORAL",
              "NIRBAAN",
              "IMMORTAL_ORANGE",
              "KHALSA_RUSH",
              "BAAGI_BLUE",
            ]}
            onOptionChange={(themeName) => handleThemeChange(themeName)}
            ids={["main"]}
          />
        </div>

        <div
          style={{
            marginBottom: "1.2rem",
          }}
        >
          <Quote
            onLock={handleLock("appname")}
            name="Add Gurudwara name"
            characters={60}
          />
        </div>
        <div
          style={{
            marginBottom: "1.2rem",
          }}
        >
          <Quote
            onLock={handleLock("quote")}
            name="Add any message"
            characters={100}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.2rem",
          }}
        >
          <LogoUploadButton onLogoSelect={handleLogoSelect} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
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
        style={{
          width: "80%",
          padding: "5px",
          color: theme["text-color"],
          backgroundColor: "#ffffff",
        }}
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
              height: "12vh",
              marginBottom: ".1vh",
              backgroundColor: theme["header-footer-background"],
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "10vh",
              }}
            >
              <div
                style={{
                  marginLeft: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Logo on top right */}
                {selectedLogo ? (
                  <img
                    src={URL.createObjectURL(selectedLogo)}
                    alt="Uploaded Logo"
                    style={{ width: "61px", height: "61px" }}
                  />
                ) : (
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ width: "61px", height: "61px" }}
                  />
                )}
              </div>

              {/* Centered appname */}
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <h3
                  className="english punjabi"
                  id="appname"
                  style={{
                    margin: 0,
                  }}
                ></h3>
                <p className="english" style={{ margin: 0 }}>
                  {getFormattedDate()}
                </p>
                <Typography
                  className="punjabi"
                  align="center"
                  variant="h6"
                  fontFamily={"Anmol"}
                  fontSize="16px"
                  style={{
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
              height: "74vh",
              color: theme["gurbani-color"],
            }}
          >
            <div
              style={{
                width: "33.33%", // Adjusted width
                backgroundColor: theme["mid-left"],
                paddingInline: "1px",
                overflow: "hidden",
                paddingBlock: "3px",
              }}
            >
              <p className="punjabi" style={{}}>
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
                width: "33.33%", // Adjusted width
                backgroundColor: theme["mid-mid"],
                paddingInline: "1px",
                overflow: "hidden",
                paddingBlock: "3px",
              }}
            >
              {/* Middle Part of Mid */}
              <p className="punjabi" style={{}}>
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
                width: "33.33%", // Adjusted width
                backgroundColor: theme["mid-right"],
                paddingInline: "2px",
                overflow: "hidden",
                paddingBlock: "2px",
              }}
            >
              {/* Middle Part of Mid */}
              <p className="english" style={{}}>
                Salok Mahala 9: The virtues of the Lord are sung, and one's life
                becomes fruitful by meditating on the purpose of life. Says
                Nanak, worship the Lord in such a way that, like the fish in
                water, you remain absorbed in Him. ||1|| Why have you formed
                attachments to poison? In an instant, you will become sad. Says
                Nanak, meditate on the Lord, and you will not be subject to the
                noose of death. ||2|| You have crossed over the treacherous
                world-ocean, and your body has conquered old age. Says Nanak,
                meditate on the Lord; your time of death is near.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              backgroundColor: theme["header-footer-background"],
              position: "absolute",
              width: "76.9vw",
              height: "9vh",
              marginTop: ".1vh",
            }}
          >
            <p
              className="english"
              id="quote"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "18px",
                marginInline: "3px",
              }}
            ></p>
          </div>
        </Canvas>
      </div>
    </div>
  );
};

export default TemplatePage;
