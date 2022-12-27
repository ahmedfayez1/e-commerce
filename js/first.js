let slider_contents=["../images/2.jpg","../images/3.jpg","../images/4.jpg","../images/1.jpg"]
let slider_counter=0;
let slider=document.getElementById("slider");

function moveRight()
{
    slider_counter++;
    if(slider_counter>slider_contents.length-1)
    {
        slider_counter=0;
    }
    slider.style.backgroundImage=`url(${slider_contents[slider_counter]})`
}

function moveLeft()
{
    slider_counter--;
    if(slider_counter<0)
    {
        slider_counter=3;
    }
    slider.style.backgroundImage=`url(${slider_contents[slider_counter]})`
}


function filter1(e)
{
    let products=document.querySelectorAll(".card-p p")
    let product=document.querySelectorAll(".card-info")
    for(let i =0;i<product.length;i++)
    {
            product[i].style.display="block"; 
    }
    for(let i =0;i<products.length;i++)
    {
        if(products[i].innerHTML != e.target.innerHTML)
        {
            product[i].style.display="none";
        }
    }
    
}

function All()
{
    let product=document.querySelectorAll(".card-info")

    for(let i =0;i<product.length;i++)
    {
            product[i].style.display="block"; 
    }
}
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
function setCookie(name,attr)
{
    var date=new Date();
    date.setDate(date.getDate() + 200);
    document.cookie=`${name}=${attr};expires=${date}`;
}
let counter=Number(getCookie("counter"));
document.querySelector(".counter").innerHTML=counter
function addToCart()
{
    counter++;
    setCookie("counter",counter)
    document.querySelector(".counter").innerHTML=counter
}
function remove()
{
    if(counter != 0)
    {
        counter--;
        setCookie("counter",counter)
        document.querySelector(".counter").innerHTML=counter
    }
}

window.addEventListener("scroll",()=>
{
    if(document.documentElement.scrollTop>700)
    {
        document.getElementById("arrow").style.display="block";
    }
    else
    {
        document.getElementById("arrow").style.display="none";
    }
})