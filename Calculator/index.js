// document.getElementById("result").value="2019"



function someFunction(x) {

    return x + 2;
}
var newValue = someFunction(50);
console.log(newValue);

function adding(a, b) {
    return a + b;
}
var value1 = adding(9, 3); //12
var value2 = adding(2, 7); // 9
console.log(value1);
console.log(value2);
var value3 = adding("Hello ", " Mostafa");
console.log(value3);
var value4 = 5 + adding("a", 4); // 10
console.log(value4);
var value5 = adding(adding(1, 2), 5); //8
console.log(value5);

function nigative(a) {
    return -a;
}
var value6 = nigative(8);
console.log(value6);

function print(a) {
    console.log(a);
}

print(5)
print("Some text")
print(5 + 1);

function gei(g) {
    return document.getElementById(g);
}


function change(d) {
    console.log(d)
    document.getElementById("result").value += d;

    //document.getElementById("result").value=document.getElementById("result").value+d

}
var K = 5
K += 2 // K= K+2

var firstNumber;
var secondNumber = 0;
var operator;
function operations(op) {
    operator=op
    if (firstNumber) {
        secondNumber = document.getElementById("result").value
    } else {
        firstNumber = document.getElementById("result").value
    }
    document.getElementById("result").value = "";
    console.log("First Number Is :  " + firstNumber)
    console.log("Second Number  Is :  " + secondNumber)
}

function eq() {
    if (firstNumber) {
        // i can make the operation
        secondNumber = document.getElementById("result").value;
        document.getElementById("result").value = eval(firstNumber+operator+secondNumber)

    } else {
        alert("Please put some Values")
    }
    console.log("First Number Is :  " + firstNumber)
    console.log("Second Number  Is :  " + secondNumber)
}