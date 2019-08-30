function change(){
    // . mean a member of 
    var red = document.getElementById("red").value;
    var green= document.getElementById("green").value;
    var blue= document.getElementById("blue").value;

    console.log(red);
    console.log(green);
    console.log(blue);

document.getElementById("color-picker").style.backgroundColor='rgb('+red+", "+green+', '+blue+")";
// document.getElementById("color-picker").style.backgroundColor='rgb(2, 5, 66)';
document.getElementById("result").innerText='rgb('+red+", "+green+', '+blue+")";
    var x = true;
// typeof  the type of the variable.

    console .log(typeof red)
}

