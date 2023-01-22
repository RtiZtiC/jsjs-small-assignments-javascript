const DaysInMonth = (month) => {
    if (month === "February") 
    {
        return 28;
    }
    else if (month === "April" || month === "June" || month === "September" || month === "November") {
      return 30;
    } else if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
      return 31;
    } else {
      return "Invalid month";
    }
  }
  
  console.log(DaysInMonth("January")); 

  