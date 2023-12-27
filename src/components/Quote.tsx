import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
interface QuoteProps {
  onLock: (text: string) => void;
  name: string;
  characters: number;
}

const Quote: React.FC<QuoteProps> = ({ onLock, name, characters }) => {
  const [text, setText] = useState<string>("");
  const [characterCount, setCharacterCount] = useState<number>(0);

  const handleLock = () => {
    onLock(text);
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const inputCharacterCount = inputValue.length;

    setCharacterCount(inputCharacterCount);

    if (inputCharacterCount <= characters) {
      // Check if the last entered character is a space or word-break character
      const lastChar = inputValue.charAt(inputCharacterCount - 1);
      if (lastChar.match(/\s/)) {
        // If the last entered character is a space, update the text state
        setText(inputValue);
      } else {
        // If the last entered character is not a space, truncate the text
        setText(inputValue.slice(0, characters));
      }
    }
  };
  const handleReset = () => {
    setText("");
    setCharacterCount(0);
  };
  return (
    <div>
      <TextField
        type="text"
        value={text}
        placeholder={name}
        onChange={handleChange}
        disabled={characterCount >= characters}
      />
      <div style={{ color: "#857C8D" }}>
        Characters: {characterCount}/{characters}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "50px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleLock}
          disabled={characterCount === 0 || characterCount > characters}
        >
          Lock
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleReset}
          disabled={characterCount === 0}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Quote;
