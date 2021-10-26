export const calcTaxInOneYear = (salary) => Math.floor(salary * 12 * 0.13);

export const calcPayInOneYear = (taxInOneYear) => {
  const payArray = [];
  let tax = 260000;
  const years = Math.ceil(260000 / taxInOneYear);
  for (let i = 0; i < years; i++) {
    if (tax > taxInOneYear) {
      tax -= taxInOneYear;
      payArray.push(`${taxInOneYear.toLocaleString()} рублей`);
    } else {
      payArray.push(`${tax.toLocaleString()} рублей`)
    }
  }
  return payArray;
};

export const endingNumber = (num) => {
  const end = +(String(num).split('').slice(-1)[0]);

  if (num >= 11 && num <= 20) {
    return 'ый'
  } else if (end === 1 || end === 4 || end === 5 || end === 9 || end === 0) {
    return 'ый'
  } else if (end === 2 || end === 6 || end === 7 || end === 8) {
    return 'oй'
  } else if (end === 3) {
    return 'ий'
  }
};