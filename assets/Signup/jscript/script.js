const signInButton = document.querySelector("#signInButton");
const signUpButton = document.querySelector("#signUpButton");
const overlay_container = document.querySelector(".container .overlay-container");
const overlay = document.querySelector(".container .overlay-container .overlay");
const signInForm =document.querySelector(".container .sign-in-form");
const signUpForm =document.querySelector(".container .sign-up-form");
const SignUp =document.querySelector(".container .sign-up-form #hi1");
const SignIn =document.querySelector(".container .sign-up-form #hi2");


signInButton.addEventListener("click" , ()=>{
    overlay_container.style.transform = "translateX(100%)";
    overlay.style.transform = "translateX(-50%)";
    signInForm.classList.add("active");
    signUpForm.classList.remove("active");
});

signUpButton.addEventListener("click" , ()=>{
    overlay_container.style.transform = "translateX(0%)";
    overlay.style.transform = "translateX(0%)";
    signUpForm.classList.add("active");
    signInForm.classList.remove("active");

});

// SignUp.addEventListener("click" , ()=>{
//     overlay_container.style.transform = "translateX(100%)";
//     overlay.style.transform = "translateX(-50%)";
//     signInForm.classList.add("active");
//     signUpForm.classList.remove("active");
// });
 

function myfun(){
    var Username=document.getElementById("username").value;
    var Email=document.getElementById("email").value;
    var Password=document.getElementById("pass").value;

    localStorage.setItem("Username" ,Username);
    localStorage.setItem("Email" ,Email);
    localStorage.setItem("Password" ,Password);

 
    if(Username && Email && Password){
        overlay_container.style.transform = "translateX(100%)";
        overlay.style.transform = "translateX(-50%)";
        signInForm.classList.add("active");
        signUpForm.classList.remove("active");
        alert("Sign Up Successfully")
    }

     else{
        alert("Please fill this correctly")

    Username=document.getElementById("username").value="";
    Email=document.getElementById("email").value="";
    Password=document.getElementById("pass").value="";

    }
          
    }
   

function myfun2(){
    
    var email=document.getElementById("email2").value;
    var password=document.getElementById("pass2").value;

    chemail=localStorage.getItem("Email");
    chpassword=localStorage.getItem("Password");



    if(email==chemail && password==chpassword){
        window.open("index.html");

    }
    else{
        alert("email and password is incorrect")
    }



}
