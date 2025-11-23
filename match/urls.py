from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Mantém as rotas de autenticação padrão (opcional, mas bom ter)
    path('accounts/', include('django.contrib.auth.urls')),
    
    # --- A MÁGICA ESTÁ AQUI ---
    # Ao usar string vazia '' e include, dizemos:
    # "Qualquer rota que não seja admin ou accounts, procure no app usuarios"
    path('', include('usuarios.urls')), 
]