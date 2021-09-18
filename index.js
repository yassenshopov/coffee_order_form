document.getElementById("forwardButton").disabled = true;

function leftButtonWidthChange() {

    var winWidth = window.innerWidth;
    leftButtonWidth = (winWidth - 80)/2;
    leftButtonWidth = leftButtonWidth + 'px';
    document.getElementById('buttonWrapper').style.left = leftButtonWidth;
    leftSelectWidth = (winWidth - 40)/2;
    leftSelectWidth = leftSelectWidth + 'px';
    document.getElementById('shop').style.left = leftButtonWidth;
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

var pageNum = 0;


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

    var selectShop = document.getElementById('shop');

    if ((selectShop.value == "") && (pageNum == 1)) {
        backToDots();
    }

    var drinkType = document.getElementById('drinkType').value;

    if ((pageNum == 2)) {
        if (drinkType == "") {
            backToDots();
        }
        else if (drinkType == "espresso" || drinkType == "americano") {
            document.getElementById('milk').style.display = 'none';
        }
        else {
            document.getElementById('milk').style.display = 'block';
            backToDots();
        }
    }
}

function proceedButton2() {

    var milk = document.getElementById('milk').value;

    if ((pageNum == 2)) {
        if (milk == "") {
            backToDots();
        }
        else {
            document.getElementById('forwardButton').style.backgroundColor = '#a7ed87';
            document.getElementById('forwardButton').style.border = '5px solid #f1f1f1';
            document.getElementById('forwardButton').style.backgroundImage = 'url("arrowRight.png")';
            document.getElementById('buttonWrapper').style.borderColor = '#a7ed87';
            document.getElementById("forwardButton").disabled = false;
        }
    }
}

function moveForward() {
    if (pageNum == 0) {
        document.getElementById('fieldset1').style.display = 'none';
        document.getElementById('fieldset2').style.display = 'block';
    }
    else if (pageNum == 1) {
        document.getElementById('fieldset2').style.display = 'none';
        document.getElementById('fieldset3').style.display = 'block';
    }
    else {
        document.getElementById('fieldset3').style.display = 'none';
        document.getElementById('finish').style.display = 'block';
        document.getElementById('forwardButton').style.display = 'none';
        document.getElementById('buttonWrapper').style.display = 'none';
    }

    pageNum = pageNum + 1;
    console.log(pageNum);
}

function backToDots() {
    document.getElementById('forwardButton').style.backgroundImage = 'url("threeDots.png")';
    document.getElementById('forwardButton').style.backgroundColor = '#f1f1ff';
    document.getElementById('buttonWrapper').style.borderColor = '#f1f1f1';
    document.getElementById("forwardButton").disabled = true;
}