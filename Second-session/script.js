var x =10;
var str = " normal text";
var str1= ' normal text again.';
var str3 = '5 1 2 ';
// alert(str3); first method to show data 
// console.log(blabla); // second method to show data
document.write(str1);
document.write("<br>")
document.write(str3);
document.write("<br>")
document.write('<h1 style="color:red">Hey am headline from javascript</h1>')
document.write("<h1>\" ' ^ *</h1>");
{/* <h3>Hello, my name is "yourname" am 'your age'</h3> */}
document.write('<h1>Hello, my name is "Mostafa" am \'30\'</h3>');
// escaping charactor "\"
document.write("<h1>");
document.write("Hello, my name is ");
document.write('"Mostafa" ');
document.write("am '30' </h1>");

// control HTML Element by id, put html text inside
document.getElementById("res").innerHTML="<i>Hey am from js</i>";
// put text inside HTML without rendering
document.getElementById("res1").innerText="<i>am just text</i>";


