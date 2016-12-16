// country codes and names to map the country 3 letter code to its name
var country_codes = [
    ["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "Åland Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia, Plurinational State of"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Congo"],
    ["cd", "COD", "Congo, the Democratic Republic of the"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Côte d'Ivoire"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Curaçao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran, Islamic Republic of"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "Korea, Democratic People's Republic of"],
    ["kr", "KOR", "Korea, Republic of"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Lao People's Democratic Republic"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova, Republic of"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nl", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "Réunion"],
    ["ro", "ROU", "Romania"],
    ["ru", "RUS", "Russia"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barthélemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syrian Arab Republic"],
    ["tw", "TWN", "Taiwan, Province of China"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania, United Republic of"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
    ["vn", "VNM", "Viet Nam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];

// open the dataset to use for the map and pie chart
d3.json("worldpopulation.json", function(data){
	
    // returns the required data
    data.forEach(function(d) {
            d.percentage = parseFloat(d.percentage);
            d.country = d.country
            return d;
    });
    

    // the function that draws piechart
    function drawPie(country_id) {

        country = getCountry(country_id);

        // define size parameters for the pie chart
        var width = 700,
        height = 350,
        radius = Math.min(width - 50, height - 50) / 2;

        // sets a color range to be used by the pie chart
        var color = d3.scale.ordinal()
            .range(["#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221"]);

        // create an arc as pie chart
        var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        // make the labels that go in the pie chart
        var labelArc = d3.svg.arc()
            .outerRadius(radius - 60)
            .innerRadius(radius - 60);

        // create a pie using the percentage data
        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d){return d.percentage});

        // add an svg to the htlm to hold the pie chart
        var svg = d3.select(".piechart").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "pie")
            .append("g")
            .attr("transform", "translate(" + (width - 50) / 2 + "," + (height - 50) / 2 + ")");

        // adds the pie chart to the svg
        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("id", "piepart");

        // make an acr path for all the datapoints
        g.append("path")
            .attr("d", arc)
            .style("fill", function(d) { 
                if (d.data.country == country){
                    return "red"
                }
                else {
                    return color(d.data.percentage);}
                }
            )
            .attr("stroke",function(d) {
                if (d.data.country == country){ return "white" } }
            );
          

        // adds the labels to the piechart for the largest populated countries
        g.append("text")
            .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
            .attr("class", "percent-text")
            .attr("dy", ".35em");
            
    };

        // the function that draws piechart
    function drawPieSelection(country_id) {

        country = getCountry(country_id);

        // define size parameters for the pie chart
        var width = 700,
        height = 350,
        radius = Math.min(width - 50, height - 50) / 2;

        // create an arc as pie chart
        var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        // make the labels that go in the pie chart
        var labelArc = d3.svg.arc()
            .outerRadius(radius - 60)
            .innerRadius(radius - 60);

        // create a pie using the percentage data
        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d){return d.percentage});

        // add an svg to the htlm to hold the pie chart
        var svg = d3.select(".pie")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "pie")
            .append("g")
            .attr("transform", "translate(" + (width - 50) / 2 + "," + (height - 50) / 2 + ")");

        // adds the pie chart to the svg
        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("id", "piepart");

        // make an acr path for all the datapoints
        g.append("path")
            .attr("d", arc)
            .style("fill", function(d) { 
                if (d.data.country == country){
                    return "red"
                }
                else {
                    return "none";}
                }
            )
            .attr("stroke",function(d) {
                if (d.data.country == country){ return "white" } }
            );
          

        // adds the labels to the piechart for the largest populated countries
        g.append("text")
            .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
            .attr("class", "percent-text")
            .attr("dy", ".35em")
            .text(function(d) {  
                if (d.data.country == country){
                    string = d.data.country + " - " + d.data.percentage + " % of the worldpopulation"
                    
                    return string;
                }
            })
            .attr("font-weight", "bold")
            .attr("font-size", "15px")
            .attr("fill", "black");


        g.insert("percent-text", "text")
            .attr("width", 100.0)
            .attr("height", 100.0)
            .style("fill", "yellow")      
    };

    // get the 3 letter country code for the country name
    function getThreeLetters(country){
		for (j = 0; j < country_codes.length; j++){
		  country_land = country_codes[j][2]
		  country_code = country_codes[j][1]
		  if (country == country_land){
			return country_code;
		  }
		}
	}

    // function to get the land for a corresponding country code
    function getCountry(threeLetters){
        for (j = 0; j < country_codes.length; j++){
          country_land = country_codes[j][2]
          country_code = country_codes[j][1]
          if (country_code == threeLetters){
            return country_land;
          }
        }
    }

    // function that returns a value for the corresponding population to set the fillkey
	function getValueForPopulation(population){
    	if (population > 1000000000) {
    		return 'Very_High';
    	}
    	else if (population > 500000000) {
    		return 'High';
    	}
    	else if (population > 100000000) {
    		return 'Medium_High';
    	}
    	else if (population > 50000000) {
    		return 'Medium';
    	}
    	else if (population > 10000000) {
    		return 'Medium_Low';
    	}
    	else if (population > 5000000) {
    		return 'Low';
    	}
    	else if (population < 5000000) {
    		return 'Very_Low';
    	}
    }

    // puts the data with their fillkey in the dataset for the map
	var dataset = {};
	for (i = 0; i < data.length; i++){
		country = getThreeLetters(data[i].country);
		population = data[i].population;
		var populationNumber = parseInt(population.split(',').join(''));
		var populationColor = getValueForPopulation(populationNumber);
		dataset[country] = {fillKey: populationColor, population: populationNumber};
		
	}

    // create a datamap
    var map = new Datamap({

        // makes it responsive to clicking on countries
        done: function(datamap, data) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                d3.selectAll(".pie").remove();
                drawPie(geography.id);
                drawPieSelection(geography.id);                    
            });
        },
        element: document.getElementById('container'),
        
        // define the fills here
        fills: {
            Very_High: '#0c2c84',
            High: '#225ea8',
            Medium_High: '#1d91c0',
            Medium:'#41b6c4',
            Medium_Low: '#7fcdbb',
            Low: '#c7e9b4',
            Very_Low: '#ffffcc',
            Unknown: 'black',
            defaultFill: 'black'
        },
        
        data: dataset,

        // gives the popup of country and popoulation when hovering over a country
        geographyConfig: {
            popupTemplate: function (geo, data) {
                return ['<div class="hoverinfo"><strong>',
                        'Population of ' + geo.properties.name,
                        ': ' + data.population,
                        '</strong></div>'].join('');
            }
        }
        
    });
    // adds a legend to the map
    map.legend();

});	


