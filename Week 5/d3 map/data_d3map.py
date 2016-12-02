#data_d3map.py

#!/usr/bin/env python
# Name: Nicol Heijtbrink
# Student number: 10580611

import csv
import json

inputfile = 'worldpopulation.csv'
outputfile = 'worldpopulation.json'

csvfile = open(inputfile, 'r')
jsonfile = open(outputfile, 'w')

raw_data = []

reader = csv.DictReader(csvfile)
for row in reader:
	country = row['Country (or dependent territory)']
	population = row['Population']
	country = country.split('[')[0]

	#print country, population
	
	raw_data.append({"country" : country, "population" : population})

jsondata = json.dumps(raw_data)
print jsondata
jsonfile.write(jsondata)

