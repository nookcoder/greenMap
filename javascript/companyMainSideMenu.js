let mainSector = document.querySelector('.main_sector'); 

let assginmentSubSector = document.querySelector('.assignment_sub_sector');
let targetSubSector = document.querySelector('.target_sub_sector');
let publicSubSector = document.querySelector('.public_sub_sector');

let assignmentButton = document.querySelector('#assignment_button');
let targetButton = document.querySelector('#target_button');
let publicButton = document.querySelector('#public_button');

let assignmentPeriodSector = document.querySelector('#assignment_period_sector');
let assginmentDesignatedYear = document.querySelector('#assignment_designating_year')
let assginmentDesignatedSector = document.querySelector('#assignment_designating_sector');

let assignmentPeroidButton = document.querySelector('#assignment_period');
let assignmentYearButton = document.querySelector('#assignment_year');
let assignmentSectorButton = document.querySelector('#assignment_sector');

let targetYearButton = document.querySelector('#target_period'); 
let targetAdministratorButton = document.querySelector('#target_administrator');

let targetYearSector = document.querySelector('#target_period_sector');
let targetAdministratorSector = document.querySelector('#target_administrator_sector');

let publicYearButton = document.querySelector('#public_year');
let publicAgencyButton = document.querySelector('#public_agency'); 

let publicYearSector=document.querySelector('#public_year_sector'); 
let publicAgencySector=document.querySelector('#public_agency_sector');


assignmentButton.addEventListener('click', function(){
    assginmentSubSector.classList.toggle('showing');
});

targetButton.addEventListener('click',function(){
    targetSubSector.classList.toggle('showing');
});

publicButton.addEventListener('click',function(){
    publicSubSector.classList.toggle('showing');
});

assignmentPeroidButton.addEventListener('click',function(){
    assignmentPeriodSector.classList.toggle('showing');
});

assignmentYearButton.addEventListener('click',function(){
    assginmentDesignatedYear.classList.toggle('showing');
});

assignmentSectorButton.addEventListener('click',function(){
    assginmentDesignatedSector.classList.toggle('showing');
});

targetYearButton.addEventListener('click',function(){
    targetYearSector.classList.toggle('showing');
});

targetAdministratorButton.addEventListener('click',function(){
    targetAdministratorSector.classList.toggle('showing');
});

publicYearButton.addEventListener('click',function(){
    publicYearSector.classList.toggle('showing');
});

publicAgencyButton.addEventListener('click',function(){
    publicAgencySector.classList.toggle('showing');
});


