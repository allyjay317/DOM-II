// Your code goes here

let rotation = 45;
let nav_links = document.querySelectorAll(".nav-link");
nav_links.forEach(link =>{
    link.style.transition = ""
    link.addEventListener("mouseover", function(event)  {
        this.style.transform = `rotate(${rotation}deg)`;
        this.interval = setInterval(function(link) {
            rotation = rotation * -1;
            link.style.transform = `rotate(${rotation}deg)`;
        }, 500, this);
    })
    link.addEventListener("mouseout", function(event) {
        clearInterval(this.interval);
        this.style.transform = "rotate(0deg)";
    })
});

document.querySelector(".logo-heading").addEventListener("dblclick", function(event) {
    event.stopPropagation();
    if(this.textContent == "Fun Bus"){
        this.textContent = "Bus Fun";
    }
    else {
        this.textContent = "Fun Bus";
    }
});

document.querySelector("body").addEventListener("click", function(event){
    this.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`

});
document.addEventListener("contextmenu", function(){

});
document.addEventListener("scroll", function(){

});

document.addEventListener("resize", function(){

});
document.addEventListener("keydown", function(){

});
document.addEventListener("keyup", function(){

});
document.addEventListener("load", function(){

});