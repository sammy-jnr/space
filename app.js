let menuIcon = document.getElementById("menuIcon")
let closeButton = document.getElementById("closeButton")
let navMobile = document.getElementById("navMobile")

menuIcon.addEventListener("click", () =>{
    navMobile.style.right = "0";
    navMobile.style.transition= "all 0.3s ease"
});
closeButton.addEventListener("click", () =>{
    navMobile.style.right = "-100%";
    navMobile.style.transition= "all 0.3s ease"
});
window.addEventListener("click", (e) =>{
    if(e.target != navMobile && e.target.parentNode != navMobile && e.target.parentNode.parentNode != navMobile && e.target != menuIcon){
        navMobile.style.right = "-100%";
        navMobile.style.transition= "none"
    }
});