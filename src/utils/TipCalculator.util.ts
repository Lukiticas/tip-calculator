type CTOutupt = [tipPerPerson: number, totalPerPerson: number]


const calculateTip = (value: number, tip: number, numberOfPeople: number): CTOutupt => {
  const tipValue = value * (tip / 100);
  const tipPerPerson = (value * (tip / 100)) / numberOfPeople;
  const totalPerPerson = (tipValue + value) / numberOfPeople;

  return [tipPerPerson, totalPerPerson];
};

export default calculateTip;
