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
})
document.addEventListener("load", (event) => {
    document.style.transition = "all fade-in 1s";
}
)