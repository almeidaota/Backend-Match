from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import CustomUserCreationForm
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login') # Redireciona para a página de login após o sucesso
    template_name = 'registration/signup.html'

@login_required
def dashboard_view(request):
    # Passamos o nome do usuário para o template, para deixar a piada mais pessoal
    context = {
        'nome_usuario': request.user.nome 
    }
    return render(request, 'dashboard.html', context)