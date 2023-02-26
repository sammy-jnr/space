let crewPageBodySelectionItem1 = document.getElementById('crewPageBodySelectionItem1');
let crewPageBodySelectionItem2 = document.getElementById('crewPageBodySelectionItem2');
let crewPageBodySelectionItem3 = document.getElementById('crewPageBodySelectionItem3');
let crewPageBodySelectionItem4 = document.getElementById('crewPageBodySelectionItem4');

let crewPageBodyImg1 = document.getElementById('crewPageBodyImg1');
let crewPageBodyImg2 = document.getElementById('crewPageBodyImg2');
let crewPageBodyImg3 = document.getElementById('crewPageBodyImg3');
let crewPageBodyImg4 = document.getElementById('crewPageBodyImg4');

let crewPosition = document.getElementById('crewPosition');
let crewName = document.getElementById('crewName');
let crewInfo = document.getElementById('crewInfo');

function unSelect(){
    crewPageBodyImg1.style.display = "none"
    crewPageBodyImg2.style.display = "none"
    crewPageBodyImg3.style.display = "none"
    crewPageBodyImg4.style.display = "none"
    crewPageBodySelectionItem1.style.backgroundColor = "#acaaaa59"
    crewPageBodySelectionItem2.style.backgroundColor = "#acaaaa59"
    crewPageBodySelectionItem3.style.backgroundColor = "#acaaaa59"
    crewPageBodySelectionItem4.style.backgroundColor = "#acaaaa59"
}
crewPageBodySelectionItem1.addEventListener("click", ()=>{
    unSelect();
    crewPageBodyImg1.style.display = "block";
    crewPageBodySelectionItem1.style.backgroundColor = "#fff"
    crewPosition.innerHTML = "COMMANDER";
    crewName.innerHTML = "DOUGLAS HURLEY";
    crewInfo.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
})
crewPageBodySelectionItem2.addEventListener("click", ()=>{
    unSelect();
    crewPageBodyImg2.style.display = "block";
    crewPageBodySelectionItem2.style.backgroundColor = "#fff"
    crewPosition.innerHTML = "MISSION SPECIALIST";
    crewName.innerHTML = "MARK SHUTTLEWORTH";
    crewInfo.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
})
crewPageBodySelectionItem3.addEventListener("click", ()=>{
    unSelect();
    crewPageBodyImg3.style.display = "block";
    crewPageBodySelectionItem3.style.backgroundColor = "#fff"
    crewPosition.innerHTML = "PILOT";
    crewName.innerHTML = "VICTOR GLOVER";
    crewInfo.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
})
crewPageBodySelectionItem4.addEventListener("click", ()=>{
    unSelect();
    crewPageBodyImg4.style.display = "block";
    crewPageBodySelectionItem4.style.backgroundColor = "#fff"
    crewPosition.innerHTML = "FLIGHT ENGINEER";
    crewName.innerHTML = "ANOUSHEH ANSARI";
    crewInfo.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
})