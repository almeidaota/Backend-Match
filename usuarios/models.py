# usuarios/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    # Sobrescrevendo o campo de nome para não usar 'first_name'
    nome = models.CharField(max_length=100)
    
    # Campo 'tipo' da sua tabela original 
    tipo = models.CharField(max_length=20)

    # Definimos que o email será usado para login
    USERNAME_FIELD = 'email'
    
    # Campos obrigatórios ao criar um superusuário
    REQUIRED_FIELDS = ['username', 'nome']
    
    # Sobrescrevemos o campo email para garantir que seja único
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email