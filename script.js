// selecting nav bar
var offerBar=document.querySelector(".offer-bar")
var offerclose=document.getElementById("offer-close")
offerclose.addEventListener("click",function(){
    offerBar.style.display="none"
 })

 var sideNavmenu=document.getElementById("sidenavbar-activate")
 var sidenavbar=document.querySelector(".sidenavbar")
 sideNavmenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
 })

 var sidenavbarClose= document.getElementById("sidenavbar-close")

.addEventListener("click",function(){
   sidenavbar.style.marginLeft="-60%"
 })

//slide bar

var sliderleft = document.getElementById("slider-left-activate")
var sliderright = document.getElementById("slider-right-activate")
var sliderimage = document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleft)
sliderright.addEventListener("click",function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})

sliderleft.addEventListener("click",function(){

    if(slidermargin==0)
    {
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{
        slidermargin=slidermargin-100
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})
// likebutton
var likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach(function (button) {
    var emptyHeart = button.querySelector(".heart-empty");
    var fillHeart = button.querySelector(".heart-fill");

    emptyHeart.addEventListener("click", function () {
        emptyHeart.style.display = "none";
        fillHeart.style.display = "block";
    });

    fillHeart.addEventListener("click", function () {
        fillHeart.style.display = "none";
        emptyHeart.style.display = "block";
    });
});

// 
window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})

