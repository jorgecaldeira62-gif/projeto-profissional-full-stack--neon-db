# Meu Projeto Full-Stack

> API REST profissional com autenticação JWT e banco PostgreSQL (Neon)

## Stack
- **Backend**: Node.js + Express
- **Banco de dados**: PostgreSQL via Neon DB (serverless, gratuito)
- **Autenticação**: JWT (JSON Web Tokens)
- **Segurança**: Helmet, CORS, Rate Limiting

## Setup Rápido

```bash
# 1. Clone o repositório
git clone <sua-url>
cd meu-projeto

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com seu DATABASE_URL do Neon

# 4. Inicialize o banco de dados
npm run migrate

# 5. Inicie o servidor
npm run dev
```

## Variáveis de Ambiente
Veja [.env.example](.env.example) para a lista completa.

## Rotas da API

### Autenticação
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /api/auth/register | Criar conta |
| POST | /api/auth/login | Fazer login |

### Usuários (protegido)
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/usuarios/perfil | Meu perfil |

## Deploy

### Railway (recomendado)
1. `git push` para GitHub
2. Importe o repo em [railway.app](https://railway.app)
3. Configure `DATABASE_URL` nas variáveis de ambiente

### Render
1. `git push` para GitHub
2. Crie Web Service em [render.com](https://render.com)
3. Build: `npm install` | Start: `npm start`

## Enviando para GitHub
```bash
git init
git add .
git commit -m "Projeto inicial"
git remote add origin <url-do-seu-repo>
git push -u origin main
```
