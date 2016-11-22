#!/usr/bin/env python
# Name: Nicol Heijtbrink
# Student number: 10580611

import json

#from pattern.web import URL, DOM, plaintext
#from pattern.web import NODE, TEXT, COMMENT, ELEMENT, DOCUMENT
from pattern.web import Wikipedia, WikipediaSection, WikipediaTable

raw_data = {}

# Using the Wikipedia query the table is scraped from Wikipedia
article = Wikipedia().search('List of European countries by population')
section = WikipediaSection(article, title='Table', start=0, stop=100000000000, level=1)
table = section.tables[0]

print("START")

rows = table.rows
for row in rows:
    
    country = row[1].encode('ascii', 'ignore')
    
    country = country.split(' [')[0]
    
    population = row[2]
    
    # raw_data.append({"country" : country, "population" : population})
    raw_data[country] = population

print(raw_data)
print "___________________________________"

population_data = {"Points" : raw_data}
print(population_data)
print "___________________________________"


json_data = json.dumps(raw_data)
print(json_data)

text_file = open("Data2.txt", "w")
text_file.write(json_data)
text_file.close()



