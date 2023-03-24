function dayOfYear(dateString) {
    const date = new Date(dateString);
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = (date - startOfYear) + ((startOfYear.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  
  
  console.log(dayOfYear("12/13/2020"));
  console.log(dayOfYear("12/17/2020"));
  console.log(dayOfYear("11/16/2020"));
  console.log(dayOfYear("1/9/2019"));
  console.log(dayOfYear("3/1/2004"));
  console.log(dayOfYear("12/31/2000"));
  console.log(dayOfYear("3/21/2023"));
  