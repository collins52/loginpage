let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");
let errorMessage = document.getElementById("error-message");

    signupbtn.addEventListener("click", function(){
    signup()
})
    signinbtn.addEventListener("click", function(){
    signin()
})

function signin(){
        namefield.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signinbtn.classList.remove("disable")
        signupbtn.classList.add("disable")
}

function signup(){
    namefield.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signinbtn.classList.add("disable")
    signupbtn.classList.remove("disable")
}