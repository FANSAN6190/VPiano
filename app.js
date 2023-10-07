var i;

for(i=0;i<document.querySelectorAll(".keys").length;i++){

    document.querySelectorAll(".keys")[i].addEventListener("click",function(){
        console.log("click : "+this.querySelector("h4").innerHTML);
        var spanInnerHTML=this.querySelector("h4").innerHTML;
        makeSound(spanInnerHTML);
        
    });
    
    //document.addEventListener("keydown",(event)=>{
    //    onkeydown = (event) => {
     //       console.log("Keybordpress : "+event.key);
    //        var eventKey=event.key;
    //        makeSound(eventKey); 
    //    };
    //    document.removeEventListener('keydown',onkeydown);
    //});
    onkeydown = (event) => {
        console.log("Keybordpress : "+event.key);
        var eventKey=event.key;
        makeSound(eventKey); 
        if(event.repeat) return;
    };
}

function makeSound(inp){
    //buttonAnimation(inp);
   switch(inp){                                                                                                   
            case "e":
                var tom1=new Audio("assets/audio/keys/Key_C4.mp3");
                tom1.play();
                break;
            case "4":
                var tom2=new Audio("assets/audio/keys/Key_a1.mp3");
                tom2.play();
                break;
            case "r":
                var tom3=new Audio("assets/audio/keys/Key_D4.mp3"); 
                tom3.play();
                break;
            case "5":
                var tom4=new Audio("assets/audio/keys/Key_a1.mp3");
                tom4.play();
                break;
            case "t":
                var crash=new Audio("assets/audio/keys/Key_E4.mp3");
                crash.play();
                break;
            case "y":
                var kick=new Audio("assets/audio/keys/Key_F4.mp3");
                kick.play();
                break;
            case "7":
                var snare=new Audio("assets/audio/keys/Key_a1.mp3");
                snare.play();
                break;
            case "u":
                var tom4=new Audio("assets/audio/keys/Key_G4.mp3");
                tom4.play();
                break;
            case "8":
                var crash=new Audio("assets/audio/keys/Key_a1.mp3");
                crash.play();
                break;
            case "i":
                var kick=new Audio("assets/audio/keys/Key_A4.mp3");
                kick.play();
                break;
            case "9":
                var snare=new Audio("assets/audio/keys/Key_a1.mp3");
                snare.play();
                break;
            
            case "o":
                var tom4=new Audio("assets/audio/keys/Key_B4.mp3");
                tom4.play();
                break;
            case "p":
                var crash=new Audio("assets/audio/keys/Key_C5.mp3");
                crash.play();
                break;
            case "-":
                var kick=new Audio("assets/audio/keys/Key_a1.mp3");
                kick.play();
                break;
            case "[":
                var snare=new Audio("assets/audio/keys/Key_D5.mp3");
                snare.play();
                break;
            case "=":
                var tom4=new Audio("assets/audio/keys/Key_a1.mp3");
                tom4.play();
                break;
            case "]":
                var crash=new Audio("assets/audio/keys/Key_E5.mp3");
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