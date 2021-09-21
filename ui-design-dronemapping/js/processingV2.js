var Start;
var Stop;
var Exp;
var TimerExp;
var TimerStart;

function mouseDownStart(){

    if (Exp){
        Start = false;
        console.log("cannot start beceause exporting")
    }
    else if(Stop){
        Start = false;
        Exp = false;
        console.log("start program after stopping")
    }
    else {
        Start = true;
        console.log("Programm started")
    }

}

function mouseDownStop(){
    Start = false;
    Exp = false;
    Stop = true;
    console.log("programm stoped")
}

function mouseDownExport(){

    if (Stop){
        Exp = true;
        Stop = false;
        Start = false;
        console.log("Start exporting after stopping")
    }
    else if (Start){
        Exp = false;
        Stop = false;
        console.log("cannot start while exporting");
    }
    else{
        Exp = true;
        Stop = false;
        Start = false;
        console.log("start exporting");
    }

}