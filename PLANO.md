# PLANO DO PROJETO: Projeto Profissional Full-Stack + Neon DB

> Gerado automaticamente pelo SK Code Editor em 16/08/2026, 15:47:17
> **13 arquivo(s)** | **~430 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Backend/API (Node.js + Express)
- **Backend / Dados:** Node.js + Express, PostgreSQL (Neon)
- **Versao:** 1.0.0
- **Descricao:** Projeto Full-Stack profissional com Neon DB

**Para rodar o projeto:**
```bash
npm install && npm run dev
```

---

## ESTRUTURA DE ARQUIVOS

```
Projeto Profissional Full-Stack + Neon DB/
├── .sk/
│   └── memoria.json
├── db/
│   ├── migrate.js
│   └── neon.js
├── src/
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── usuarios.js
│   └── index.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── supabase.js
```

---

## STACK TECNOLOGICO DETECTADO

- **Backend:** Node.js + Express, PostgreSQL (Neon)
- **Todos os pacotes (13):** express, cors, dotenv, @neondatabase/serverless, bcryptjs, jsonwebtoken, helmet, express-rate-limit, @supabase/supabase-js, axios, socket.io, vite, nodemon

---

## ROTAS DA API (endpoints detectados automaticamente)

```
GET    /api/health  (em src/index.js)
USE    /api/auth  (em src/index.js)
USE    /api/usuarios  (em src/index.js)
POST   /register  (em src/routes/auth.js)
POST   /login  (em src/routes/auth.js)
GET    /perfil  (em src/routes/usuarios.js)
```

---

## SCRIPTS DISPONIVEIS (package.json)

```bash
npm run start         # node src/index.js
npm run dev           # nodemon src/index.js
npm run migrate       # node db/migrate.js
npm run test          # jest
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
DATABASE_URL=seu_valor_aqui
PORT=seu_valor_aqui
ALLOWED_ORIGINS=seu_valor_aqui
JWT_SECRET=seu_valor_aqui
JWT_EXPIRES_IN=seu_valor_aqui
SUPABASE_URL=seu_valor_aqui
SUPABASE_ANON_KEY=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `src/index.js` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 Raiz do Projeto (pasta principal)
> Arquivos de configuracao e pontos de entrada ficam aqui.

**`.env`** _(3 linhas)_
Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.

**`.env.example`** _(3 linhas)_
Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.

**`.gitignore`** _(47 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`README.md`** _(68 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`package.json`** _(29 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`supabase.js`** _(78 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `.sk/`
> Pasta '.sk' — agrupamento de arquivos relacionados.

**`memoria.json`** _(1 linha)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

---

### 📁 `db/`
> Pasta 'db' — agrupamento de arquivos relacionados.

**`migrate.js`** _(13 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`neon.js`** _(24 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`index.js`** _(59 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `src/middleware/`
> Funcoes intermediarias que processam requisicoes antes das rotas.

**`auth.js`** _(18 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `src/routes/`
> Definicao das URLs e navegacao do app.

**`auth.js`** _(67 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`usuarios.js`** _(20 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: Projeto Profissional Full-Stack + Neon DB
Tipo: Backend/API (Node.js + Express)
Arquivos: 13 | Linhas: ~430
Rotas API: 6 endpoint(s) detectado(s)
Variaveis de ambiente necessarias: DATABASE_URL, PORT, ALLOWED_ORIGINS, JWT_SECRET, JWT_EXPIRES_IN, SUPABASE_URL, SUPABASE_ANON_KEY

Estrutura principal:
  .env
  .env.example
  .gitignore
  .sk/memoria.json
  README.md
  db/migrate.js
  db/neon.js
  package.json
  src/index.js
  src/middleware/auth.js
  src/routes/auth.js
  src/routes/usuarios.js
  supabase.js
```

---

*Plano gerado pelo SK Code Editor — 16/08/2026, 15:47:17*