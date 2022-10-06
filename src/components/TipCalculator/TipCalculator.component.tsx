import { Bill } from "../../App";
import Input from "../Input/Input.component";
import Selection from "../Selection/Selection.component";
import { Calculator } from "./TipCalculator.styles";

import iconPeople from "/images/icon-person.svg";
import iconDollar from "/images/icon-dollar.svg";

interface TCProps {
  handleInputChange: (value: string, name: string) => void;
  bill: Bill;
}

const TipCalculator = ({ handleInputChange, bill }: TCProps) => {
  return (
    <Calculator>
      <Input
        type="number"
        name="value"
        label="bill"
        iconPath={iconDollar}
        inputValue={bill.value}
        placeholder="0"
        setInputState={handleInputChange}
      />
      <Selection
        handleSelectTip={handleInputChange}
        SelectedTip={bill.selectedTip}
      />
      <Input
        type="number"
        name="numberOfPeople"
        label="Number of People"
        iconPath={iconPeople}
        inputValue={bill.numberOfPeople}
        placeholder="0"
        setInputState={handleInputChange}
        checkValidity={true}
      />
    </Calculator>
  );
};

export default TipCalculator;
