window.onload= function(){
    console.log("The document is loaded");
    // document.getElementById('div').style.width="50%";
console.log(document.getElementById('div').style.width)
    // document.getElementById('div').style.width="50%"
changeDiv();// calling back the function changeDiv
}


function changeDiv(){
    document.getElementById('div').style.width="50%";
    document.getElementById('div').style.backgroundColor= '#020202';
    document.getElementById('div').style.height="200px";

}

function returnDiv(){
    document.getElementById('div').style.width="25%";
    document.getElementById('div').style.backgroundColor= 'brown';
    document.getElementById('div').style.height="100px";
    console.log("returnDiv function called back")
}
