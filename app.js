var i;

for(i=0;i<document.querySelectorAll(".keys").length;i++){
    let key=document.querySelectorAll(".keys")[i];
    //key.querySelector("h4").innerHTML=key.id;
}
for(i=0;i<document.querySelectorAll(".keys").length;i++){
    document.querySelectorAll(".keys")[i].addEventListener("click",function(){
        //console.log("click : "+this.id);
        let inp_type=0;
        makeSound(this.id,inp_type); 
        note_label(this.id)
    });

    document.addEventListener("keydown",(event)=>{
        document.onkeydown = (event) => {
            let inp_type=1;
            if(event.repeat) return;
            //console.log("Keybordpress : "+event.key);
            var eventKey=event.key;
            makeSound(eventKey,inp_type);
            if(event.repeat){
                activeButton.classList.remove("pressed");
            }
        };  
    });
}
function note_label(id){
    return (document.getElementById(id).querySelector("h4").innerHTML);
}

function makeSound(inp,inp_type){
    buttonAnimation(inp,inp_type);
    console.log("pressed key :" + inp)
    audio_path="assets/audio/keys/"
    switch(inp){                                                                                                   
            case "z":
                var C4=new Audio(audio_path+"Key_C3.mp3");
                C4.play();
                break;
            case "s":
                var Db4=new Audio(audio_path+"Key_Db3.mp3");
                Db4.play();
                break;
            case "x":
                var D4=new Audio(audio_path+"Key_D3.mp3"); 
                D4.play();
                break;
            case "d":
                var Eb4=new Audio(audio_path+"Key_Eb3.mp3");
                Eb4.play();
                break;
            case "c":
                var E4=new Audio(audio_path+"Key_E3.mp3");
                E4.play();
                break;
            case "v":
                var kick=new Audio(audio_path+"Key_F3.mp3");
                kick.play();
                break;
            case "g":
                var snare=new Audio(audio_path+"Key_Gb3.mp3");
                snare.play();
                break;
            case "b":
                var tom4=new Audio(audio_path+"Key_G3.mp3");
                tom4.play();
                break;
            case "h":
                var crash=new Audio(audio_path+"Key_Ab3.mp3");
                crash.play();
                break;
            case "n":
                var kick=new Audio(audio_path+"Key_A3.mp3");
                kick.play();
                break;
            case "j":
                var snare=new Audio(audio_path+"Key_Bb3.mp3");
                snare.play();
                break;
            
            case "m":
                var tom4=new Audio(audio_path+"Key_B3.mp3");
                tom4.play();
                break;



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
                Eb4.play();
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


            
            case "\\":
                var crash=new Audio(audio_path+"Key_F5.mp3");
                crash.play();
                break;
            case "k":
                var kick=new Audio(audio_path+"Key_Gb5.mp3");
                kick.play();
                break;
            case ",":
                var snare=new Audio(audio_path+"Key_G5.mp3");
                snare.play();
                break;
            case "l":
                var tom4=new Audio(audio_path+"Key_Ab5.mp3");
                tom4.play();
                break;
            case ".":
                var crash=new Audio(audio_path+"Key_A5.mp3");
                crash.play();
                break;


            case ";":
                var crash=new Audio(audio_path+"Key_Bb5.mp3");
                crash.play();
                break;
            case "/":
                var kick=new Audio(audio_path+"Key_B5.mp3");
                kick.play();
                break;
            case "'":
                var snare=new Audio(audio_path+"Key_C6.mp3");
                snare.play();
                break;
            
            default:
            console.log("Unknown"+inp);
            break;
        };
}


function buttonAnimation(currentKey,inp_type){
    var activeButton=document.getElementById(currentKey);
    activeButton.classList.add("pressed");
    if(inp_type==0){
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },150)
    }
    document.onkeyup=(event)=>{
        activeButton.classList.remove("pressed");
    }
    keysCheckbox = document.querySelector(".keys-checkbox input");
    const showHideKeys = () => {
        pianoKeys.forEach(key => key.classList.toggle("hide"));
    }
    keysCheckbox.addEventListener("click", showHideKeys);
}   