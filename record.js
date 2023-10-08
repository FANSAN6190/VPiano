var music=['.'];
var rec=false;

function note_label(id){
    return (document.getElementById(id).querySelector("h4").innerHTML);
}
var i=1;
function record(){
    startStopwatch();
    rec=true;
    var recording = setInterval(() => {
        if(rec==false){
            clearInterval(recording);
            savedata();
        }
        music.push('.');

        onkeydown=(event)=>{
            if(event.repeat){
                music.push('_')
                return;
            }
            music.push(note_label(event.key));
        }
        console.log(music);
        
    }, 200);
}

function savedata() {
    var filename=prompt("Enter filename : ")
    var blob = new Blob([music.join(" ")],
        { type: "application/octet-stream;charset=utf-8" });
    saveAs(blob, filename);
    resetStopwatch();
}
