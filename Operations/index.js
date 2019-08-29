/*
+
-
*
/
% modlo "the rest of devistioon"
*/ 
var number1 = 4;
var number2 =8;
var number3= 2;
var result= number1+number2 / number3*number2;
//            4    +   2/2*2      = 
//            4    +   0.5        = 4.5  wrong
//            4   +     2         = 6    correct
result = (number2 + number3) * number1// inforce to do + first
result =number1 + number2; // => 12
result ++;
var x = 5;
x++;// increase the value once => x= x+1
// x** not posib

// x// not posible
var y = 4;
y--;// deccrease the value once => y= y-1

y= 2;
y+=5; // adding a certian number to the variable
// =>  y = y+5
y=4;
y-=2; // decreasing the variable  certian value
// => y = y - 2
y=5;
y*=2;// => y = y * 2
y= 10;
y/=2;// => y = y / 2
document.getElementById("result").innerText=y;
// boolean Variables
var boVariable= true;
var boVarible1= false;
var compare = (5==5);
compare = (4==8);// == comparing
compare = (4> 6);// result = false
compare = (3<9);// result = true
compare = (4< 4);// result = false
compare = (4 <= 4);// result = true
compare = (8>= 7);// result = true
compare = ("hi" == "hi");// result = true
compare = ("Hi" == "hi");// result = false
console.log(compare);

