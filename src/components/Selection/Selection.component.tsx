import { useState } from "react";
import { Label } from "../Input/Input.styles";
import {
  InputRadio,
  RadioGroup,
  RadioItem,
  Radiolabel,
  RadioWrapper,
} from "./Selection.style";

interface SelectionProps {
  SelectedTip: string;
  handleSelectTip: (value: string) => void;
}

const Selection = ({ SelectedTip, handleSelectTip }: SelectionProps) => {
  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    handleSelectTip(target.value);
    console.log(SelectedTip);
  };

  return (
    <RadioWrapper>
      <Label>Select Tip %</Label>
      <RadioGroup>
        <RadioItem
          checked={SelectedTip === "5"}
          value="5"
          type="radio"
          name="tip"
          id="5"
          onChange={(e) => handleSelection(e)}
        />
        <Radiolabel htmlFor="5">5%</Radiolabel>
        <RadioItem
          checked={SelectedTip === "10"}
          value="10"
          type="radio"
          name="tip"
          id="10"
          onChange={(e) => handleSelection(e)}
        />
        <Radiolabel htmlFor="10">10%</Radiolabel>
        <RadioItem
          checked={SelectedTip === "15"}
          value="15"
          type="radio"
          name="tip"
          id="15"
          onChange={(e) => handleSelection(e)}
        />
        <Radiolabel htmlFor="15">15%</Radiolabel>
        <RadioItem
          checked={SelectedTip === "25"}
          value="25"
          type="radio"
          name="tip"
          id="25"
          onChange={(e) => handleSelection(e)}
        />
        <Radiolabel htmlFor="25">25%</Radiolabel>
        <RadioItem
          checked={SelectedTip === "50"}
          value="50"
          type="radio"
          name="tip"
          id="50"
          onChange={(e) => handleSelection(e)}
        />
        <Radiolabel htmlFor="50">50%</Radiolabel>
        <InputRadio
          value={SelectedTip}
          placeholder="Custom"
          onChange={(e) => handleSelection(e)}
        />
      </RadioGroup>
    </RadioWrapper>
  );
};

export default Selection;
