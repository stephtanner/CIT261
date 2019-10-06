/*function rotateImage(){
    var img = document.getElementById('myImage');
    img.className = 'element';
}*/


function rotateImage(){
    var img = document.getElementById('myImage');
    if (img.className === "start"){
        img.className = "element";
    }
    else{
        img.className = "start";
    }
}