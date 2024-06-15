from django.db import models

# Create your models here.
class SeatAllotment(models.Model):
    institute = models.CharField(max_length=255)
    academic_program = models.CharField(max_length=255)
    seat_type = models.CharField(max_length=255)
    gender = models.CharField(max_length=255, null=True)
    opening_rank = models.IntegerField()
    closing_rank = models.IntegerField()
    year = models.IntegerField()
    rounds = models.IntegerField() #round is not valid

 #The __str__ method is added to provide a readable string representation
 # of the model instances, which is helpful when working with the Django admin interface or debugging.  
def __str__(self):
    return f"{self.institute} - {self.academic_program_name} ({self.year})"  