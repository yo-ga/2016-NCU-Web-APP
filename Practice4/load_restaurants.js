var table = document.createElement("table");
table.style.border = "1px solid #000000";

var table_body = document.createElement("tbody");
var table_head = document.createElement("thead");
var name_head = document.createElement("th");
var time_head = document.createElement("th");

name_head.appendChild(document.createTextNode("商店"));
name_head.style.border = "1px solid #000000";
time_head.appendChild(document.createTextNode("營業時間"));
time_head.style.border = "1px solid #000000";
table_head.appendChild(name_head);
table_head.appendChild(time_head);

for (var i = 0; i < restaurants.length; i++) {
    var row = document.createElement("tr");
    for (key in restaurants[i]) {
        var cell = document.createElement("td");
        cell.appendChild(document.createTextNode(restaurants[i][key]));
        cell.style.border = "1px solid #000000";
        row.appendChild(cell);
        if (key=="name")
        	console.log(restaurants[i][key]);
    }
    table_body.appendChild(row);
}

table.appendChild(table_head);
table.appendChild(table_body);
document.body.appendChild(table);