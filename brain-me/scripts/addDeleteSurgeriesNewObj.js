var form = document.getElementById("surgeryForm");
var localStorageArray = [];
var identification = 0;

function SurgeryInformation(type, date, time, identifier){
    this.surgeryType = type;
    this.surgeryDate = date;
    this.surgeryTime = time;
    this.surgeryIdentifier = identifier;
}

form.onsubmit = function (event) {
    //prevent the default function of a submit button
    event.preventDefault();
    //get the values for the three inputs in the form
    //and set them to variables to use later
    
    //var surgeryID = "surgery" + identification.toString();
    surgeryID = new SurgeryInformation(form.surgeryType.value, form.surgeryDate.value, form.surgeryTime.value, identification);

    /*var surgeryType = form.surgeryType.value;
    var surgeryDate = form.surgeryDate.value;
    var surgeryTime = form.surgeryTime.value;*/
    //create a new item that we add to the surgeryList divide
    //we are also creating a new class and a new span to create a delete button
    document.getElementById("surgeryList").innerHTML += "<li>" + surgeryID.surgeryType + " | " +
    surgeryID.surgeryDate + " | " + surgeryID.surgeryTime + '<span class="delete">delete</span></li>';

    buttonDelete();
    //since we prevented the default, we have to clear the form each time they submit
    form.reset();

    //var myObject = { "identification" : identification, "surgeryType": surgeryType, "surgeryDate": surgeryDate, "surgeryTime": surgeryTime };
    surgeryIDStringified = JSON.stringify(surgeryID);
    localStorageArray.push(surgeryIDStringified);
    localStorage.setItem("surgeryStorage", localStorageArray);
    //var myJSON = JSON.stringify(localStorageArray);
    //localStorage.setItem("surgeryStorage", myJSON);
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
            surgeryID = new SurgeryInformation(form.surgeryType.value, form.surgeryDate.value, form.surgeryTime.value, identification);

            //var surgeryType = objects[i].surgeryType;
            //var surgeryDate = objects[i].surgeryDate;
            //var surgeryTime = objects[i].surgeryTime;
            //re-list the items in the Surgery Schedule from the Local Storage
            var listItem = document.getElementById("surgeryList").innerHTML += "<li>" + surgeryID[i].surgeryType + " | " +
            surgeryID[i].surgeryDate + " | " + surgeryID[i].surgeryTime + '<span class="delete">delete</span></li>';
                buttonDelete();
            //Send the information from the last local storage to the new session's local storage

            surgeryIDStringified = JSON.stringify(surgeryID);
            localStorageArray.push(surgeryIDStringified);

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
            
        });
    });
}
