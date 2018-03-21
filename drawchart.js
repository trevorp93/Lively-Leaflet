function handleSearch1() {
	//prevent the page from refreshing
	d3.event.preventDefault();

	var zip = d3.select("#ZipInput").node().value;
	console.log(zip);

	//draw cool circular chart for zip
	var addText1 = d3.select("#sampleText1");

	addText1.text("Draw your cool circular chart by restaurant type here for zip :" + zip);

	var addText2 = d3.select("#sampleText2");

	addText2.text("And draw your cool geo map here for zip :" + zip);


};

function handleSearch2() {
	//prevent the page from refreshing
	d3.event.preventDefault();

	var zip = d3.select("#ZipInput").node().value;
	console.log(zip);

	//draw cool circular chart for zip
	var addText1 = d3.select("#sampleText1");

	addText1.text("Draw your cool circular chart by price level here for zip :" + zip);

	var addText2 = d3.select("#sampleText2");

	addText2.text("And draw your cool geo map here for zip :" + zip);

};

console.log("i'm here");

d3.select("#search1").on("click",handleSearch1);
d3.select("#search2").on("click",handleSearch2);