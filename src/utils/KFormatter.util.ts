function kFormatter(num: number): number | string {
  const isBig = num >= 232323233232323333n || (num > 0 && num < 0.01);

  return Intl.NumberFormat("en", {
    notation: isBig ? "scientific" : "compact",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    maximumSignificantDigits: 3,
  }).format(num);
}

export default kFormatter;
