document.getElementById("head").addEventListener("click", myFunction, false);
document.getElementById("tail").addEventListener("click", myFunction2, false);
function myFunction() {
    var choice = 1;
    var comchoice = Math.floor(Math.random() * 2) + 1;
    if (comchoice === 1) {
        alert("Heads it is...Congratulations! you have won the toss")
        window.location.href = "../components/head.html";
    }
    else {
        alert("Sorry you lost the toss!, Computer will bat first ")
        window.location.href = "../cfirst.html";
    }
}
function myFunction2() {
    var choice = 1;
    var comchoice = Math.floor(Math.random() * 2) + 1;
    if (comchoice === 1) {
        alert("Tails it is... Congratulations! you have won the toss")
        window.location.href = "../components/head.html";
    }
    else {
        alert("Sorry you lost the toss!, Computer will bat first ")
        window.location.href = "../cfirst.html";
    }
}

