#data_d3map.py

#!/usr/bin/env python
# Name: Nicol Heijtbrink
# Student number: 10580611

import csv
import json

inputfile = 'weatherdata1994.csv'
outputfile = 'weatherdata1994.json'

csvfile = open(inputfile, 'r')
jsonfile = open(outputfile, 'w')

raw_data = []

#STN,YYYYMMDD,   TG,   TN,   TX
#city, date, average temperature, lowest temperature, highest temperature

reader = csv.DictReader(csvfile)
for row in reader:
	citycode = int(row['STN'])
	city = "______"
	if (citycode == 270):
		city = "Leeuwarden"
	elif (citycode == 380):
		city = "Maastricht"
	date = row['YYYYMMDD']
	min_temp = int(row['TN'])
	max_temp = int(row['TX'])
	avg_temp = int(row['TG'])
	
 	raw_data.append({"city": city, "date": date, "temperatures" : [min_temp, max_temp, avg_temp]})

jsondata = json.dumps(raw_data)
print jsondata
jsonfile.write(jsondata)

