import { currency } from "../Display/Display.component";
import { ScreenBody, ScreenDescription, ScreenResult } from "./Screen.styles";

interface ScreenProps extends currency {}

const Screen = ({ title, by, amount }: ScreenProps) => {
  return (
    <ScreenBody>
      <ScreenDescription>
        <h2>{title}</h2>
        <span>/ {by}</span>
      </ScreenDescription>
      <ScreenResult>
        <h3>{amount}</h3>
      </ScreenResult>
    </ScreenBody>
  );
};

export default Screen;
