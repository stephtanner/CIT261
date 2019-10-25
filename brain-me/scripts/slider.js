var output = document.getElementsByClassName("output");
var outputArray = Array.from(output);
var sliders = document.getElementsByClassName("slider");
var slidersArray = Array.from(sliders);

for(var i = 0; i < slidersArray.length; i++){
    outputArray[i].innerHTML = slidersArray[i].value;

    /*slidersArray[i].oninput = function(){
        outputArray[i].innerHTML = this.value;
    }*/
}

/*slidersArray.forEach(function(slider){
    slider.oninput = function(){
        output.innerHTML = this.value
    }
});*/

sliders[0].oninput = function() {
    output[0].innerHTML = this.value;
}
sliders[1].oninput = function() {
    output[1].innerHTML = this.value;
}
sliders[2].oninput = function() {
    output[2].innerHTML = this.value;
}
sliders[3].oninput = function() {
    output[3].innerHTML = this.value;
}
sliders[4].oninput = function() {
    output[4].innerHTML = this.value;
}
sliders[5].oninput = function() {
    output[5].innerHTML = this.value;
}
sliders[6].oninput = function() {
    output[6].innerHTML = this.value;
}
sliders[7].oninput = function() {
    output[7].innerHTML = this.value;
}