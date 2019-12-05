var form = document.getElementById("surgeryForm");
var localStorageArray = [];
var identification = 0;

//create a new Object Constructor
function SurgeryInformation(type, date, time, identifier){
    this.surgeryType = type;
    this.surgeryDate = date;
    this.surgeryTime = time;
    this.surgeryIdentifier = identifier;
}

form.onsubmit = function (event) {
    //prevent the default function of a submit button
    event.preventDefault();
    //get the values for the three inputs in the form by creating a New Object with the information
    surgeryID = new SurgeryInformation(form.surgeryType.value, form.surgeryDate.value, form.surgeryTime.value, identification);

    //create a new item that we add to the surgeryList divide
    //we are also creating a new class and a new span to create a delete button
    document.getElementById("surgeryList").innerHTML += "<li><div style='display:none'>" +identification + "</div>" + surgeryID.surgeryType + " | " +
    surgeryID.surgeryDate + " | " + surgeryID.surgeryTime + '<span class="delete">delete</span></li>';

    buttonDelete();
    //since we prevented the default, we have to clear the form each time they submit
    form.reset();

    localStorageArray.push(surgeryID);
    var myJSON = JSON.stringify(localStorageArray);
    localStorage.setItem("surgeryStorage", myJSON);

    identification += 1;

};



if (localStorage != null && localStorage.length != null) {
    //get the array from the local storage with all the list items
    var text = localStorage.getItem("surgeryStorage");
    console.log(text);
    if (text != null) {
        //parse the array into JSON objects
        var objects = JSON.parse(text);
        for (var i = 0; i < objects.length; i++) {
            var surgeryID = new SurgeryInformation(objects[i].surgeryType, objects[i].surgeryDate, objects[i].surgeryTime, objects[i].identification);

            //re-list the items in the Surgery Schedule from the Local Storage
            var listItem = document.getElementById("surgeryList").innerHTML += "<li><div style='display:none'>" +identification + "</div>" + objects[i].surgeryType + " | " +
            objects[i].surgeryDate + " | " + objects[i].surgeryTime + '<span class="delete">delete</span></li>';
                buttonDelete();
            //Send the information from the last local storage to the new session's local storage
            localStorageArray.push(surgeryID);
            identification += 1;
        }
    }
}

function buttonDelete(){
    var buttons = document.querySelectorAll(".delete");
    Array.from(buttons).forEach(function (button) {
        button.addEventListener("click", function (event) {
            const li = event.target.parentElement;
            console.log(li);
            li.parentNode.removeChild(li);

            var surgeryArray = JSON.parse(localStorage.getItem("surgeryStorage"));
            for (var i = 0; i < surgeryArray.length; i++) {
                if (li.identification == surgeryArray[i].identifier){
                    surgeryArray.splice(1,1);
                }
            }
            
        });
    });
}
