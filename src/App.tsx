import { AppMain, Calculator, Header } from "./styles/global.styles.js";

import Display, { currency } from "./components/Display/Display.component";

import ThemeClient from "./utils/helpers/ThemeProvider.component.jsx";
import kFormatter from "./utils/KFormatter.util.js";
import { useEffect, useState } from "react";
import calculateTip from "./utils/TipCalculator.util.js";
const App = () => {
  const [bill, setBill] = useState({
    bill: 0,
    selectedTip: 0,
    numberOfPeople: 1,
    tipPP: 0,
    totalPP: 0,
  });

  const displayInformations: currency[] = [
    { title: "Tip Amount", by: "person", amount: kFormatter(bill.tipPP) },
    { title: "Total", by: "person", amount: kFormatter(bill.totalPP) },
  ];

  useEffect(() => {
    setBill((el) => {
      if (el.bill < 1) return el;

      const [value, tipPP, totalPP] = calculateTip(
        el.bill,
        el.selectedTip,
        el.numberOfPeople
      );

      console.log(value);
      return {
        ...el,
        tipPP,
        totalPP,
      };
    });
  }, [bill.bill, bill.numberOfPeople, bill.selectedTip]);

  const clearValues = () => {
    setBill({
      bill: 0,
      selectedTip: 0,
      numberOfPeople: 0,
      tipPP: 0,
      totalPP: 0,
    });
  };
  return (
    <ThemeClient>
      <>
        <Header>
          <h1>SPLITTER</h1>
        </Header>
        <AppMain>
          <Calculator></Calculator>
          <Display
            params={displayInformations}
            resetFunction={() => clearValues()}
          />
        </AppMain>
      </>
    </ThemeClient>
  );
};

export default App;
