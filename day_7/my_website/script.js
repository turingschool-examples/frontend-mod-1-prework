function addPara(){

    var newPara = document.createElement("p");
    var addInfo = document.createTextNode("paragraph goes here");
    newPara.appendChild(addInfo);

    var getFooter = document.getElementById("footer");
    
    document.body.insertBefore(newPara, getFooter);
}
