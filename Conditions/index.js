var x =5;
var y= 50;
var bo = (x==y);
var ss = (x>y);
document.write(bo)
document.write("<br>")
document.write(ss)

if(x==y){ // we can put boolean variable or comparing
    document.write("Ja bo is true thats why am here")
    document.write("Ja bo is true thats why am here")
    document.write("Ja bo is true thats why am here")
    document.write("Ja bo is true thats why am here")
    document.write("Ja bo is true thats why am here")
}
if(x<10){
    document.write("X Less than Y")
}
if(5==3){
    document.write("Thats impossible")
}
if("r"=="r"){
    document.write("<br>this is always true")
}

if(1 =="1"){ // only in Javascript work,  dont care about the type
    document.write("<br>Lets See")
}
if(5 ==="5"){// value and the type should be equals

    document.write("<br>Not Work");
}
 if(80<10 || 5==0 || 10> 2 || bo){
     // Or operation, at list one true
    document.write("<h1>I need at list one true</h1>");
 }
 if(10==100 && 0<5){
    document.write("<h1>teasting And Operation</h1>");
 }else{
    document.write("<br> i will be excuted When if is false");
 }
 
 document.write("<br> i will be excuted anyway");