import React from "react";
import { Accordion, Panel } from "baseui/accordion";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { FormControl } from "baseui/form-control";
import { Slider } from "baseui/slider";

interface OptionsAccordionProps {
  length: number[];
  setLength: (value: number[]) => void;
  capitalAllowed: boolean;
  setCapitalAllowed: (value: boolean) => void;
  numberAllowed: boolean;
  setNumberAllowed: (value: boolean) => void;
  symbolAllowed: boolean;
  setSymbolAllowed: (value: boolean) => void;
}

const OptionsAccordion: React.FC<OptionsAccordionProps> = ({length, setLength, capitalAllowed, setCapitalAllowed, numberAllowed, setNumberAllowed, symbolAllowed, setSymbolAllowed}) => {
  return <Accordion
    accordion
    overrides={{
      Root: {
        style: {
          borderRadius: "1em",
          overflow: "hidden",
          backgroundColor: "#dbdbdb",
        },
      },
      Content: {
        style: {
          backgroundColor: "#dbdbdb",
        },
      },
      Header: {
        style: {
          borderRadius: "1em",
          backgroundColor: "#dbdbdb",
          color: "blue",
        },
      },
    }}
  >
    <Panel title="Options">
      <FormControl label="Length">
        <Slider
          value={length}
          onChange={({ value }) => setLength(value)}
          min={0}
          max={20}
        />
      </FormControl>

      <Checkbox
        checked={capitalAllowed}
        onChange={(e) => setCapitalAllowed(e.currentTarget.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        A-Z
      </Checkbox>

      <Checkbox
        checked={numberAllowed}
        onChange={(e) => setNumberAllowed(e.currentTarget.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        0-9
      </Checkbox>
      <Checkbox
        checked={symbolAllowed}
        onChange={(e) => setSymbolAllowed(e.currentTarget.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        %$#
      </Checkbox>
    </Panel>
  </Accordion>
}

export default OptionsAccordion;
