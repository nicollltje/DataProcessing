#convertCSV2JSON.py

#!/usr/bin/env python
# Name: Nicol Heijtbrink
# Student number: 10580611

import csv
import json

inputfile = 'americanWomanWeightHeight.csv'
outputfile = 'americanWomanWeightHeight.json'

csvfile = open(inputfile, 'r')
jsonfile = open(outputfile, 'w')

raw_data = []

#fieldnames = ("FirstName","LastName","IDNumber","Message")
reader = csv.DictReader(csvfile)
for row in reader:
	height = row['height']
	weight = row['weight']
	
	raw_data.append({"hei" : height, "weight" : weight})

jsondata = json.dumps(raw_data)
jsonfile.write(jsondata)

