import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface QuoteProps {
  onLock: (text: string) => void;
  name:string
}

const Quote: React.FC<QuoteProps> = ({ onLock ,name }) => {
  const [text, setText] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(0);
  const wordLimit = 100;

  const handleLock = () => {
    onLock(text);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const words = inputValue.trim().split(/\s+/);
    setWordCount(words.length);

    if (words.length <= wordLimit) {
      setText(inputValue);
    }
  };

  return (
    <div>
      <TextField
        type="text"
        value={text}
        placeholder={name}
        onChange={handleChange}
        disabled={wordCount >= wordLimit}
      />
      <div>
        Words: {wordCount}/{wordLimit}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLock}
        disabled={wordCount === 0 || wordCount > wordLimit}
      >
        Lock
      </Button>
    </div>
  );
};

export default Quote;
