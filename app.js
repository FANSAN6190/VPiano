var i;

for(i=0;i<document.querySelectorAll(".keys").length;i++){
    let key=document.querySelectorAll(".keys")[i];
    key.querySelector("h4").innerHTML=key.id;
}
for(i=0;i<document.querySelectorAll(".keys").length;i++){
    document.querySelectorAll(".keys")[i].addEventListener("click",function(){
        //console.log("click : "+this.id);
        makeSound(this.id); 
    });

    document.addEventListener("keydown",(event)=>{
        onkeydown = (event) => {
            if(event.repeat) return;
            //console.log("Keybordpress : "+event.key);
            var eventKey=event.key;
            makeSound(eventKey);
        };  
    });
}

function makeSound(inp){
    buttonAnimation(inp);
    console.log("pressed key :" + inp)
    audio_path="assets/audio/keys/"
    switch(inp){                                                                                                   
            
            case "e":
                var C4=new Audio(audio_path+"Key_C4.mp3");
                C4.play();
                break;
            case "4":
                var Db4=new Audio(audio_path+"Key_Db4.mp3");
                Db4.play();
                break;
            case "r":
                var D4=new Audio(audio_path+"Key_D4.mp3"); 
                D4.play();
                break;
            case "5":
                var Eb4=new Audio(audio_path+"Key_Eb4.mp3");
                tom4.play();
                break;
            case "t":
                var E4=new Audio(audio_path+"Key_E4.mp3");
                E4.play();
                break;
            case "y":
                var kick=new Audio(audio_path+"Key_F4.mp3");
                kick.play();
                break;
            case "7":
                var snare=new Audio(audio_path+"Key_Gb4.mp3");
                snare.play();
                break;
            case "u":
                var tom4=new Audio(audio_path+"Key_G4.mp3");
                tom4.play();
                break;
            case "8":
                var crash=new Audio(audio_path+"Key_Ab4.mp3");
                crash.play();
                break;
            case "i":
                var kick=new Audio(audio_path+"Key_A4.mp3");
                kick.play();
                break;
            case "9":
                var snare=new Audio(audio_path+"Key_Bb4.mp3");
                snare.play();
                break;
            
            case "o":
                var tom4=new Audio(audio_path+"Key_B4.mp3");
                tom4.play();
                break;
            case "p":
                var crash=new Audio(audio_path+"Key_C5.mp3");
                crash.play();
                break;
            case "-":
                var kick=new Audio(audio_path+"Key_Db5.mp3");
                kick.play();
                break;
            case "[":
                var snare=new Audio(audio_path+"Key_D5.mp3");
                snare.play();
                break;
            case "=":
                var tom4=new Audio(audio_path+"Key_Eb5.mp3");
                tom4.play();
                break;
            case "]":
                var crash=new Audio(audio_path+"Key_E5.mp3");
                crash.play();
                break;
            default:
            console.log("Unknown"+inp);
            break;
        };
}


function buttonAnimation(currentKey){
    var activeButton=document.getElementById(currentKey);
    activeButton.classList.add("pressed");
   
    onkeyup=(event)=>{
        activeButton.classList.remove("pressed");
    }
    
}   