// from data.js
var tableData = data;

// YOUR CODE HERE!

// select the table body
var tbody = d3.select("tbody");

// select table
var table = d3.select("table");


// delete any object in table
tbody.html("");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");
// Use d3 to append 1 cell per UFO sighting value 
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row =tbody.append("tr");

    Object.entries(ufoSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// get the Filter button
var button = d3.select("#filter-btn");
