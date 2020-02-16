from django.db import models

class Video(models.Model):
	"""Model for uploaded videos"""

	title = models.CharField(max_length=128, blank=False)	
	speaker = models.CharField(max_length=32)
	date = models.DateTimeField()
	url = models.URLField()
