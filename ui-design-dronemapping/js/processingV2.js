var Start;
var Stop;
var Exp;
var TimerExp;
var TimerStart;

var Red = '#FF0000'; //🔴
var Blue = '#61B4C6'; //🔵
var Grey = '#808080'; //⚫
var Green = '#05FF00'; //🟢
var Trans = 'transparent'; //⚪

function mouseDownStart(){

    if (Exp) {
        Start = false;

        colorButtons(Grey, Trans, Blue);
        console.log("cannot start beceause exporting");
    }
    else if(Stop){
        Start = true;
        Exp = false;
        Stop = false;

        colorButtons(Green, Trans, Grey);
        console.log("start program after stopping");

        TimerExp = setTimeout(function() {
            Exp = false;
            Start = false;
            Stop = false;

            colorButtons(Trans, Trans, Trans);
            console.log("done exporting/timer start ended");

        } , 3000);

    }
    else {
        Start = true;

        colorButtons(Green, Trans, Grey);
        console.log("Programm started")

        TimerStart = setTimeout(function() {
            Exp = false;
            Start = false;
            Stop = false;

            colorButtons(Trans, Trans, Trans);
            console.log("done exporting/timer start ended");

        } , 3000);
    }

}

function mouseDownStop(){
    Start = false;
    Exp = false;
    Stop = true;

    colorButtons(Trans, Red, Trans);
    clearTimeout(TimerExp);
    clearTimeout(TimerStart);
    
    console.log("Timer stoped/exporting stoped/program stoped");
}

function mouseDownExport(){

    if (Stop){
        Exp = true;
        Stop = false;
        Start = false;

        colorButtons(Grey, Trans, Blue);
        console.log("Start exporting after stopping")

        TimerExp = setTimeout(function() {
            Exp = false;
            Start = false;
            Stop = false;

            colorButtons(Trans, Trans, Trans);
            console.log("done exporting/timer start ended");

        } , 3000);
    }
    else if (Start){
        Exp = false;
        Stop = false;

        colorButtons(Green, Trans, Grey);
        console.log("cannot start while exporting");
    }
    else{
        Exp = true;
        Stop = false;
        Start = false;

        colorButtons(Grey, Trans, Blue);
        console.log("start exporting");

        TimerExp = setTimeout(function() {
            Exp = false;
            Start = false;
            Stop = false;

            colorButtons(Trans, Trans, Trans);
            console.log("done exporting/timer start ended");

        } , 3000);
    }

}

function colorButtons(startColor, stopColor, exportColor) {
    $('#processing-start-button').css('background-color', startColor);
    $('#processing-stop-button').css('background-color', stopColor);
    $('#processing-export-button').css('background-color', exportColor);    
}