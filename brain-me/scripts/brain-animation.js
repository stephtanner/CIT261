function pumpBrain() {
    var a = document.getElementById("animatedLogo");
    a.src = "images/brain-animation/0.png";
    setTimeout(function () {
        a.src = "images/brain-animation/1.png";
    }, 500);
    setTimeout(function () {
        a.src = "images/brain-animation/2.png";
    }, 1000);
    setTimeout(function () {
        a.src = "images/brain-animation/3.png";
    }, 1500);
    setTimeout(function () {
        a.src = "images/brain-animation/4.png";
    }, 2000);
    setTimeout(function () {
        a.src = "images/brain-animation/5.png";
    }, 2500);
  }
  pumpBrain();
  setInterval(pumpBrain, 2500);