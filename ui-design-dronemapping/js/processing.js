/*
var Start;
var Stop;
var Exp;
var timer;

function mouseDownStart() {

    if (Exp){
        Start = false; 
        document.getElementById("processing-start-button").style.backgroundColor = "#808080";
        console.log("start not possible");
    }
    else {
        Start = document.getElementById("processing-start-button").value = true;
        console.log("pressed start");
    }

   if (Start) { 
        Stop = false;
        Exp = false;
        document.getElementById("processing-start-button").style.backgroundColor = "#05FF00";
        document.getElementById("processing-stop-button").style.backgroundColor = "transparent";
        document.getElementById("processing-export-button").style.backgroundColor = "#808080";
   }

   if (!Stop && Exp || !Stop && !Exp){
        timerStart = setTimeout(function() {
            Exp = false;
            Start = false;
            Stop = false;

            document.getElementById("processing-start-button").style.backgroundColor = "transparent";
            document.getElementById("processing-stop-button").style.backgroundColor = "transparent";
            document.getElementById("processing-export-button").style.backgroundColor = "transparent";

            console.log(Start,Stop,Exp);
            console.log("done processing");

        } , 3000);
    }   

   console.log(Start, Stop,Exp);
   
}

function mouseDownStop() {
    Stop = document.getElementById("processing-stop-button").value = true;
    

    if (Stop) {
        Start = false;
        Exp = false;
        clearTimeout(timer);
        clearTimeout(timerStart);
        document.getElementById("processing-start-button").style.backgroundColor = "transparent";
        document.getElementById("processing-stop-button").style.backgroundColor = "#FF0000";
        document.getElementById("processing-export-button").style.backgroundColor = "transparent";
    }

    console.log(Start,Stop,Exp);
    console.log("pressed stop");
}

function mouseDownExport() {
    
    Exp = document.getElementById("processing-export-button").value = true;
    

    if (Exp) {

        if (Start){
            Exp = false;
            clearTimeout(timerStart);
            document.getElementById("processing-start-button").style.backgroundColor = "#05FF00";
            document.getElementById("processing-stop-button").style.backgroundColor = "transparent";
            document.getElementById("processing-export-button").style.backgroundColor = "#808080";
            console.log(Start,Stop,Exp);
            console.log("cannot press export");
        } else{
            Start = false;
            Stop = false;
            document.getElementById("processing-start-button").style.backgroundColor = "#808080";
            document.getElementById("processing-stop-button").style.backgroundColor = "transparent";
            document.getElementById("processing-export-button").style.backgroundColor = "#61B4C6";
            console.log(Start,Stop,Exp);
            console.log("pressed export");

        }

        
    }
    else{document.getElementById("processing-start-button").style.backgroundColor = "transparent";}

    if (!Stop && !Start){
        timer = setTimeout(function() {
            Exp = false;
            Start = false;
            Stop = false;

            document.getElementById("processing-start-button").style.backgroundColor = "transparent";
            document.getElementById("processing-stop-button").style.backgroundColor = "transparent";
            document.getElementById("processing-export-button").style.backgroundColor = "transparent";

            console.log(Start,Stop,Exp);
            console.log("done exporting");

        } , 3000);
    }
}

//$('processing-start-button').css('background-color', 'transparent');
*/