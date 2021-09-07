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
    var row =tbody.append("tr");

    Object.entries(ufoSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// get the Filter button
var button = d3.select("#filter-btn");

// add listener
// In this listener all search and diplay for the table will be performed
button.on("click", function() {
	// Get date to search
	var date = d3.select("#datetime");
	// Get value 
	var date_value = date.property("value");

	// perform query
	var data = tableData.filter(ufoSighting => (ufoSighting.datetime ===date_value));
	
	// Use D3 to select the table body
	var tbody = d3.select("tbody");
	// Use D3 to select the table
	var table = d3.select("table");
	//remove any children from the table to 
	tbody.html("");
	// Use D3 to set the table class to `table table-striped`
	table.attr("class", "table table-striped");


	if (date_value !== "")
	{ // if the date is not empty
		data.forEach(function(ufoSighting){
			var row =tbody.append("tr"); // add a new tr element

			Object.entries(ufoSighting).forEach(([key,value]) => {
				var cell = row.append("td"); // add td element
				cell.text(value);
			});
		});
	}
});
