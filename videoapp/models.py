from django.db import models

class VideoType(models.Model):
    """
    Model for video types
    """

    name = models.CharField(max_length=128, blank=False)

class Video(models.Model):
    """
    Model for uploaded videos
    """

    title = models.CharField(max_length=128, blank=False)
    video_type = models.ForeignKey("VideoType", on_delete=models.CASCADE, blank=False)
    speaker = models.CharField(max_length=32)
    date = models.DateTimeField()
    url = models.URLField()
