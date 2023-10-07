var i;

for(i=0;i<document.querySelectorAll(".keys").length;i++){

    document.querySelectorAll(".keys")[i].addEventListener("click",function(){
        console.log("click : "+this.querySelector("h4").innerHTML);
        var spanInnerHTML=this.querySelector("h4").innerHTML;
        makeSound(spanInnerHTML);
        
    });
    
    document.addEventListener("keydown",(event)=>{
        onkeydown = (event) => {
            console.log("Keybordpress : "+event.key);
            var eventKey=event.key;
            makeSound(eventKey); 
        };

    });
}

function makeSound(inp){
    //buttonAnimation(inp);
   switch(inp){                                                                                                   
            case "e":
                var tom1=new Audio("assets/audio/keys/Key_c4.ogg");
                tom1.play();
                break;
            case "4":
                var tom2=new Audio("assets/audio/keys/Key_a1.ogg");
                tom2.play();
                break;
            case "r":
                var tom3=new Audio("assets/audio/keys/Key_d4.ogg"); 
                tom3.play();
                break;
            case "5":
                var tom4=new Audio("assets/audio/keys/Key_a1.ogg");
                tom4.play();
                break;
            case "t":
                var crash=new Audio("assets/audio/keys/Key_e4.ogg");
                crash.play();
                break;
            case "y":
                var kick=new Audio("assets/audio/keys/Key_f4.ogg");
                kick.play();
                break;
            case "7":
                var snare=new Audio("assets/audio/keys/Key_a1.ogg");
                snare.play();
                break;
            case "u":
                var tom4=new Audio("assets/audio/keys/Key_g4.ogg");
                tom4.play();
                break;
            case "8":
                var crash=new Audio("assets/audio/keys/Key_a1.ogg");
                crash.play();
                break;
            case "i":
                var kick=new Audio("assets/audio/keys/Key_a4.ogg");
                kick.play();
                break;
            case "9":
                var snare=new Audio("assets/audio/keys/Key_a1.ogg");
                snare.play();
                break;
            
            case "o":
                var tom4=new Audio("assets/audio/keys/Key_b4.ogg");
                tom4.play();
                break;
            case "p":
                var crash=new Audio("assets/audio/keys/Key_c5.ogg");
                crash.play();
                break;
            case "-":
                var kick=new Audio("assets/audio/keys/Key_a1.ogg");
                kick.play();
                break;
            case "[":
                var snare=new Audio("assets/audio/keys/Key_d5.ogg");
                snare.play();
                break;
            case "=":
                var tom4=new Audio("assets/audio/keys/Key_a1.ogg");
                tom4.play();
                break;
            case "]":
                var crash=new Audio("assets/audio/keys/Key_e5.ogg");
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