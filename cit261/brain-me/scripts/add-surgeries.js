var submit = document.getElementById("submitButton");
submit.onclick = function(){
    var surgeryType = document.getElementById("surgeryType").value;
    var surgeryDate = document.getElementById("surgeryDate").value;
    alert(surgeryDate);
    //var time = document.getElementById("").value;
    document.getElementById("surgeryList").innerHTML = (surgeryType);
}

/*const isValidElement = element => {
    return element.name && element.value;
  };

const formToJSON = elements => [].reduce.call(elements, (data, element) =>{
    if(isValidElement(element)){
        data[element.name] = element.value;
    }
    return data;
}, {});

const reducerFunction = (data, element) => {
    data[element.name] = element.value;
    console.log(JSON.stringify(data));
    return data;
};

function handleFormSubmit(event) {
    event.preventDefault;
    var data = formToJSON(form.elements);
    var dataContainer = document.getElementsByClassName("surgeryList")[0];
    dataContainer.textContent = JSON.stringify(data, null, " ");
};

 var form = document.getElementsByClassName('contact-form')[0];
 form.addEventListener('submit', handleFormSubmit(form));
                       
*/






 /*var button = document.getElementById("submitButton");
 button.addEventListener("click", captureData());

 function captureData(){
     var type = document.getElementById("typeSelected");
     var date = document.getElementById("dateSelected");
     var time = document.getElementsByClassName("time");
     
     console.log(time, date, type);
 }*/







 /*var button = document.getElementById("submitButton");
 button.addEventListener("click", function(event){
     event.preventDefault;
     sayHello();
 });


 each elemebyid () add it to an Object
 storage variable object:
 name: variable id 





 function message(){
     alert("Hello");
 }
 function sayHello(){
     document.getElementById("surgeryList").innerHTML = "hello!";
 }



 //document.getElementById("submitButton").addEventListener("click", sayHello());

 function theStuff(){
     //var data = {};
     //var dataContainer = document.getElementById("surgeryList").innerHTML = data;
     //dataContainer.textContent = JSON.stringify(data, null, " ");
     message();
 }*/
