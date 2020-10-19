var counter =0 ;
var counter1 = 0;

function myFunctionsend() {
    window.userInput = document.getElementById('message').value;
    console.log(userInput);
    document.querySelector("#hub").innerHTML = userInput;
}



function Functionexpand() {
    if (counter == 0)
    {
        document.getElementById("sugg").style.gridTemplateAreas =  
    "'avatar header header header header header header ' 'menu menu menu menu menu menu menu' 'left main main main right right right' 'footer footer footer footer footer footer footer'"; 
    counter = 1;
    }
    else {
        document.getElementById("sugg").style.gridTemplateAreas =  
    "'avatar header header header header header header' 'menu menu menu menu menu menu menu' 'left main main main main main right' 'footer footer footer footer footer footer footer'"; 
    counter = 0;
    }
   
}
   
function Functionexpand2() {
    if (counter1 == 0)
    {
        document.getElementById("sugg").style.gridTemplateAreas =  
    "'avatar header header header header header header' 'menu menu menu menu menu menu menu' 'left left left main main main right' 'footer footer footer footer footer footer footer'"; 
    counter1 = 1;
    }
    else {
        document.getElementById("sugg").style.gridTemplateAreas =  
    "'avatar header header header header header header' 'menu menu menu menu menu menu menu' 'left main main main main main right' 'footer footer footer footer footer footer footer'"; 
    counter1 = 0;
    }
}
function myPop() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


