import Screen from "../Screen/Screen.component";
import { DisplayBody, DisplayButton } from "./Display.styles";

export interface currency {
  title: string;
  by: string;
  amount: number | string;
}

interface DisplayProps {
  params: currency[];
  resetFunction: () => void;
  isEmpty: boolean;
}

const Display = ({ params, resetFunction, isEmpty }: DisplayProps) => {
  const Screens = params.map((el) => (
    <Screen key={el.title} title={el.title} by={el.by} amount={el.amount} />
  ));

  const handleClick = () => {
    resetFunction();
  };

  return (
    <DisplayBody>
      {params && Screens}
      <DisplayButton type="button" disabled={!isEmpty} onClick={handleClick}>
        RESET
      </DisplayButton>
    </DisplayBody>
  );
};

export default Display;
