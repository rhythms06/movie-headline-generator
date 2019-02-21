import csv

with open('imdb_names_02_21_19.tsv') as tsvfile:
	reader = csv.DictReader(tsvfile, dialect='excel-tab')
	file = open("actors.txt", "w")
	for row in reader:
		job = row['primaryProfession']
		birth = row['birthYear']
		death = row['deathYear']
		if(job[0:3] == 'act' and death[0:2] == '\N' and birth[0:2] != '\N'):
			file.write("%s\n" % row['primaryName'])