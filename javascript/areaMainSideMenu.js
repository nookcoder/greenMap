let mainSector = document.querySelector('.main_sector'); 

let assginmentSubSector = document.querySelector('.assignment_sub_sector');
let targetSubSector = document.querySelector('.target_sub_sector');
let publicSubSector = document.querySelector('.public_sub_sector');

let areaButton = document.querySelector('#areaButton');
let fuelButton = document.querySelector('#fuelButton');
let peopleButton = document.querySelector('#peopleButton');


let assignmentPeriodSector = document.querySelector('#area_period_sector');
let targetYearSector = document.querySelector('#fuel_sector');
let publicYearSector=document.querySelector('#people_sector'); 


areaButton.addEventListener('click',function(){
    assignmentPeriodSector.classList.toggle('showing');
});


fuelButton.addEventListener('click',function(){
    targetYearSector.classList.toggle('showing');
});


peopleButton.addEventListener('click',function(){
    publicYearSector.classList.toggle('showing');
});




// 클릭시, 화살표 방향 변경
const CURRENT_ARROW_DOWN = "fa-chevron-down";
const CURRENT_ARROW_RIGHT ="fa-chevron-right";


function arrowClassChange(e){
    let clickI = e.currentTarget;

    if (clickI.classList.contains(CURRENT_ARROW_RIGHT) ) {
        clickI.classList.remove(CURRENT_ARROW_RIGHT);
        clickI.classList.add(CURRENT_ARROW_DOWN);
    }
    else {
        clickI.classList.remove(CURRENT_ARROW_DOWN);
        clickI.classList.add(CURRENT_ARROW_RIGHT);
    } 
}

let iAll = document.querySelectorAll("i");
for(let iIndex = 0; iIndex < iAll.length ; iIndex++){
    iAll[iIndex].addEventListener('click', arrowClassChange)
}

console.log("a");