var requestFile = new XMLHttpRequest();
requestFile.overrideMimeType("application/json");
requestFile.open('GET', '../brain-me/json/tasks.json', true);

requestFile.repsonseType = "json";
requestFile.send();

requestFile.onload = function () {
    var mitigation = JSON.parse(requestFile.response);
    populateData(mitigation);

    function populateData(mitigation) {
        var allData = mitigation;
        for (var y = 0; y < allData["surgeries"][0]["surgeryFactorsMitigation"].length; y++) {
            var idea = document.createElement("p");
            var t = document.createTextNode(" ");
            idea.appendChild(t);
            t.textContent = allData["surgeries"][0]["surgeryFactorsMitigation"][y];
            document.getElementById("mitigation").appendChild(idea);
        }
    }
}