# Protótipo de Sistema de Reservas (Trabalho de Engenharia de Software)

Este projeto é um protótipo desenvolvido para a disciplina de Engenharia de Software, focado na implementação de um sistema de cadastro e login de usuários. A aplicação utiliza o framework Django para o backend e um banco de dados PostgreSQL containerizado com Docker.

## Tecnologias Utilizadas

* **Backend:** Django
* **Banco de Dados:** PostgreSQL
* **Containerização:** Docker e Docker Compose

## Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas na sua máquina:
* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Configuração do Ambiente

Para que a aplicação se conecte corretamente ao banco de dados, é necessário configurar as variáveis de ambiente.

1.  **Crie um arquivo `.env`** na raiz do projeto (na mesma pasta que o `manage.py`).

2.  **Copie o conteúdo abaixo** para o seu arquivo `.env`. Estes valores devem ser os mesmos que você definiu no seu arquivo `docker-compose.yml`.

    ```env
    DB_NAME=reservas_db
    DB_USER=admin
    DB_PASSWORD=strongpassword
    DB_HOST=localhost
    DB_PORT=5432
    ```

## Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

1.  **Clone o Repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    cd <nome-da-pasta-do-projeto>
    ```

2.  **Inicie o Banco de Dados:**
    Este comando irá baixar a imagem do PostgreSQL e iniciar o container do banco de dados em segundo plano.
    ```bash
    docker-compose up -d
    ```

3.  **Crie e Ative o Ambiente Virtual Python:**
    ```bash
    # Criar o ambiente
    python -m venv venv

    # Ativar no Linux/macOS
    source venv/bin/activate

    # Ativar no Windows
    .\venv\Scripts\activate
    ```

4.  **Instale as Dependências:**
    (Primeiro, certifique-se de ter um arquivo `requirements.txt`. Se não tiver, gere-o com `pip freeze > requirements.txt`)
    ```bash
    pip install -r requirements.txt
    ```

5.  **Aplique as Migrações:**
    Estes comandos criarão as tabelas no banco de dados com base nos modelos do Django.
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

6.  **Crie um Superusuário (Opcional):**
    Para acessar a área administrativa do Django.
    ```bash
    python manage.py createsuperuser
    ```

7.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    python manage.py runserver
    ```

Agora você pode acessar a aplicação em [http://127.0.0.1:8000/](http://127.0.0.1:8000/).