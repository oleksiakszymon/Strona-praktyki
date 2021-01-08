
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

var menu = document.querySelector('.nav-bar');

let darkMode = false;
let optionToggle = false;

function showHideMenu() {
    if(optionToggle==false){
        $('.nav-bar').css('height', '350px');
        optionToggle = true;
    }
    else{
        // setTimeout(function(){
            // }, 200);
            $('.nav-bar').css('height', '50px');
            optionToggle = false;
    }
}
menu.addEventListener('click', showHideMenu);

$('.nav-bar-option').click(function(event){
    $(event.target).css('font-size', '25px');
    $(event.target).css('color', '#74787E');
    setTimeout(function(){
        $(event.target).css('font-size', '20px');
        $(event.target).css('color', '#fff');
    },200);
});

$('#motyw').click(function(){
    if(!darkMode){
        $('body').css('background-image', 'url("img/repeated-square-dark.png")');
        $('body').css('color', '#E7E7E7');
        $('#icon').css('content', 'url("img/logo-dark.jpg")');
        $('.banner').css('background', 'black');
        $('.banner').css('border-bottom', '1px solid #272727');
        $('.banner').css('box-shadow', '0 4px 4px #0E0E0E');
        $('.bodysection').css('background', 'black');
        $('.otherlinks').css('color', '#E7E7E7');
        $('#name').css('color', '#E7E7E7');
        $('.menu').css('color', '#E7E7E7');
        $('.link').css('color', '#E7E7E7');
        $('.leftsection').css('background', 'linear-gradient(#2b2b2b, #1d1d1d, #2b2b2b)');
        $('.left-par').css('color', '#AAAAAA');
        darkMode=true;
    }
    else{
        $('body').css('background-image', 'url("img/repeated-square.png")');
        $('body').css('color', 'rgba(24, 24, 24, 0.753)');
        $('#icon').css('content', 'url("img/logo\.jpg")')
        $('.banner').css('background', 'white');
        $('.banner').css('border-bottom', '1px solid #D8D8D8');
        $('.banner').css('box-shadow', '0 4px 4px #F1F1F1');
        $('.bodysection').css('background', 'white');
        $('.otherlinks').css('color', '#E7E7E7');
        $('#name').css('color', 'black');
        $('.menu').css('color', 'black');
        $('.link').css('color', 'black');
        $('.leftsection').css('background', 'linear-gradient(#A2A2A2, #575757, #A2A2A2)');
        $('.left-par').css('color', '#111');
        darkMode=false;
    }
});

let isOpen = false;
let active;
let getLeftPanel = document.querySelector('.leftsection');
let getLeftPanelTitle = document.querySelector(".left-title");
let getLeftPanelParagraph = document.querySelector(".left-par");
let getClose = document.querySelector(".close");

function closeLeftPanel(){
    getLeftPanelParagraph.style.opacity = "0";
    getLeftPanelTitle.style.opacity = "0"; 
    getClose.style.opacity = "0";
    setTimeout(function(){getLeftPanel.style.width = "0";},500);
}

function openLeftPanel(){
    getLeftPanel.style.width = "160px";
    setTimeout(function(){
    getClose.style.opacity = "1";
    getLeftPanelParagraph.style.opacity = "1";
    getLeftPanelTitle.style.opacity = "1";},1000);
}

$('#aboutUs').click(function(){
    if(active!='aboutUs'){
        if(isOpen==true){
            closeLeftPanel(); 
        }
        setTimeout(function(){
            getLeftPanelTitle.innerHTML = "O nas";
            getLeftPanelParagraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi augue, molestie eu magna eget, tristique volutpat nisi. Nunc viverra, urna nec finibus blandit, nisi ipsum elementum nulla, at ullamcorper magna nibh a lacus. Aliquam finibus sapien nec sollicitudin pellentesque. Aenean dapibus lectus eget quam semper, quis iaculis ipsum ornare. Nunc consectetur dui at nibh feugiat placerat. Pellentesque in posuere enim.";
        }, 500);
        if(isOpen){
            setTimeout(function(){openLeftPanel();},1500);
        } else{
            openLeftPanel();
        }
        active = 'aboutUs';
        isOpen = true;
    }
});

$('#faq').click(function(){
    if(active!='faq'){
        if(isOpen==true){
            closeLeftPanel(); 
        }
        setTimeout(function(){
            getLeftPanelTitle.innerHTML = "FAQ";            
            getLeftPanelParagraph.innerHTML = "<strong>Lorem ipsum dolor sit amet?</strong><br> consectetur adipiscing elit. Integer mi augue. <strong>Molestie eu magna eget?</strong><br> Tristique volutpat nisi. Nunc viverra, urna nec finibus blandit.<br> <strong>Nisi ipsum elementum nulla?</strong><br> At ullamcorper magna nibh a lacus. Aliquam finibus sapien nec sollicitudin pellentesque. Aenean dapibus lectus eget quam semper, quis iaculis ipsum ornare. Nunc consectetur dui at nibh feugiat placerat. Pellentesque in posuere enim.";
        }, 500);
        if(isOpen){
            setTimeout(function(){openLeftPanel();},1500);
        } else{
            openLeftPanel();
        }
        active = 'faq';
        isOpen = true;
    }
});

$('#contact').click(function(){
    if(active!='contact'){
        if(isOpen==true){
            closeLeftPanel(); 
        }
        setTimeout(function(){
            getLeftPanelTitle.innerHTML = "Contact";
            getLeftPanelParagraph.innerHTML = "<strong>Adres:</strong> Łódź, Piotrkowska 123/43<br><strong>email:</strong> oleksiak@szymon.pl<br> <strong>Tel:</strong> 231321312";
        }, 500);
        if(isOpen){
            setTimeout(function(){openLeftPanel();},1500);
        } else{
            openLeftPanel();
        }
        active = 'contact';
        isOpen = true;
    }
});

$('.close').click(function(){
    closeLeftPanel();
    active = '';
    isOpen = false;
});

let parOneVis = false;

$('.paragraph-bar').click(function(){
    if(!parOneVis){
        $('.paragraph').css('height', '170px');
        parOneVis = true;
    } else {
        $('.paragraph').css('height', '0');
        parOneVis = false;
    }
});

// $('.paragraph-bar').click(function(event){
    
//     if (!parOneVis){
//         $(event.target).closest('div > .paragraph').css('height', '170px');
//     } else {
//         $(event.target).closest('div > .paragraph').css('height', '0');
//     }
// });