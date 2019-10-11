/*function rotateImage(){
    var img = document.getElementById('myImage');
    img.className = 'element';
}*/


function rotateImage(){
    var img = document.getElementById('myImage');
    var form = document.getElementById('surgeryForm');
    if (img.className === "start"){
        img.className = "element";
        form.className = "show";
    }
    else{
        img.className = "start";
        form.className = "hide";
    }
}