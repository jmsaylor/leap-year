const leapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 !== 0) {
      return true;
    }
    return false;
  }
};

console.log(leapYear(2020));
