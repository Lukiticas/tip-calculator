import { useMemo, useState } from "react";

import kFormatter from "./utils/KFormatter.util.js";
import calculateTip from "./utils/TipCalculator.util.js";

import Display, { currency } from "./components/Display/Display.component";
import TipCalculator from "./components/TipCalculator/TipCalculator.component.js";
import { AppMain, GlobalStyle, Header } from "./styles/global.styles.js";
import usePersistedState from "./utils/UsePersistedState.util.js";

import dark from "./styles/themes/dark.js";
import light from "./styles/themes/light.js";
import { ThemeProvider } from "styled-components";
export interface Bill {
  value: string;
  selectedTip: string;
  numberOfPeople: string;
}

const App = () => {
  const [theme, setTheme] = usePersistedState("tipTheme", light);
  const [bill, setBill] = useState<Bill>({
    value: "",
    selectedTip: "",
    numberOfPeople: "",
  });

  const [tipPP, totalPP] = useMemo(
    () =>
      calculateTip(
        Number.parseFloat(bill.value ? bill.value : "0"),
        Number(bill.selectedTip),
        Number.parseFloat(bill.numberOfPeople ? bill.numberOfPeople : "1")
      ),
    [bill.value, bill.selectedTip, bill.numberOfPeople]
  );

  const clearValues = () => {
    setBill({
      value: "",
      selectedTip: "",
      numberOfPeople: "",
    });
  };

  const handleInputChange = (value: string, name: string) => {
    if (!bill.hasOwnProperty(name)) throw new Error("invalid name");
    setBill((e) => ({ ...e, [name]: value }));
  };

  const displayInformations: currency[] = [
    { title: "Tip Amount", by: "person", amount: kFormatter(tipPP) },
    { title: "Total", by: "person", amount: kFormatter(totalPP) },
  ];

  const hasAnyValue = !!!(
    bill.value ||
    bill.numberOfPeople ||
    bill.selectedTip
  );

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Header onClick={toggleTheme}>
          {"SPLITTER".split("").map((el, index) => (
            <span key={el + index + " letter"}>{el}</span>
          ))}
        </Header>
        <AppMain>
          <TipCalculator bill={bill} handleInputChange={handleInputChange} />
          <Display
            params={displayInformations}
            resetFunction={() => clearValues()}
            isEmpty={hasAnyValue}
          />
        </AppMain>
      </>
    </ThemeProvider>
  );
};

export default App;
