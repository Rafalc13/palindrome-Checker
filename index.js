function palindrome(str) {
    const modifiedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    return modifiedStr === modifiedStr.split("").reverse().join("");
  }
  
  palindrome("eye");