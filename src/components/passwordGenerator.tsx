import React, { useState, useEffect } from "react";
import PasswordInput from "./passwordInput";
import OptionsAccordion from './OptionsAccordion';
import CopyButton from './CopyButton';

import {
  Card,
  StyledBody,
  StyledAction,
} from "baseui/card";
import { useStyletron } from "baseui";

interface PasswordGeneratorProps {}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({}) => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number[]>([10]);
  const [capitalAllowed, setCapitalAllowed] = useState<boolean>(false);
  const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
  const [symbolAllowed, setSymbolAllowed] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = () => {
    const passwordLength: number = length[0];

    let stringSet: string = "abcdefghijklmnopqrstuvwxyz";
    if (capitalAllowed) stringSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) stringSet += "0123456789";
    if (symbolAllowed) stringSet += `!"#$%&\:;<=>?@'({|}~)*+,-[\\]^_./`;

    let tempPassword: string = "";
    for (let i = 0; i < passwordLength; i++) {
      const charIndex: number = Math.floor(Math.random() * stringSet.length);
      tempPassword += stringSet[charIndex];
    }
    setPassword(tempPassword);
    setCopied(false);
  };

  useEffect(() => {
    generatePassword();
  }, [capitalAllowed, numberAllowed, symbolAllowed, length]);

  return (
    <Card
      overrides={{
        Root: {
          style: {
            maxWidth: "500px",
            marginTop: "20px",
            marginLeft:"auto",
            marginRight: "auto",
            textAlign:"center",
            backgroundColor: "gray",
            border: "2px solid",
          },
        },
      }}
    >
      <StyledBody>
        <PasswordInput password={password} setPassword={setPassword} generatePassword={generatePassword} />
      </StyledBody>

      <StyledAction>
      <CopyButton password={password} setCopied={setCopied} copied={copied} />
      </StyledAction>

      <OptionsAccordion length={length} setLength={setLength} capitalAllowed={capitalAllowed} setCapitalAllowed={setCapitalAllowed} numberAllowed={numberAllowed} setNumberAllowed={setNumberAllowed} symbolAllowed={symbolAllowed} setSymbolAllowed={setSymbolAllowed} /> 
    </Card>
  );
}

export default PasswordGenerator;
