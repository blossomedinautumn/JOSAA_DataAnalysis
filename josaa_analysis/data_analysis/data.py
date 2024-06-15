import csv
from .models import SeatAllotment

def data():
	with open('data.csv','r') as csvfile:
		reader = csv.DictReader(csvfile)
		for row in reader:
			seat_allotment = SeatAllotment(
				institute=row['Institute'],
                academic_program_name=row['Academic Program Name'],
                seat_type=row['Seat Type'],
                gender=row['Gender'],
                opening_rank=int(row['Opening Rank']),
                closing_rank=int(row['Closing Rank']),
                year=int(row['Year']),
                round=int(row['Round'])
                )
			seat_allotment.save()

    print("Data imported successfully!")        