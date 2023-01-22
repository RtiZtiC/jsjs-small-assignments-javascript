const DaysInMonth = (month, year) => {
    if (month === "February") {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 29;
      } else {
        return 28;
      }
    } else if (month === "April" || month === "June" || month === "September" || month === "November") {
      return 30;
    } else if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
      return 31;
    } else {
      return "Invalid month";
    }
  }
  
  console.log(DaysInMonth("February", 2020));

  