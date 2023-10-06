var i;
for(i=0;i<document.querySelectorAll(".keys").length;i++){
    document.querySelectorAll(".keys")[i].addEventListener("click",function(){
        console.log("click : "+this.innerHTML);
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
    });
    document.addEventListener("keydown",function(event){
        console.log("Keybordpress : "+event.key);
        var eventKey=event.key;
        makeSound(eventKey);
    });
}

function makeSound(inp){
    buttonAnimation(inp);
    switch(inp){                                                                                                   
        case "e":
            var tom1=new Audio("assets/audio/25405__tedagame__88-piano-keys-long-reverb/448532__tedagame__c5.ogg");
            tom1.play();
            break;
        case "4":
            var tom2=new Audio("assets/audio/25405__tedagame__88-piano-keys-long-reverb/448532__tedagame__c5.ogg");
            tom2.play();
            break;
        case "r":
            var tom3=new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;
        case "5":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "t":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "y":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "7":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "u":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "8":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "i":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "9":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "o":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "p":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "-":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "[":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "=":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "]":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
        console.log("Unknown"+buttonInnerHTML);
        break;
    };
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200)
}   