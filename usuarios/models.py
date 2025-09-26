# usuarios/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    nome = models.CharField(max_length=100)
    
    tipo = models.CharField(max_length=20)

    USERNAME_FIELD = 'email'
    
    REQUIRED_FIELDS = ['username', 'nome']
    
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email