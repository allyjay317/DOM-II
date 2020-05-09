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
    link.addEventListener("contextmenu", function(){
        link.textContent += " With Feeling";

    });
    link.addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
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
    this.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
});


let lastY = window.scrollY;
document.addEventListener("scroll", function(event){
    let navBar = document.querySelector(".main-navigation");
    if(lastY < window.scrollY){
        navBar.style.height = `${navBar.clientHeight + 5}px`;
    }
    else{
        navBar.style.height = `${navBar.clientHeight - 5}px`;
    }
    lastY = window.scrollY;
});

window.addEventListener("resize", function(event){
    document.querySelector(".logo-heading").textContent = "OH GOD THE WALLS ARE CLOSING IN!!!"
});

window.addEventListener("keydown", function(event){
    let funBus = document.querySelector(".home").querySelector("img");
    funBus.setAttribute("src", "img/cab-calloway-jumpin-jive-nicholas-brothers-1.gif");
});
document.addEventListener("keyup", function(event){
    let funBus = document.querySelector(".home").querySelector("img");
    funBus.setAttribute("src", "img/fun-bus.jpg");
});
window.addEventListener("load", function(event){
    this.alert("The Window has Loaded")
});