function AllowedChars(str) {
    const allowedChars = /^[a-zA-Z0-9]*$/g;
    return allowedChars.test(str);
  }
  
  console.log(AllowedChars("Torgom66"))
  