// barchart.js
// Nicol Heijtbrink
// 10580611

window.onload = function() {

	d3.json("americanWomanWeightHeight.json", function(data) {

  		var barWidth = 40;
  		var width = (barWidth + 10) * data.length;
  		var height = 500;

  		
  		var x = d3.scale.linear()
  				.domain([0, data.length])
  				.range([0, width]);
		var y = d3.scale.linear()
				.domain([0, d3.max(data, function(datum) { return datum.weight; })])
				.range([0, height - 30]);

		var color = d3.scale.linear()
				.domain([0, d3.max(data, function(datum) { return datum.weight; })])
				.range(["#fceaff", "#5a0266"])

		var axis = d3.svg.axis()
			.scale( x )
			.ticks(data.length);

  		// add svg element to body of the html
  		var canvas = d3.select("body")
  			.append("svg")
  			.attr("width", width)
  			.attr("height", height)
  			.append("g")

  		// add rectangles as bars to the canvas
  		canvas.selectAll("rect")
  			.data(data)
  			.enter()
  				.append("rect")
  				.attr("x", function(datum, index) { return x(index); })
  				.attr("y", function(datum) { return height - y(datum.weight); })
  				.attr("height", function(datum) { return y(datum.weight); })
  				.attr("width", barWidth)
  				.attr("fill", "#85548c" );

  		// add the value to the bars
  		canvas.selectAll("text")
  			.data(data)
  			.enter()
  				.append("text")
  				.attr("x", function(datum, index) { return x(index) + barWidth; })
  				.attr("y", function(datum) { return height - y(datum.weight); })
  				.attr("dx", -barWidth/2)
  				.attr("dy", "1.2em")
  				.attr("text-anchor", "middle")
  				.text(function(datum) { return datum.weight;})
  				.attr("fill", "#fbf4fc");

  		// add the y axis labels
 		canvas.selectAll("text.yAxis")
 			.data(data)
  			.enter()
  				.append("text")
  				.attr("x", function(datum, index) { return x(index) + barWidth; })
  				.attr("y", height)
  				.attr("dx", -barWidth/2)
  				.attr("text-anchor", "middle")
  				.attr("style", "font-size: 12; font-family: Helvetica, sans-serif")
  				.text(function(datum) { return datum.hei; })
  				.attr("transform", "translate(0, -10)")
  				.attr("class", "yAxis")
  				.attr("fill", "black ");

  	}) 

}	




 

