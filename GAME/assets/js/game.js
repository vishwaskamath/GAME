/*Sounds for 1*/
var sound1 = new Array();
sound1[0] = "../GAME/assets/audio/1-1.mp3";
sound1[1] = "../GAME/assets/audio/1-2.mp3";
sound1[2] = "../GAME/assets/audio/1-3.mp3";
function getSound1() {
    var randomNum = Math.floor(Math.random() * sound1.length);
    document.getElementById("myaudio").src = sound1[randomNum];
}
/*Sounds for 2*/
var sound2 = new Array();
sound2[0] = "../GAME/assets/audio/2-1.mp3";
sound2[1] = "../GAME/assets/audio/2-2.mp3";
sound2[2] = "../GAME/assets/audio/2-3.mp3";
function getsound2() {
    var randomNum = Math.floor(Math.random() * sound2.length);
    document.getElementById("myaudio").src = sound2[randomNum];
}
/*Sounds for 3*/
var sound3 = new Array();
sound3[0] = "../GAME/assets/audio/3-1.mp3";
sound3[1] = "../GAME/assets/audio/3-2.mp3";
sound3[2] = "../GAME/assets/audio/3-3.mp3";
function getsound3() {
    var randomNum = Math.floor(Math.random() * sound3.length);
    document.getElementById("myaudio").src = sound3[randomNum];
}
/*Sounds for 4*/
var sound4 = new Array();
sound4[0] = "../GAME/assets/audio/4-1.mp3";
sound4[1] = "../GAME/assets/audio/4-2.mp3";
sound4[2] = "../GAME/assets/audio/4-3.mp3";
function getsound4() {
    var randomNum = Math.floor(Math.random() * sound4.length);
    document.getElementById("myaudio").src = sound4[randomNum];
}
/*Sounds for 5*/
var sound5 = new Array();
sound5[0] = "../GAME/assets/audio/5-1.mp3";
sound5[1] = "../GAME/assets/audio/Cymbal.mp3";
sound5[2] = "../GAME/assets/audio/Cymbal.mp3";
function getsound5() {
    var randomNum = Math.floor(Math.random() * sound5.length);
    document.getElementById("myaudio").src = sound5[randomNum];
}
/*Sounds for 6*/
var sound6 = new Array();
sound6[0] = "../GAME/assets/audio/6-1.mp3";
sound6[1] = "../GAME/assets/audio/6-2.mp3";
sound6[2] = "../GAME/assets/audio/6-3.mp3";
function getsound6() {
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
function score() {
    var s = uchoice;
    total += s;
    document.getElementById("scoretotal").innerHTML = total;
}
function one() {
    uchoice = 1;
    var cchoice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoice").innerHTML = uchoice;
    document.getElementById("computerchoice").innerHTML = cchoice;
    if (cchoice === 1) {
        total = total;
        //getsoundout();
        alert("OUT !!! And thats the end of a wonderful innings...! well played")
        window.location.href = "../GAME/components/batout.html";
        localStorage.setItem("key", total);
    }
    else {
        var c = "A single taken";
        document.getElementById("comments").innerHTML = c;
        score();
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
        window.location.href = "../GAME/components/batout.html";
        localStorage.setItem("key", total);
    }
    else {
        var c = "Batsman looking for two runs...";
        document.getElementById("comments").innerHTML = c;
        score();
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
        window.location.href = "../GAME/components/batout.html";
        localStorage.setItem("key", total);

    }
    else {
        var c = "Batsmen are quick between the wickets....3 runs taken...";
        document.getElementById("comments").innerHTML = c;
        score();
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
        window.location.href = "../GAME/components/batout.html";
        localStorage.setItem("key", total);
    }
    else {
        var c = "And Ball races to the boundary line..... 4 it is....";
        document.getElementById("comments").innerHTML = c;
        score();
        getsound4();
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
        window.location.href = "../GAME/components/batout.html";
        localStorage.setItem("key", total);
    }
    else {
        var c = "No ball and a boundary...5 runs to the batting side!";
        document.getElementById("comments").innerHTML = c;
        score();
        getsound5();
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
        window.location.href = "../GAME/components/batout.html";
        localStorage.setItem("key", total);
    }
    else {
        var c = "Over the boundary line.... 6 it is";
        document.getElementById("comments").innerHTML = c;
        score();
        getsound6();
    }
}
