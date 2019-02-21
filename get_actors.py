import csv

with open('imdb_names_02_21_19.tsv') as tsvfile:
	reader = csv.DictReader(tsvfile, dialect='excel-tab')
	file = open("actors.txt", "w")
	for row in reader:
		job = row['primaryProfession']
		if(job[0:3] == 'act'):
			file.write("%s\n" % row['primaryName'])