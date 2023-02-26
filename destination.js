let destinationMoon = document.getElementById("destinationMoon")
let destinationMars = document.getElementById("destinationMars")
let destinationEuropa = document.getElementById("destinationEuropa")
let destinationTitan = document.getElementById("destinationTitan")

let moonImg = document.getElementById("moonImg")
let marsImg = document.getElementById("marsImg")
let europaImg = document.getElementById("europaImg")
let titanImg = document.getElementById("titanImg")

function unSelect(){
    destinationMoon.style.borderBottom = "none";
    destinationMars.style.borderBottom = "none";
    destinationEuropa.style.borderBottom = "none";
    destinationTitan.style.borderBottom = "none";
    moonImg.style.display = "none";
    marsImg.style.display = "none";
    europaImg.style.display = "none";
    titanImg.style.display = "none";
}

let extratext1 = document.getElementById("extratext1")
let extratext2 = document.getElementById("extratext2")
let extratext3 = document.getElementById("extratext3")
let extratext4 = document.getElementById("extratext4")
let selectDestinationTitle = document.getElementById("selectDestinationTitle")
let selectDestinationText = document.getElementById("selectDestinationText")

destinationMoon.addEventListener("click", () => {
    unSelect();
    destinationMoon.style.borderBottom = "2px solid white";
    moonImg.style.display = "block";
    extratext1.innerHTML = "AVG. DISTANCE";
    extratext2.innerHTML = "384,400 KM";
    extratext3.innerHTML = "EST. TRAVEL TIME";
    extratext4.innerHTML = "3 DAYS";
    selectDestinationTitle.innerHTML = "MOON";
    selectDestinationText.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";

});
destinationMars.addEventListener("click", () => {
    unSelect();
    destinationMars.style.borderBottom = "2px solid white";
    marsImg.style.display = "block";
    extratext1.innerHTML = "AVG. DISTANCE";
    extratext2.innerHTML = "225 MIL. KM";
    extratext3.innerHTML = "EST. TRAVEL TIME";
    extratext4.innerHTML = "9 MONTHS";
    selectDestinationTitle.innerHTML = "MARS";
    selectDestinationText.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";

});
destinationEuropa.addEventListener("click", () => {
    unSelect();
    destinationEuropa.style.borderBottom = "2px solid white";
    europaImg.style.display = "block";
    extratext1.innerHTML = "AVG. DISTANCE";
    extratext2.innerHTML = "628 MIL. KM";
    extratext3.innerHTML = "EST. TRAVEL TIME";
    extratext4.innerHTML = "3 YEARS";
    selectDestinationTitle.innerHTML = "EUROPA";
    selectDestinationText.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";

});
destinationTitan.addEventListener("click", () => {
    unSelect();
    destinationTitan.style.borderBottom = "2px solid white";
    titanImg.style.display = "block";
    extratext1.innerHTML = "AVG. DISTANCE";
    extratext2.innerHTML = "1.6 BIL. KM";
    extratext3.innerHTML = "EST. TRAVEL TIME";
    extratext4.innerHTML = "7 YEARS";
    selectDestinationTitle.innerHTML = "TITAN";
    selectDestinationText.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";

});
