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
  handleSelectTip: (value: string, name: string) => void;
}

const Selection = ({ SelectedTip, handleSelectTip }: SelectionProps) => {
  const id = Math.floor(Math.random() * (Math.random() * 1000)).toString();

  const handleTipSelected = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => [
    handleSelectTip(target.value, target.name),
  ];

  return (
    <RadioWrapper>
      <Label htmlFor={id}>Select Tip %</Label>
      <RadioGroup>
        <RadioItem
          checked={SelectedTip === "5"}
          value="5"
          type="radio"
          name="selectedTip"
          id="5"
          onChange={handleTipSelected}
        />
        <Radiolabel htmlFor="5">5%</Radiolabel>
        <RadioItem
          checked={SelectedTip === "10"}
          value="10"
          type="radio"
          name="selectedTip"
          id="10"
          onChange={handleTipSelected}
        />
        <Radiolabel htmlFor="10">10%</Radiolabel>
        <RadioItem
          checked={SelectedTip === "15"}
          value="15"
          type="radio"
          name="selectedTip"
          id="15"
          onChange={handleTipSelected}
        />
        <Radiolabel htmlFor="15">15%</Radiolabel>
        <RadioItem
          checked={SelectedTip === "25"}
          value="25"
          type="radio"
          name="selectedTip"
          id="25"
          onChange={handleTipSelected}
        />
        <Radiolabel htmlFor="25">25%</Radiolabel>
        <RadioItem
          checked={SelectedTip === "50"}
          value="50"
          type="radio"
          name="selectedTip"
          id="50"
          onChange={handleTipSelected}
        />
        <Radiolabel htmlFor="50">50%</Radiolabel>
        <InputRadio
          id={id}
          value={SelectedTip}
          placeholder="Custom"
          name="selectedTip"
          onChange={handleTipSelected}
        />
      </RadioGroup>
    </RadioWrapper>
  );
};

export default Selection;
