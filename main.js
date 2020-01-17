// Write your JavaScript here


document.getElementById("calculate-change").addEventListener("click", calculateChange);

function calculateChange(){
  var amountReceived = document.getElementById("amount-received").value;
  var amountDue = document.getElementById("amount-due").value;
  var change = amountReceived - amountDue;
  var cents = change * 100;


  
    //dollar amount  
    var dollars = Math.floor(change);
    cents = cents - (dollars * 100);
    document.getElementById("dollars-output").innerHTML = dollars;
  

    //print # of quarters
    var quarters = Math.floor(cents/25); 
    cents = cents - (quarters * 25);
    document.getElementById("quarters-output").innerHTML = quarters;

    //print # of dimes             
    var dimes = Math.floor(cents/10);
    cents = cents - (dimes * 10);
    document.getElementById("dimes-output").innerHTML = dimes;

    //print # of nickels
    var nickels = Math.floor(cents/05);
    cents = cents - (nickels * 05);
    document.getElementById("nickels-output").innerHTML = nickels;  
  
    //print # of pennies      
    var pennies = Math.round(cents/1);
    cents = cents - (pennies * 1)
    document.getElementById("pennies-output").innerHTML = pennies; 


    return; 

  
  }

