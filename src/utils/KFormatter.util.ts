function kFormatter(num: number): number | string {
  return Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(num);
}

export default kFormatter;
