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
