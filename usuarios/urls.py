from django.urls import path
from . import views 

urlpatterns = [
    # --- Telas do Novo Frontend ---
    
    # Página Inicial (Carrossel)
    path('', views.index, name='index'),

    # Login Visual Novo
    path('login-fatec/', views.login_fatec, name='login_fatec'),

    # Cadastro Visual Novo
    path('cadastro-fatec/', views.cadastro_fatec, name='cadastro_fatec'),

    # Tela de Reservas
    path('reservar/', views.reservar, name='reservar'),

    # --- Telas Logadas ---
    
    # Dashboard (Só acessa se logar)
    path('dashboard/', views.dashboard_view, name='dashboard'),
]