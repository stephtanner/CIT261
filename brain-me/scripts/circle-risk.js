var form = document.getElementById("riskAssessmentForm");
var sliders = document.getElementsByClassName("slider");
var slidersArray = Array.from(sliders);
var total = 0;

//canvas portion to draw the circle
var canvas = document.getElementById("riskScoreCanvas");
var circle = canvas.getContext("2d");
var circle2 = canvas.getContext("2d");

//the gray background circle
circle.beginPath();
circle.arc(150, 150, 125, 0, 2 * Math.PI);
circle.lineWidth = "25";
circle.strokeStyle = "#b1b1b1";
circle.stroke();

form.onsubmit = function (event) {
    //prevent the default function of a submit button
    event.preventDefault();
    //get the values from the form
    for (var i = 0; i < slidersArray.length; i++) {
        total += parseInt(slidersArray[i].value);
        console.log(total);
        document.getElementById("riskScore").innerHTML = total;

        var ratioArc = total / 20;

        //clear the space from the previous input
        circle.clearRect(0, 0, 300, 300);

        //the gray background circle
        circle.beginPath();
        circle.arc(150, 150, 125, 0, 2 * Math.PI);
        circle.lineWidth = "25";
        circle.strokeStyle = "#b1b1b1";
        circle.stroke();

        circle.beginPath();
        circle.arc(150, 150, 125, 0, ratioArc * Math.PI);
        circle.strokeStyle = "#3CCED1";
        circle.lineWidth = "25";
        circle.stroke();
    }
    form.reset();
    total = 0;
    for (var i = 0; i < slidersArray.length; i++) {
        outputArray[i].innerHTML = slidersArray[i].value;
    }
};

var x = 0;
function animate(){
    requestAnimationFrame(animate);
    circle2.clearRect(0, 0, 300, 300);
    circle2.beginPath();
    circle2.arc(150, 150, 125, 0, x * Math.PI);
        circle2.arc(150, 150, 125, 0, ratioArc * Math.PI);
        circle2.strokeStyle = "#3CCED1";
        circle2.lineWidth = "25";
        circle2.stroke();

        if(x < ratioArc){
            x++;
        }
        else {
            return;
        }

}

/*
//the progress circle on top of the first circle
circle.beginPath();
circle.arc(150, 150, 125, 0, 2 * Math.PI);
//Change the stroke style (color) based on score
circle.strokeStyle = "#3CCED1";
circle.lineWidth = "25";
circle.stroke();*/