const PUBLIC_JSON = require('../data/공공부문/2019.json');
const CONSTANT = require('../js/companyConstants.js');
let radioBox = document.querySelectorAll('.public_sector');

$('#public_okButton').on('click',function(){
    $('#map').hide();
    $('#public_section').show();

    let checedValue = [] ;
    $(".public_sector").each(function(){
        if($(".public_sector").is(':checked'))
        {
            checedValue.push($(this).val());
        }
    });
    console.log(checedValue);
    console.log("조건문 오류");
})

function addPublicInfo(value){
    let tag;
    for(let index=0;index<<PUBLIC_JSON.length;index++)
    {
        if(value == PUBLIC_JSON[index].기관구분)
        {
            if(json.온실가스감축량 >= 0){
                tag = CONSTANT.createPulicSectionContentBlue(PUBLIC_JSON[index].기관명,PUBLIC_JSON[index].기준배출량,PUBLIC_JSON[index].온실가스감축량,PUBLIC_JSON[index].온실가스감축률);
                $('.public_sector').append(tag);
                return; 
            }
            inFoTag = CONSTANT.createPulicSectionContentRed(json.기관명,json.기준배출량,json.온실가스배출량,json.온실가스감축률);
            $('.public_sector').append(tag);
        }
    }
}

function createPublicInfo(json){
    if(json.온실가스감축량 >= 0){
        inFoTag = CONSTANT.createPulicSectionContentBlue(json.기관명,json.기준배출량,json.온실가스배출량,json.온실가스감축률);
        return; 
    }
    inFoTag = CONSTANT.createPulicSectionContentRed(json.기관명,json.기준배출량,json.온실가스배출량,json.온실가스감축률);
}