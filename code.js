
var slideNumber = 1;

function hideSlide(){
    $("#slide").fadeOut(2500);
}

function slideChange()
{
    slideNumber++;
    if(slideNumber>4) slideNumber=1;
    document.getElementById("slider").innerHTML="<img id=\"slide\" src=\"img/s"+slideNumber+".jpg\" />";
    $("#slide").fadeIn(2500);

    setTimeout("slideChange()", 5000);
    setTimeout("hideSlide()", 2500);
   
   
}
window.onload = slideChange;
