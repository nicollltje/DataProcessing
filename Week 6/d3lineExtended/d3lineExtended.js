
d3.json("weatherdata1994.json", function(data){
	// size of the graph
	var margin = {top: 20, left:  50, right: 20, bottom: 80},
		width = 900 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	var bisectDate = d3.bisector(function(d) { return d.date; }).left,
		parseDate = d3.time.format("%Y%m%d").parse;

	// scales of the graph
	var x = d3.time.scale()
		.range([0, width])
	var y  = d3.scale.linear()
		.range([height, 10]);

	// set the axis of the graph
	var xAxis = d3.svg.axis()
		.scale(x)
	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left");

	var svg = d3.select(".linechart").append("svg")
		.attr ("width", width + margin.left + margin.right)
		.attr ("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")

	data.forEach(function(d) {
			d.date = parseDate(d.date);
			d.city = d.city
			//console.log(d.city)
			d.minTemperature = Number(d.temperatures[0])
			d.maxTemperature = Number(d.temperatures[1])
			d.avgTemperature = Number(d.temperatures[2])
			//console.log(d.date, d.temperatures)
			return d;
	});
	// for (i = 0; i < data.length; i++){
	// 	d.date = d.Leeuw[i].temperatures[2]
	// 	console.log(d.date)
	// }
	console.log(d3.extent(data, function(d) { if(d.city =="Leeuwarden"){
		return d.maxTemperature; }}))
	x.domain(d3.extent(data, function(d) { if(d.city =="Leeuwarden"){
		return d.date; }}));
	y.domain([
		d3.min(data, function(d){return d.minTemperature}),
		d3.max(data, function(d) { if(d.city =="Leeuwarden"){
		return d.maxTemperature; }})
		]);
	// make a line from the datapoints
	var lineMin = d3.svg.line()
		.x(function(d) {if(d.city == "Leeuwarden"){
			return x(d.date); } else{return x.domain} })
		.y(function(d) {if(d.city == "Leeuwarden"){
			return y(d.minTemperature); } else{return y.domain} });

	var lineMax = d3.svg.line()
		.x(function(d) {if(d.city == "Leeuwarden"){
			return x(d.date); } else{return x.domain} })
		.y(function(d) {if(d.city == "Leeuwarden"){
			return y(d.maxTemperature); } else{return y.domain} });

	var lineAvg = d3.svg.line()
		.x(function(d) {if(d.city == "Leeuwarden"){
			return x(d.date); } else{return x.domain} })
		.y(function(d) {if(d.city == "Leeuwarden"){
			return y(d.avgTemperature); } else{return y.domain} });

	svg.append("g")
      .attr("class", "x_axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

	svg.append("g")
		.attr("class", "y_axis")
		.call(yAxis)
		.append("text")
		.attr("fill", "#000")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", "0.50em")
		.style("text-anchor", "end")
		.text("Temperatures in degrees Celcius (x10)");

	svg.append("path")
		.datum(data)
		.attr("class", "lineMin")
		.style("stroke", "blue")
		.attr("d", lineMin)

	svg.append("path")
		.datum(data)
		.attr("class", "lineMax")
		.style("stroke", "red")
		.attr("d", lineMax)

	svg.append("path")
		.datum(data)
		.attr("class", "lineAvg")
		.style("stroke", "yellow")
		.attr("d", lineAvg)

	var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("r", 4.5);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x(d.date) + "," + y(d.avgTemperature) + ")");
    focus.select("text").text((d.avgTemperature));
  }

});