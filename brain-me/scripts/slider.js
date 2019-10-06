/*var slider = document.getElementById("curencySlider");
var output = document.getElementById("output");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}*/
var output = document.getElementsByClassName("output");
var sliders = document.getElementsByClassName("slider");
var nodeToArray = [].slice.call(document.getElementsByClassName("slider"));

for(var i = 0; i < sliders.length; i++){
    output[i].innerHTML = sliders[i].value;

    /*sliders[i].oninput = function(){
        output[i].innerHTML = this.value;
    }*/

}

sliders.oninput = function(sliders, output){
    
    output[i].innerHTML = this.value;
}

