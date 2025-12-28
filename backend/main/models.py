from django.db import models

class Ring(models.Model):
    name = models.CharField(max_length=255, blank=True)
    brand = models.CharField(max_length=255, blank=True)
    color = models.CharField(max_length=50, blank=True)
    diamond_shape = models.CharField(max_length=50, blank=True)

    # Image URL from online source
    image_url = models.URLField(max_length=1000)

    # Crop properties (ratios 0.0 to 1.0)
    crop_x = models.FloatField(default=0.0)
    crop_y = models.FloatField(default=0.0)
    crop_width = models.FloatField(default=1.0)
    crop_height = models.FloatField(default=1.0)

    # Ranking fields
    total_votes = models.PositiveIntegerField(default=0)
    total_wins = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name or "Ring"

    @property
    def win_ratio(self):
        if self.total_votes == 0:
            return 0
        return self.total_wins / self.total_votes
