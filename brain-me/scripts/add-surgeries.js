var form = document.getElementById("surgeryForm");
var localStorageArray = [];

form.onsubmit = function (event) {
    //prevent the default function of a submit button
    event.preventDefault();
    //get the values for the three inputs in the form
    //and set them to variables to use later
    var surgeryType = form.surgeryType.value;
    var surgeryDate = form.surgeryDate.value;
    var surgeryTime = form.surgeryTime.value;
    //create a new item that we add to the surgeryList divide
    //we are also creating a new class and a new span to create a delete button
    var newItem = document.getElementById("surgeryList").innerHTML += "<li>" + surgeryType + " | " +
        surgeryDate + " | " + surgeryTime + '<span class="delete">delete</span></li>';
    //since we prevented the default, we have to clear the form each time they submit
    form.reset();

    var myObject = { "surgeryType": surgeryType, "surgeryDate": surgeryDate, "surgeryTime": surgeryTime };
    localStorageArray.push(myObject);
    var myJSON = JSON.stringify(localStorageArray);
    console.log(myJSON);
    localStorage.setItem("surgeryStorage", myJSON);
    console.log(localStorageArray);
};



if (localStorage != null) {
    //get the array from the local storage with all the list items
    var text = localStorage.getItem("surgeryStorage");
    //parse the array into JSON objects
    var objects = JSON.parse(text);
    for (var i = 0; i < objects.length; i++) {
        var surgeryType = objects[i].surgeryType;
        var surgeryDate = objects[i].surgeryDate;
        var surgeryTime = objects[i].surgeryTime;
        //re-list the items in the Surgery Schedule from the Local Storage
        var listItem = document.getElementById("surgeryList").innerHTML += "<li>" + surgeryType + " | " +
            surgeryDate + " | " + surgeryTime + '<span class="delete">delete</span></li>';
        //Send the information from the last local storage to the new session's local storage
        var myObject = { "surgeryType": surgeryType, "surgeryDate": surgeryDate, "surgeryTime": surgeryTime };
        localStorageArray.push(myObject);
    }
}

//for each delete button created above, target the parent element and delete the list
//This is only deleting it if I refresh the page!
//I also need this to delete things from the local storage at the same time
var buttons = document.querySelectorAll(".delete");
Array.from(buttons).forEach(function(button){
    button.addEventListener("click", function (event) {
        const li = event.target.parentElement;
        li.parentNode.removeChild(li);
    });
});