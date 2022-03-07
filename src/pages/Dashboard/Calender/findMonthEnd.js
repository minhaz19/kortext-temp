

const findMonthEnd = (selectedMonth) => {
    if (
      selectedMonth.month === 0 ||
      selectedMonth.month === 2 ||
      selectedMonth.month === 4 ||
      selectedMonth.month === 6 ||
      selectedMonth.month === 7 ||
      selectedMonth.month === 9 ||
      selectedMonth.month === 11
    ) {
      return 31;
    } else if (
      selectedMonth.month === 3 ||
      selectedMonth.month === 5 ||
      selectedMonth.month === 8 ||
      selectedMonth.month === 10
    ) {
      return 30;
    } else if (
      checkLeapYear(selectedMonth.year) === 1 &&
      selectedMonth.month === 1
    ) {
      return 29;
    } else {
      return 28;
    }
  };

  function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 === year % 4 && 0 !== year % 100) || 0 === year % 400) {
      return 1;
    } else {
      return 0;
    }
  }


export default findMonthEnd
