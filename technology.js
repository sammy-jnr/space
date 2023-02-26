let technologyPageBodySelectionItem1 = document.getElementById('technologyPageBodySelectionItem1');
let technologyPageBodySelectionItem2 = document.getElementById('technologyPageBodySelectionItem2');
let technologyPageBodySelectionItem3 = document.getElementById('technologyPageBodySelectionItem3');

let technologyPageBodyImg1 = document.getElementById('technologyPageBodyImg1');
let technologyPageBodyImg2 = document.getElementById('technologyPageBodyImg2');
let technologyPageBodyImg3 = document.getElementById('technologyPageBodyImg3');

let technologyPageBodyImg12 = document.getElementById('technologyPageBodyImg12');
let technologyPageBodyImg22= document.getElementById('technologyPageBodyImg22');
let technologyPageBodyImg32 = document.getElementById('technologyPageBodyImg32');

let technologyLabel = document.getElementById('technologyLabel');
let technologyName = document.getElementById('technologyName');
let technologyInfo = document.getElementById('technologyInfo');

function unSelect(){
    technologyPageBodyImg1.style.display = "none"
    technologyPageBodyImg2.style.display = "none"
    technologyPageBodyImg3.style.display = "none"
    technologyPageBodyImg12.style.display = "none"
    technologyPageBodyImg22.style.display = "none"
    technologyPageBodyImg32.style.display = "none"
    technologyPageBodySelectionItem1.style.backgroundColor = "transparent"
    technologyPageBodySelectionItem2.style.backgroundColor = "transparent"
    technologyPageBodySelectionItem3.style.backgroundColor = "transparent"
    
    technologyPageBodySelectionItem1.style.color = "#D0D6F9"
    technologyPageBodySelectionItem2.style.color = "#D0D6F9"
    technologyPageBodySelectionItem3.style.color = "#D0D6F9"
}
technologyPageBodySelectionItem1.addEventListener("click", option1)
function option1(){
    unSelect();
    if(window.innerWidth > 1024){
        technologyPageBodyImg12.style.display = "block";
    }else{
        technologyPageBodyImg1.style.display = "block";
    }
    technologyPageBodySelectionItem1.style.backgroundColor = "#fff"
    technologyPageBodySelectionItem1.style.color = "#000"
    technologyName.innerHTML = "LAUNCH VEHICLE";
    technologyInfo.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
};
technologyPageBodySelectionItem2.addEventListener("click", option2)
function option2(){
    unSelect();
    if(window.innerWidth > 1024){
        technologyPageBodyImg22.style.display = "block";
    }else{
        technologyPageBodyImg2.style.display = "block";
    }
    technologyPageBodySelectionItem2.style.backgroundColor = "#fff"
    technologyPageBodySelectionItem2.style.color = "#000"
    technologyName.innerHTML = "SPACEPORT";
    technologyInfo.innerHTML = "Spaceport A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
};
technologyPageBodySelectionItem3.addEventListener("click", option3)
function option3(){
    unSelect();
    if(window.innerWidth > 1024){
        technologyPageBodyImg32.style.display = "block";
    }else{
        technologyPageBodyImg3.style.display = "block";
    }
    technologyPageBodySelectionItem3.style.backgroundColor = "#fff"
    technologyPageBodySelectionItem3.style.color = "#000"
    technologyName.innerHTML = "SPACE CAPSULE";
    technologyInfo.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
};
window.addEventListener("resize", ()=>{
        if(technologyName.innerHTML == "LAUNCH VEHICLE"){
            option1()
        }else if(technologyName.innerHTML == "SPACEPORT"){
            option2()
        }else{
            option3()
        }
});