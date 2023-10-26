const userMessage = prompt("Scrivi una parola!");
console.log(userMessage);


// invocazione della funzione 
 palindroma(userMessage)

// FUNZIONE 
function palindroma(userMessage) {

    let i = 0;
    const letter = []; 
    const letterReverse = [];
    
    for (let i = 0; i < userMessage.length; i++) {
      
      letter.push(userMessage[i])
      console.log(userMessage[i])
    }  
    
    if (letter === letterReverse) {
        console.log("questa parola è palindroma")
  
      }else {
        console.log("questa parola NON è palindroma")
      
    }
}
    
    





