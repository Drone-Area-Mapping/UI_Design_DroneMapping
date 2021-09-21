var Start;
var Stop;
var Exp;

function mouseDownStart() {
   Start = document.getElementById("processing-start-button").value = true;

   if (Start == true){
        Stop = false;
        Exp = false;
        document.getElementById("processing-start-button").style.backgroundColor = "#05FF00";
        document.getElementById("processing-stop-button").style.backgroundColor = "transparent";
        document.getElementById("processing-export-button").style.backgroundColor = "transparent";
   }

   console.log(Start,Stop,Exp);
   console.log("pressed start");
}

function mouseDownStop() {
    Stop = document.getElementById("processing-stop-button").value = true;
    

    if (Stop == true) {
        Start = false;
        Exp = false;
        document.getElementById("processing-start-button").style.backgroundColor = "transparent";
        document.getElementById("processing-stop-button").style.backgroundColor = "#FF0000";
        document.getElementById("processing-export-button").style.backgroundColor = "transparent";
    }

    console.log(Start,Stop,Exp);
    console.log("pressed stop");

}

function mouseDownExport() {
    Exp = document.getElementById("processing-export-button").value = true;
    console.log(Exp);
}