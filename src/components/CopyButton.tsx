import React from "react";
import { Button } from "baseui/button";

interface CopyButtonProps {
  password: string;
  setCopied: (copied: boolean) => void;
  copied: boolean;
}

const CopyButton: React.FC<CopyButtonProps> = ({ password, setCopied, copied }) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <Button
      onClick={handleCopy}
      overrides={{
        BaseButton: {
          style: {
            backgroundColor: "limegreen",
            width: "100%",
            marginBottom: "10px",
            ":hover": {
              backgroundColor: "green",
            },
          },
        },
      }}
      disabled={password === ""}
    >
      {copied ? "COPIED" : "COPY"}
    </Button>
  );
};

export default CopyButton;

