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
          padding: "5%"
        }}
      >
        <Typography
          align="center"
          variant="h4"
          fontFamily={'Raaj'}
          style={{
            color: "black",
            padding:'1.5%'
          }}
        >
          ਹੁਕਮੈ ਅੰਦਰਿ ਸਭੁ ਕੋ ਬਾਹਰਿ ਹੁਕਮ ਨ ਕੋਇ।।
        </Typography>
        <Typography 
        variant="h4"
        align="center"
        fontFamily={'Raaj'}

        style={{ 
          color: "black",
          padding:'1.5%'
          }}>
            ਨਾਨਕ ਹੁਕਮੈ ਜੇ ਬੁਝੈ ਤ ਹਉਮੈ ਕਹੈ ਨ ਕੋਇ।।
        </Typography>
      </Card>
    </>
  );
}
