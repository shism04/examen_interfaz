
document.querySelector("a#open-offcanvas").addEventListener("click",()=>{
    document.querySelector("aside#offcanvas").classList.add("show");
});

document.querySelector("#offcanvas button.close").addEventListener("click",()=>{
    document.querySelector("aside#offcanvas").classList.remove("show");
});