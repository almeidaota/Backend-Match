from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model # <--- A MUDANÇA IMPORTANTE
from django.contrib import messages

# Isso pega o seu modelo 'Usuario' definido no settings.py
User = get_user_model() 

def index(request):
    return render(request, 'index.html')

def login_fatec(request):
    from django.contrib.auth import authenticate, login
    from django.contrib.auth.forms import AuthenticationForm
    
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('dashboard')
        else:
            messages.error(request, "E-mail ou senha inválidos.")
    else:
        form = AuthenticationForm()

    return render(request, 'login_fatec.html', {'form': form})

def cadastro_fatec(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        confirmar_senha = request.POST.get('confirmarSenha')
        
        # Pega os campos extras também
        registro = request.POST.get('registro')
        telefone = request.POST.get('telefone')
        # Esportes (opcional: você pode salvar isso no banco depois se tiver campo pra isso)
        
        # Validação de senhas
        if senha != confirmar_senha:
            messages.error(request, "As senhas não coincidem.")
            return render(request, 'cadastro_fatec.html')

        # Verifica se usuário existe usando o modelo CORRETO
        if User.objects.filter(username=email).exists():
            messages.error(request, "Este e-mail já está cadastrado.")
            return render(request, 'cadastro_fatec.html')

        try:
            # Cria o usuário no modelo personalizado
            # Estamos salvando o email também como username para facilitar o login
            user = User.objects.create_user(username=email, email=email, password=senha)
            
            # Tenta salvar os campos extras SE o seu modelo Usuario tiver esses campos.
            # Se der erro aqui, significa que seu models.py não tem 'registro' ou 'telefone'.
            if hasattr(user, 'registro'): 
                user.registro = registro
            if hasattr(user, 'telefone'):
                user.telefone = telefone
                
            user.save()
            
            messages.success(request, "Cadastro realizado com sucesso! Faça login.")
            return redirect('login_fatec')
            
        except Exception as e:
            messages.error(request, f"Erro ao cadastrar: {e}")

    return render(request, 'cadastro_fatec.html')

def reservar(request):
    return render(request, 'reservar.html')

# Mantenha suas views antigas (Dashboard, Signup) abaixo se quiser...
from django.contrib.auth.decorators import login_required

@login_required
def dashboard_view(request):
    context = {
        # Tenta pegar o nome, se não tiver, pega o username
        'nome_usuario': getattr(request.user, 'nome', request.user.username) 
    }
    return render(request, 'dashboard.html', context)