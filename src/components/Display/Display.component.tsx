import Screen from "../Screen/Screen.component";
import { DisplayBody, DisplayButton } from "./Display.styles";

export interface currency {
  title: string;
  by: string;
  amount: number | string;
}

interface DisplayProps {
  params: currency[];
  resetFunction: () => unknown;
}

const Display = ({ params, resetFunction }: DisplayProps) => {
  const handleClick = () => {
    resetFunction();
  };

  const Screens = params.map((el) => (
    <Screen key={el.title} title={el.title} by={el.by} amount={el.amount} />
  ));

  return (
    <DisplayBody>
      {params && Screens}
      <DisplayButton onClick={handleClick}>RESET</DisplayButton>
    </DisplayBody>
  );
};

export default Display;
