// Start your code ***HERE*** =========
 // create a global variable called "pwLength" with a number between 10 and 18
 let pwLength = 16;
 // create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
    //function addNewPassword () {
     let numberChars = "0123456789";
     let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let lowerChars = "abcdefghijklmnopqrstuvwxyz";
     let Symbol = "!@#$%^&*()";
     let allChars = numberChars + upperChars + lowerChars+ Symbol ;
     let randPasswordArray = Array(pwLength);
     randPasswordArray[0] = numberChars;
     randPasswordArray[1] = upperChars;
     randPasswordArray[2] = lowerChars;
     randPasswordArray[3] = Symbol;
     // Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function
     
    function addNewPassword () {
    randPasswordArray = randPasswordArray.fill(allChars, 4);
    return shuffleArray (randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
   }
   
 
   function shuffleArray (array) {
     
     for (let i = 0; i <= pwLength; i++) {
       let j = Math.floor(Math.random() * (i + 1));
       let temp = array[i];
       array[i] = array[j];
       array[j] = temp;
     }
    return array;
   
    
   }
  
   
   alert(addNewPassword());
  let genBtn = document.getElementById("btnGen");
  let buttonHandler = () => {
      document.getElementById("password").value = addNewPassword();
  };
  // Event listener for generate PW button
  genBtn.addEventListener("click", buttonHandler);
  
  // ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
  