from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    ROLE_CHOICES = (
        ('CITIZEN', 'Citizen'),
        ('AUTHORITY', 'Authority'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='CITIZEN')

    def __str__(self):
        return self.username
