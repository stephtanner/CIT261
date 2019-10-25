//for each delete button created above, target the parent element and delete the list
//This is only deleting it if it is from the list coming from the local storage.
//it won't delete any new items or anything if a new item has been added
//I also need this to delete things from the local storage at the same time
var buttons = document.querySelectorAll(".delete");
Array.from(buttons).forEach(function(button){
    button.addEventListener("click", function (event) {
        const li = event.target.parentElement;
        console.log(li);
        li.parentNode.removeChild(li);
    });
});