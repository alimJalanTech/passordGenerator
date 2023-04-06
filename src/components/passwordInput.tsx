import React, { useRef } from "react";
import { Input } from "baseui/input";
import { Button, SHAPE } from "baseui/button";

interface PasswordInputProps {
  password: string;
  setPassword: (value: string) => void;
  generatePassword: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
  generatePassword,
}) => {
  return <Input
  value={password}
  onChange={(event) => setPassword(event.currentTarget.value)}
  overrides={{
    Root: {
      style: {
        backgroundColor: "#121212",
      },
    },
    Input: {
      style: {
        color: "black",
        backgroundColor: "white",
        fontWeight: "bold",
        fontSize: "20px",
        letterSpacing: "1px",
      },
    },
    InputContainer: {
      style: {
        color: "white",
        backgroundColor: "#121212",
        fontWeight: "bold",
        fontSize: "20px",
        letterSpacing: "1px",
      },
    },
    After: () => (
      <Button shape={SHAPE.square} onClick={generatePassword}>
        <svg
          viewBox="0 0 24 24"
        >
          <path
            fill="#aaaaaa"
            d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
          />
        </svg>
      </Button>
    ),
  }}
/>;
};

export default PasswordInput;
