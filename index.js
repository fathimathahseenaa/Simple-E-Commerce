var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left="0"


}
function closenavbar(){
    sidenav.style.left="-60%"


}
var product = document.getElementById("product")
var search = document.getElementById("psearch")
var productlist = product.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredvalue = event.target.value.toUpperCase()
    for (count=0; count<productlist.length;count=count+1)
    {
        productname = productlist[count].querySelector("p").textContent 
        if(productname.toUpperCase().indexOf(enteredvalue)<0 )
            {
                productlist[count].style.display="none"
            }   
            else{
                 productlist[count].style.display="block"

            }
    }
})
