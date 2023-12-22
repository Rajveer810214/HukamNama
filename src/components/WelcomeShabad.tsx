import React from "react";
import { Card, Typography } from "@mui/material";
import '../Theme/fonts/fonts.css'
export default function WelcomeShabad() {
  return (
    <>
      <Card
        style={{
          flex: 1,
          // minWidth: "100vw",
          padding: "10%"
        }}
      >
        <Typography
          align="center"
          variant="h4"
          style={{
            color: "black",
          }}
        >
          ਹੁਕਮੈ ਅੰਦਰਿ ਸਭੁ ਕੋ ਬਾਹਰਿ ਹੁਕਮ ਨ ਕੋਇ।।
        </Typography>
        <Typography 
        variant="h4"
        align="center"
        style={{ 
          color: "black"
          }}>
            ਨਾਨਕ ਹੁਕਮੈ ਜੇ ਬੁਝੈ ਤ ਹਉਮੈ ਕਹੈ ਨ ਕੋਇ।।
        </Typography>
      </Card>
    </>
  );
}
