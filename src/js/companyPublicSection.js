const PUBLIC_JSON = require('../data/공공부문/2019.json');
const CONSTANT = require('../js/companyConstants.js');
let radioBox = document.querySelectorAll('.public_sector');

$('#public_okButton').on('click',function(){
    
    let value = $('input[name="public_sector_agency"]:checked').val();
    for(let index=0;index<PUBLIC_JSON.length;index++)
    {
        if(value == PUBLIC_JSON[index].기관구분)
        {
            if(PUBLIC_JSON[index].온실가스감축량 >= 0){
                var $tag ="";
                $tag = $tag + CONSTANT.createPulicSectionContentBlue(PUBLIC_JSON[index].기관명,PUBLIC_JSON[index].기준배출량,PUBLIC_JSON[index].온실가스감축량,PUBLIC_JSON[index].온실가스감축량,PUBLIC_JSON[index].온실가스감축률);
                $('#public_section').append($tag);
                console.log($tag);
            }
            else{
                var $tag = CONSTANT.createPulicSectionContentRed(PUBLIC_JSON[index].기관명,PUBLIC_JSON[index].기준배출량,PUBLIC_JSON[index].온실가스배출량,PUBLIC_JSON[index].온실가스감축량,PUBLIC_JSON[index].온실가스감축률);
                $('#public_section').append($tag);
            }
        }
    }

    $('#map').hide();
    $('#public_section').show();

});

function addPublicInfo(value){

    for(let index=0;index<PUBLIC_JSON.length;index++)
    {
        if(value == PUBLIC_JSON[index].기관구분)
        {
            if(PUBLIC_JSON[index].온실가스감축량 >= 0){
                var $tag ="";
                $tag = $tag + CONSTANT.createPulicSectionContentBlue(PUBLIC_JSON[index].기관명,PUBLIC_JSON[index].기준배출량,PUBLIC_JSON[index].온실가스배출량,PUBLIC_JSON[index].온실가스감축량,PUBLIC_JSON[index].온실가스감축률);
                $('#public_section').append($tag);
                console.log($tag);
            }
            else{
                var $tag = CONSTANT.createPulicSectionContentRed(PUBLIC_JSON[index].기관명,PUBLIC_JSON[index].기준배출량,PUBLIC_JSON[index].온실가스배출량,PUBLIC_JSON[index].온실가스감축량,PUBLIC_JSON[index].온실가스감축률);
                $('#public_section').append($tag);
            }
        }
    }
}

function createPublicInfo(json){
    if(json.온실가스감축량 >= 0){
        inFoTag = CONSTANT.createPulicSectionContentBlue(json.기관명,json.기준배출량,json.온실가스배출량,온실가스감축량,json.온실가스감축률);
        return; 
    }
    inFoTag = CONSTANT.createPulicSectionContentRed(json.기관명,json.기준배출량,json.온실가스배출량,json.온실가스감축량,json.온실가스감축률);
}