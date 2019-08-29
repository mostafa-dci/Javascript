function changeh1(){
    document.getElementById('head').innerText="its too hot"
}
function changeDiv(){
    document.getElementById('c').style.width = "35%";
    document.getElementById('c').style.height = "260px";
    document.getElementById('c').innerHTML = "<h1>expanding</h1>"
}


function returnDiv(){
    document.getElementById('c').style.width = "25%";
    document.getElementById('c').style.height = "250px";
    document.getElementById('c').innerHTML = "<h1>collaping</h1>"
   
}