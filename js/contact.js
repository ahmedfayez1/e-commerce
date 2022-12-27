function getCookie(n)
{
    
    var cookie=document.cookie.split("; ");
    var i=0;
    while(i<cookie.length)
    {
        var cookie1=cookie[i].split("=");
        if(cookie1[0]==n)
        {

            return cookie1[1];
        }
        i++;
    }
}

let counter=Number(getCookie("counter"));
document.querySelector(".counter").innerHTML=counter



var nameRegex=/^[a-z]{3,10}$/;
var emailRegex=/^[(a-z)(0-9)]{3,20}@(gmail|hotmail|yahoo|).com$/;
var passRegex=/^[(a-z)|(0-9)]{8,20}$/;

var name1;
var email;
var pass;
function nameValidator()
{
    name1=document.getElementById("name");
    if(name1.value == "")
    {
        name1.style.border="1px solid black";
        return false;
    }
    else if(nameRegex.test(name1.value)==false)
    {
        name1.style.border="3px solid red";
        return false;
    }
    else
    {
        name1.style.border="1px solid black";
        return true;
    }
}

function emailValidator()
{
    email=document.getElementById("email");
    if(email.value =="")
    {
        email.style.border="1px solid black";
        return false
    }
    else if(emailRegex.test(email.value)==false)
    {
        email.style.border="3px solid red";
        return false;
    }
    else
    {
        email.style.border="1px solid black";
        return true;
    }
}

function passValidator()
{
    pass=document.getElementById("pass");
    if( pass.value == "")
    {
        pass.style.border="1px solid black";
        return false;
    }
    else if(passRegex.test(pass.value)==false)
    {
        pass.style.border="3px solid red";
        return false;
    }
    else
    {
        pass.style.border="1px solid black";
        return true;
    }
}
let form=document.getElementById("form");
form.addEventListener("submit",(e)=>
{

    if(nameValidator()&&passValidator()&&emailValidator())
    {
        console.log("hello");
    }
    else
    {
        e.preventDefault();
    }
})

