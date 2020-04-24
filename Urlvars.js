function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


var name = getUrlVars()["name"];
var choice = getUrlVars()["choice"];
var interest = getUrlVars()["interest"];

var node = document.createElement("p");
var textnode = document.createTextNode(name + " and "  + interest);
node.appendChild(textnode);
document.querySelector("#result").appendChild(node);
