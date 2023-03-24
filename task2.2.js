function PinValidation(num) {
    const pin = /^(\d{4}|^\d{6})$/g;
    return pin.test(num);
  }
  
  console.log(PinValidation("2933"));
  