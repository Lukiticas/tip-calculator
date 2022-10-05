import { useEffect, useMemo, useState } from "react";
import ThemeClient from "./utils/helpers/ThemeProvider.component.jsx";

import kFormatter from "./utils/KFormatter.util.js";
import calculateTip from "./utils/TipCalculator.util.js";

import iconPeople from "/images/icon-person.svg";
import iconDollar from "/images/icon-dollar.svg";

import Display, { currency } from "./components/Display/Display.component";
import { AppMain, Calculator, Header } from "./styles/global.styles.js";
import Input from "./components/Input/Input.component.js";
import Selection from "./components/Selection/Selection.component.js";

interface Bill {
  bill: string;
  selectedTip: string;
  numberOfPeople: string;
  tipPP: number;
  totalPP: number;
}

const App = () => {
  const [bill, setBill] = useState<Bill>({
    bill: "",
    selectedTip: "",
    numberOfPeople: "",
    tipPP: 0,
    totalPP: 0,
  });

  const displayInformations: currency[] = [
    { title: "Tip Amount", by: "person", amount: kFormatter(bill.tipPP) },
    { title: "Total", by: "person", amount: kFormatter(bill.totalPP) },
  ];

  useMemo(() => {
    const [value, tipPP, totalPP] = calculateTip(
      ["", "0"].includes(bill.bill) ? 0 : Number.parseFloat(bill.bill),
      Number(bill.selectedTip),
      ["", "0"].includes(bill.numberOfPeople)
        ? 1
        : Number.parseFloat(bill.numberOfPeople)
    );

    setBill((el) => ({ ...el, tipPP, totalPP }));
  }, [bill.bill, bill.selectedTip, bill.numberOfPeople]);

  const clearValues = () => {
    setBill({
      bill: "",
      selectedTip: "",
      numberOfPeople: "",
      tipPP: 0,
      totalPP: 0,
    });
  };

  const isAnyValue = [bill.bill, bill.numberOfPeople, bill.selectedTip].some(
    (el) => el != "0"
  );

  const handleInputChange = (value: string, name: string) => {
    if (!bill.hasOwnProperty(name)) throw new Error("invalid name");
    setBill((e) => ({ ...e, [name]: value }));
  };

  const handleSelectTip = (value: string) => {
    setBill((el) => ({ ...el, selectedTip: value }));
  };

  return (
    <ThemeClient>
      <>
        <Header>
          <h1>SPLITTER</h1>
        </Header>
        <AppMain>
          <Calculator>
            <Input
              type="number"
              name="bill"
              label="bill"
              iconPath={iconDollar}
              inputValue={bill.bill}
              placeholder="0"
              setInputState={handleInputChange}
            />
            <Selection
              handleSelectTip={handleSelectTip}
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
            />
          </Calculator>
          <Display
            params={displayInformations}
            resetFunction={() => clearValues()}
            isEmpty={isAnyValue}
          />
        </AppMain>
      </>
    </ThemeClient>
  );
};

export default App;
