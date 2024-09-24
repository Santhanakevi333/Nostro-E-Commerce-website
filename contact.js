var sideNavmenu=document.getElementById("sidenavbar-activate")
 var sidenavbar=document.querySelector(".sidenavbar")
 sideNavmenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
 })

 var sidenavbarClose= document.getElementById("sidenavbar-close")

.addEventListener("click",function(){
   sidenavbar.style.marginLeft="-60%"
 })
