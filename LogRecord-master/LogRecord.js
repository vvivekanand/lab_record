var readline=require('readline-sync');
fs = require('fs')

//handle the code which throws exception
function addition(number_1,number_2){
    console.log("Addition is ",number_1+number_2);
}

function subtraction(number_1,number_2){
    console.log("Subtraction is",number_1-number_2);
}

function multiplication(number_1,number_2){
    console.log("Multiplication is",number_1*number_2);
}

function division(number_1,number_2)
{
    if(number_2==0)
        throw new TypeError("can't' divide by Zero");
    else   
        console.log("Division is "+number_1/number_2);
}

console.log("Get the input from the user");

var number_1=parseInt(readline.question("Enter the 1st number:"));
var number_2=parseInt(readline.question("Enter the 2nd number:"));

addition(number_1,number_2);

subtraction(number_1,number_2);

multiplication(number_1,number_2);

try{
    division(number_1,number_2); 
} catch (err) {

    fs.writeFileSync("errormsg.txt",err.toString());
    console.log("Error occured:"+err);

}