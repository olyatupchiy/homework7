let mathAction = prompt("What would you like to do? add, sub, mult, div");
let firstNum = +prompt("Enter the first number");
let secNum = +prompt("Enter the second number");
let add = firstNum + secNum;
let sub = firstNum - secNum;
let mult = firstNum * secNum;
let div = firstNum / secNum;
   if (mathAction === "add") {
       alert(`${firstNum} + ${secNum} = ${add}`);
}
   else if (mathAction === "sub") {
       alert(`${firstNum} - ${secNum} = ${sub}`);
   }
   else if (mathAction === "mult") {
       alert(`${firstNum} * ${secNum} = ${mult}`);
   }
   else if (mathAction === "div") {
       alert(`${firstNum} / ${secNum} = ${div}`);
   }
