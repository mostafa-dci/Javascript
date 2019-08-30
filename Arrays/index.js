var x=10;
var s= "string"
var bo = true;
// array of numbers
var ar =[5,8,10,11];// , is important to split 
console.log(typeof x);
console.log(typeof s);
console.log(typeof bo);
console.log(typeof ar);
console.log(ar);
// to show a specofic value use array name then [number]
console.log(ar[0]);
console.log(ar[2]);
console.log(ar[4]);// out of range
// string array
var sArray = ["text","zero","one","two","three"];
console.log(sArray);
console.log(sArray[4]);
// mix array
var array= [5,"text",10,"str",true];
console.log(array[4])
console.log(typeof array[4])
console.log(typeof array[2])
var arr =[x, s , bo]
console.log(arr)
// inside arrays we can put anything that javascript understand
var newArray= [arr,array,sArray,10,"HAHAHA",false ]// we can also put arrays insid array
console.log(newArray);
console.log(newArray[2][3]);
console.log(newArray[1][2]);
console.log(newArray[0][2]);
console.log(typeof newArray[2][0]);
// document.getElementById("res").innerText= newArray;
// document.write(newArray);
console.log(newArray.length)// array.lenght => elements count
// .lenght shws us the count of elements in way that we know
console.log(newArray[newArray.length-1])// to display the last element
console.log(sArray[0])// the first Element
var sss= sArray[2];
console.log(sss);


/////////////////Get Elements by class name///////////////////
var arrayOfAnyElementHasClass1= document.getElementsByClassName("class1");
console.log(arrayOfAnyElementHasClass1);
arrayOfAnyElementHasClass1[0].innerText="Hi"
arrayOfAnyElementHasClass1[1].innerText="I am"
arrayOfAnyElementHasClass1[2].innerText="Mostafa"
arrayOfAnyElementHasClass1[3].innerText="Nice"
arrayOfAnyElementHasClass1[3].remove(); // to remove HTML TAG
var pTags = document.getElementsByTagName("p");
arrayOfAnyElementHasClass1[2].innerHTML= "<i>aaa</i>"
pTags[0].innerText= "am the first p tag";
pTags[2].innerText = "Hey am the third Element"
pTags[pTags.length -1].innerText = "Hey am the last Element"
document.write("HHHHHHHHHHHHHHHHHHH")
document.write("HHHHHHHHHHHHHHHHHHH")
document.write("HHHHHHHHHHHHHHHHHHH")
