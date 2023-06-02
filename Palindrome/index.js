function checkPalindrome() {
    const input = document.getElementById("input").value.toLowerCase();
    const reversed = input.split("").reverse().join(""); 
    //    the split method basically separates the word into individual Character 
    // the reverse then reverses the splitted word and then the join, joins the reversed word

    if (input === reversed) {
      document.getElementById("result").textContent = "It's a palindrome!";
    } else {
      document.getElementById("result").textContent = "It's not a palindrome.";
    }
  }