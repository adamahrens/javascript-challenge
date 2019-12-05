// from data.js
var tableData = data;

var htmlTable = document.getElementById('ufo-table');

tableData.forEach(function(item) {
  console.log(item);

  // Create row and all the td elements
  var row = htmlTable.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);

  // Set the innerHTML
  cell1.innerHTML = item.datetime;
  cell2.innerHTML = item.city;
  cell3.innerHTML = item.state;
  cell4.innerHTML = item.country;
  cell5.innerHTML = item.shape;
  cell6.innerHTML = item.durationMinutes;
  cell7.innerHTML = item.comments;
});
