import * as React from "react";
import { Heading, HeadingLevel } from "baseui/heading";
import { ParagraphSmall } from "baseui/typography";
import { styled } from "styletron-react";

const CenteredText = styled("div", {
  textAlign: "center",
  backgroundColor: "whitesmoke",
  padding: "10px"
});

const Example: React.FC = () => {
  return (
  <HeadingLevel>
    <CenteredText>
    <Heading>Password Generator App</Heading>
    <ParagraphSmall>
        This is a password generator meant to solve your problems related
        to creating a secure and encrypted password.
    </ParagraphSmall>
    </CenteredText>
  </HeadingLevel>
  )
};

export default Example;
