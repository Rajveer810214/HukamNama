import React from "react";
import AttractiveDropdown from "./DropDown";
import LogoUploadButton from "./LogoButton";
import ExportButton from "./ExportButton";
import Canvas from "./Canvas";
import logo from "../assets/logo.jpg";

const TemplatePage: React.FC = () => {
  return (
    <div fullWidth style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Left Part - 25% */}
      <div
        style={{ width: "25%", padding: "20px", backgroundColor: "#f0f0f0" }}
      >
        <div
          style={{
            marginRight:'100px'
          }}
        >
          <AttractiveDropdown
            dropdownName="Choose Font"
            options={["Font 1", "Font 2", "Font 3"]}
          />
        </div>
        <div style={{}}>
          <AttractiveDropdown
            dropdownName="Choose Theme"
            options={["Theme 1", "Theme 2", "Theme 3"]}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <LogoUploadButton
            onLogoSelect={(file) => console.log("Selected Logo:", file)}
          />
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
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Left corner logo */}
              <img
                src={logo}
                alt="Logo"
                style={{ width: "50px", height: "50px", marginRight: "20px" }}
              />
              {/* Centered name */}
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
                <h5>Your App Name</h5>
                {/* Line below name */}
                <hr style={{ width: "50%", margin: "5px 0" }} />
              </div>
            </div>
            {/* Date below the line */}
            <p style={{ marginLeft: "70px" }}>
              Date: {new Date().toLocaleDateString()}
            </p>
          </div>
          {/* Mid Part */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              height: "55vh",
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
              <p>Left Content</p>
            </div>
            <div
              style={{
                width: "33%", // Adjusted width
                backgroundColor: "#f0f0f0",
                padding: "10px",
              }}
            >
              {/* Middle Part of Mid */}
              <p>Middle Content</p>
            </div>
            <div
              style={{
                width: "33%", // Adjusted width
                backgroundColor: "#bbbbbb",
                padding: "10px",
              }}
            >
              {/* Middle Part of Mid */}
              <p>right Content</p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ backgroundColor: "#f0f0f0", padding: "2px" }}>
            <textarea
              placeholder="Write your text here..."
              style={{ width: "100%", minHeight: "60px" }}
            />
          </div>
        </Canvas>
      </div>
    </div>
  );
};

export default TemplatePage;
