/*Sounds for 1*/
var sound1 = new Array();
sound1[0] = "../GAME/assets/audio/ball-1.mp3";
sound1[1] = "../GAME/assets/audio/ball-2.mp3";
sound1[2] = "../GAME/assets/audio/ball-3.mp3";
sound1[3] = "../GAME/assets/audio/ball-4.mp3";
sound1[4] = "../GAME/assets/audio/ball-5.mp3";
sound1[5] = "../GAME/assets/audio/Cymbal.mp3";
function getSound1() {
    var randomNum = Math.floor(Math.random() * sound1.length);
    document.getElementById("myaudio").src = sound1[randomNum];
}
/*Sounds for 2*/
var sound2 = new Array();
sound2[0] = "../GAME/assets/audio/ball-1.mp3";
sound2[1] = "../GAME/assets/audio/ball-2.mp3";
sound2[2] = "../GAME/assets/audio/ball-3.mp3";
sound2[3] = "../GAME/assets/audio/ball-4.mp3";
sound2[4] = "../GAME/assets/audio/ball-5.mp3";
sound2[5] = "../GAME/assets/audio/Cymbal.mp3";
function getSound2() {
    var randomNum = Math.floor(Math.random() * sound2.length);
    document.getElementById("myaudio").src = sound2[randomNum];
}
/*Sounds for 3*/
var sound3 = new Array();
sound3[0] = "../GAME/assets/audio/ball-1.mp3";
sound3[1] = "../GAME/assets/audio/ball-2.mp3";
sound3[2] = "../GAME/assets/audio/ball-3.mp3";
sound3[3] = "../GAME/assets/audio/ball-4.mp3";
sound3[4] = "../GAME/assets/audio/ball-5.mp3";
sound3[5] = "../GAME/assets/audio/Cymbal.mp3";
function getSound3() {
    var randomNum = Math.floor(Math.random() * sound3.length);
    document.getElementById("myaudio").src = sound3[randomNum];
}
/*Sounds for 4*/
var sound4 = new Array();
sound4[0] = "../GAME/assets/audio/ball-1.mp3";
sound4[1] = "../GAME/assets/audio/ball-2.mp3";
sound4[2] = "../GAME/assets/audio/ball-3.mp3";
sound4[3] = "../GAME/assets/audio/ball-4.mp3";
sound4[4] = "../GAME/assets/audio/ball-5.mp3";
sound4[5] = "../GAME/assets/audio/Cymbal.mp3";
function getSound4() {
    var randomNum = Math.floor(Math.random() * sound4.length);
    document.getElementById("myaudio").src = sound4[randomNum];
}
/*Sounds for 5*/
var sound5 = new Array();
sound5[0] = "../GAME/assets/audio/ball-1.mp3";
sound5[1] = "../GAME/assets/audio/ball-2.mp3";
sound5[2] = "../GAME/assets/audio/ball-3.mp3";
sound5[3] = "../GAME/assets/audio/ball-4.mp3";
sound5[4] = "../GAME/assets/audio/ball-5.mp3";
sound5[5] = "../GAME/assets/audio/Cymbal.mp3";
function getSound5() {
    var randomNum = Math.floor(Math.random() * sound5.length);
    document.getElementById("myaudio").src = sound5[randomNum];
}
/*Sounds for 6*/
var sound6 = new Array();
sound6[0] = "../GAME/assets/audio/ball-1.mp3";
sound6[1] = "../GAME/assets/audio/ball-2.mp3";
sound6[2] = "../GAME/assets/audio/ball-3.mp3";
sound6[3] = "../GAME/assets/audio/ball-4.mp3";
sound6[4] = "../GAME/assets/audio/ball-5.mp3";
sound6[5] = "../GAME/assets/audio/Cymbal.mp3";
function getSound6() {
    var randomNum = Math.floor(Math.random() * sound6.length);
    document.getElementById("myaudio").src = sound6[randomNum];
}
/*Sounds for out*/
// var soundout = new Array();
// soundout[0] = "../GAME/assets/audio/check .mp3";
// soundout[1] = "../GAME/assets/audio/check1.mp3";
// soundout[2] = "../GAME/assets/audio/Cymbal.mp3";
// function getsoundout() {
//     var randomNum = Math.floor(Math.random() * soundout.length);
//     document.getElementById("myaudio").src = soundout[randomNum];
// }
/*js logic for score and check */
var total = 0;

function one() {

    uchoice = 1;
    var cchoice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoice").innerHTML = uchoice;
    document.getElementById("computerchoice").innerHTML = cchoice;

    if (cchoice === 1) {
        total = total;
        //getsoundout();
        alert("OUT !!! And thats the end of a wonderful innings...! well played")
        window.location.href = "../pchase.html";
        localStorage.setItem("target", total);
    }
    else {
        var c = "Nice try by the bowler...";
        document.getElementById("comments").innerHTML = c;
        
        var s = cchoice;
        total += s;
        document.getElementById("scoretotal").innerHTML = total;
        getSound1();

    }
}


function two() {

    uchoice = 2;
    var cchoice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoice").innerHTML = uchoice;
    document.getElementById("computerchoice").innerHTML = cchoice;


    if (cchoice === 2) {
        total = total;
        //getsoundout();
        alert("OUT !!! And thats the ending of a wonderful innings...! well played")
        window.location.href = "../pchase.html";
        localStorage.setItem("target", total);
    }
    else {
        var c = "Nice try by the bowler...";
        document.getElementById("comments").innerHTML = c;
       
        var s = cchoice;
        total += s;
        document.getElementById("scoretotal").innerHTML = total;
        getSound2();
    }
}



function three() {
    uchoice = 3;
    var cchoice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoice").innerHTML = uchoice;
    document.getElementById("computerchoice").innerHTML = cchoice;

    if (cchoice === 3) {
        total = total;
        //getsoundout();
        alert("OUT !!! And thats the ending of a wonderful innings...! well played")
        window.location.href = "../pchase.html";
        localStorage.setItem("target", total);

    }
    else {
        var c = "The bowler doesnt seems to giveup...";
        document.getElementById("comments").innerHTML = c;
        
        var s = cchoice;
        total += s;
        document.getElementById("scoretotal").innerHTML = total;
        getSound3();
    }
}
function four() {
    uchoice = 4;
    var cchoice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoice").innerHTML = uchoice;
    document.getElementById("computerchoice").innerHTML = cchoice;

    if (cchoice === 4) {
        total = total;
        //getsoundout();
        alert("OUT !!! And thats the ending of a wonderful innings...! well played")
        window.location.href = "../pchase.html";
        localStorage.setItem("target", total);
    }
    else {
        var c = "The bowler doesnt seems to giveup...";
        document.getElementById("comments").innerHTML = c;
        
        var s = cchoice;
        total += s;
        document.getElementById("scoretotal").innerHTML = total;
        getSound4();
    }
}
function five() {
    uchoice = 5;
    var cchoice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoice").innerHTML = uchoice;
    document.getElementById("computerchoice").innerHTML = cchoice;

    if (cchoice === 5) {
        total = total;
        //getsoundout();
        alert("OUT !!! And thats the ending of a wonderful innings...! well played")
        window.location.href = "../pchase.html";
        localStorage.setItem("target", total);
    }
    else {
        var c = "The bowler is trying his best...";
        document.getElementById("comments").innerHTML = c;
        
        var s = cchoice;
        total += s;
        document.getElementById("scoretotal").innerHTML = total;
        getSound5();
    }
}
function six() {
    uchoice = 6;
    var cchoice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoice").innerHTML = uchoice;
    document.getElementById("computerchoice").innerHTML = cchoice;

    if (cchoice === 6) {
        total = total;
        //getsoundout();
        alert("OUT !!! And thats the ending of a wonderful innings...! well played")
        window.location.href = "../pchase.html";
        localStorage.setItem("target", total);
    }
    else {
        var c = "The bowler is trying his best...";
        document.getElementById("comments").innerHTML = c;
        
        var s = cchoice;
        total += s;
        document.getElementById("scoretotal").innerHTML = total;
        getSound6();
    }
}
