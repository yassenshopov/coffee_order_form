document.getElementById("forwardButton").disabled = true;

function leftButtonWidthChange() {

    var winWidth = window.innerWidth;
    leftButtonWidth = (winWidth - 80)/2;
    leftButtonWidth = leftButtonWidth + 'px';
    document.getElementById('buttonWrapper').style.left = leftButtonWidth;
    console.log(leftButtonWidth)
}


function alphaNumeric(inputString, icon) {
    let input = document.getElementById(inputString)
    var letters = /^[a-zA-Z]+$/;
    if(input.value.match(letters)) {
        document.getElementById(inputString).style.border = "2px solid #07b00d";
        document.getElementById(inputString).style.background = "#acfaaf";
        document.getElementById(icon).style.backgroundImage = "url('greenTick.png')";
        document.getElementById(icon).style.opacity = "100%";
    }
    else if (input.value=="") {
        document.getElementById(inputString).style.border = "2px solid #f2cf07";
        document.getElementById(inputString).style.background = "#faf1b9";
        document.getElementById(icon).style.backgroundImage = "none";
        document.getElementById(icon).style.opacity = "0%";
    }
    else {
        document.getElementById(inputString).style.border = "2px solid #d6040f";
        document.getElementById(inputString).style.background = "#d17373";
        document.getElementById(icon).style.backgroundImage = "url('redCross.png')";
        document.getElementById(icon).style.opacity = "100%";
    }

    proceedButton();

}

function proceedButton() {
    checkFirst = document.getElementById('firstIcon');
    checkLast = document.getElementById('lastIcon');
    if ((checkFirst.style.backgroundImage == 'url("greenTick.png")') && (checkLast.style.backgroundImage == 'url("greenTick.png")')) {
        document.getElementById('forwardButton').style.backgroundColor = '#a7ed87';
        document.getElementById('forwardButton').style.border = '5px solid #f1f1f1';
        document.getElementById('forwardButton').style.backgroundImage = 'url("arrowRight.png")';
        document.getElementById('buttonWrapper').style.borderColor = '#a7ed87';
        document.getElementById("forwardButton").disabled = false;
    }
    else {
        document.getElementById('forwardButton').style.backgroundImage = 'url("threeDots.png")';
        document.getElementById('forwardButton').style.backgroundColor = '#f1f1ff';
        document.getElementById('buttonWrapper').style.borderColor = '#f1f1f1'; 
    }
}

function moveForward1() {
    document.getElementById('fieldset1').style.display = 'none';
    document.getElementById('fieldset2').style.display = 'block';
}