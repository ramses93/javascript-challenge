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


// function to display data as table
function display_table(data)
{
	// clear
	tbody.html("");
	
	// iterate through data and append each row
	data.forEach((data_row) => {
		var row = tbody.append("tr");
		Object.values(data_row).foreach((value) = > {
			var cell = row.append("td");
			cell.text(value);
		});
	});
}

// dict to store the filters
var filters = {};


function load_filters()
{
	var element d3.select(this).select("input");
	var value = element.property("value");
	var filter = element.attr("id");
	
	if(value) // not empty
	{
		filters[filter] = value;
	}
	else
	{
		delete filters[filter]; // delete this filter because is empty
	}
	
	
	// Now, apply filters to table
	filter_table();
}

function filter_table()
{
	// this function applies the filters and retrieves the data
	let filtered_data = tableData;
	
	Object.entries(filters).forEach(([key, value]) => {
      filtered_data = filtered_data.filter(row => row[key] === value);
    });
	
	// now, construct the table
	display_table(filtered_data);
}
// add listener
// In this listener all search and diplay for the table will be performed
button.on("click", function() {
	// Apply filers
	load_filters();
	
	display_table(tableData);
});
