var counter =0 ;
var counter1 = 0;

function myFunctionsend() {
    window.userInput = document.getElementById('message').value;
    console.log(userInput);
    document.querySelector("#hub").innerHTML =  document.querySelector("#hub").innerHTML + " " + userInput ;
}

function loginout(){
    const img = document.querySelector('photo_avatar');
    if (document.querySelector("#textlog").innerHTML == "log in")
    {
        document.querySelector("#textlog").innerHTML = "log out";
        document.querySelector("#backgroundc").style.visibility = "hidden";
        document.querySelector("#backgroundc2").style.visibility = "hidden";
        document.querySelector("#user_name").style.display = "block";
    }
    else{
        document.querySelector("#textlog").innerHTML = "log in";
        document.querySelector("#backgroundc").style.visibility = "visible";
        document.querySelector("#backgroundc2").style.visibility = "visible";
        document.querySelector("#user_name").style.display = "none";
    }
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

function closeWin(id) {
     document.getElementById(id).style.display= none;
                      
  }


