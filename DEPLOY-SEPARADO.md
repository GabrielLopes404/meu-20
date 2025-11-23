# 🚀 Guia de Deploy Separado - Vercel + Render

Este guia mostra como fazer deploy do **frontend no Vercel** e do **backend no Render** separadamente.

---

## 📋 Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Conta no [Render](https://render.com)
3. Repositório GitHub/GitLab com o código do projeto
4. Git instalado localmente

---

## 🎯 PARTE 1: Deploy do BACKEND no Render

### Passo 1: Preparar o Projeto

1. Certifique-se de que o arquivo `render.yaml` está na raiz do projeto (já está incluído)
2. Faça commit de todas as alterações:
   ```bash
   git add .
   git commit -m "Preparar para deploy no Render"
   git push origin main
   ```

### Passo 2: Criar Serviço no Render

1. Acesse [dashboard.render.com](https://dashboard.render.com)
2. Clique em **"New +"** → **"Web Service"**
3. Conecte seu repositório GitHub/GitLab
4. Selecione o repositório do projeto

### Passo 3: Configurar o Serviço

**Configure os seguintes campos:**

- **Name:** `lopes-designer-backend` (ou o nome que preferir)
- **Region:** `Oregon (US West)` (ou mais próximo de você)
- **Branch:** `main`
- **Runtime:** `Node`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Instance Type:** `Free` (ou o plano que preferir)

### Passo 4: Variáveis de Ambiente (Backend)

Na seção **Environment Variables**, adicione:

```
NODE_ENV=production
PORT=10000
```

**Se você tiver banco de dados PostgreSQL no Render:**
```
DATABASE_URL=sua_url_do_postgres
```

### Passo 5: Deploy

1. Clique em **"Create Web Service"**
2. Aguarde o build completar (5-10 minutos na primeira vez)
3. Após o deploy, copie a URL do seu backend
   - Exemplo: `https://lopes-designer-backend.onrender.com`

**⚠️ IMPORTANTE:** Guarde esta URL, você vai precisar dela para o frontend!

---

## 🎨 PARTE 2: Deploy do FRONTEND no Vercel

### Passo 1: Configurar Variável de Ambiente do Backend

Antes de fazer deploy no Vercel, você precisa da URL do backend que você copiou no Passo 5 acima.

### Passo 2: Criar Projeto no Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **"Import Project"**
3. Selecione o mesmo repositório GitHub/GitLab
4. Configure o projeto:

**Configurações do Projeto:**

- **Project Name:** `lopes-designer` (ou o nome que preferir)
- **Framework Preset:** `Vite`
- **Root Directory:** `./` (deixe em branco ou `.`)
- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`
- **Install Command:** `npm install`

### Passo 3: Variáveis de Ambiente (Frontend)

Na seção **Environment Variables**, adicione:

```
VITE_API_URL=https://lopes-designer-backend.onrender.com
```

**⚠️ IMPORTANTE:** Substitua pela URL real do seu backend no Render!

### Passo 4: Deploy

1. Clique em **"Deploy"**
2. Aguarde o build completar (2-5 minutos)
3. Seu site estará disponível em `https://seu-projeto.vercel.app`

---

## ✅ PARTE 3: Verificação e Testes

### Checklist Pós-Deploy

**Backend (Render):**
- [ ] Serviço está rodando sem erros
- [ ] URL está acessível: `https://seu-backend.onrender.com`
- [ ] Endpoints da API respondem: `https://seu-backend.onrender.com/api/portfolio`

**Frontend (Vercel):**
- [ ] Site carrega corretamente
- [ ] Não há erros no console do navegador (F12)
- [ ] Imagens e assets carregam
- [ ] Links funcionam
- [ ] Seções do portfólio aparecem

### Testar a Integração

1. Abra o site no Vercel: `https://seu-projeto.vercel.app`
2. Abra o console do navegador (F12 → Console)
3. Verifique se não há erros de conexão com a API
4. Role pela página e veja se todos os dados carregam (portfólio, serviços, etc.)

---

## 🔧 Solução de Problemas Comuns

### Problema 1: Frontend não conecta ao Backend

**Solução:**
1. Verifique se a variável `VITE_API_URL` está correta no Vercel
2. Vá em **Project Settings** → **Environment Variables**
3. Confirme que a URL é exatamente a do Render
4. Após alterar, faça um novo deploy (Deployments → Redeploy)

### Problema 2: Erro 503 no Backend (Render)

**Solução:**
- Plano Free do Render hiberna após 15 minutos de inatividade
- Primeira requisição pode demorar 30-60 segundos para "acordar"
- Isso é normal no plano gratuito

### Problema 3: Erro de CORS

**Solução:**
1. Verifique os logs do backend no Render
2. Certifique-se de que o backend aceita requisições do domínio do Vercel

### Problema 4: Imagens não carregam

**Solução:**
1. Certifique-se de que a pasta `attached_assets` foi incluída no build
2. Verifique se as imagens estão commitadas no Git
3. Use caminhos relativos ou a URL do backend para assets

---

## 🔄 Atualizações Futuras

### Para Atualizar o Backend (Render):

1. Faça commit das alterações no Git
2. Faça push para o repositório
3. Render fará deploy automático

### Para Atualizar o Frontend (Vercel):

1. Faça commit das alterações no Git
2. Faça push para o repositório
3. Vercel fará deploy automático

---

## 📊 Monitoramento

### Render (Backend):
- Acesse: [dashboard.render.com](https://dashboard.render.com)
- Clique no seu serviço
- Veja logs em tempo real na aba **"Logs"**

### Vercel (Frontend):
- Acesse: [vercel.com/dashboard](https://vercel.com/dashboard)
- Clique no seu projeto
- Veja logs e analytics

---

## 💰 Custos

### Plano Free - Render (Backend):
- ✅ 750 horas/mês grátis
- ⚠️ Hiberna após 15 min de inatividade
- ⚠️ Máximo de 500 MB RAM
- ✅ Deploy automático via Git

### Plano Hobby - Vercel (Frontend):
- ✅ Totalmente grátis
- ✅ 100 GB de bandwidth/mês
- ✅ Deploy automático via Git
- ✅ HTTPS automático
- ✅ CDN global

---

## 🎉 Pronto!

Seu projeto agora está rodando com:
- ✅ Frontend otimizado no Vercel (CDN global)
- ✅ Backend escalável no Render
- ✅ Deploy automático via Git
- ✅ HTTPS em ambos os serviços
- ✅ ZERO erros!

---

## 📞 Suporte

Se encontrar problemas:

1. **Logs do Render:** Verifique os logs do backend
2. **Console do Navegador:** Verifique erros no frontend (F12)
3. **Documentação Render:** [render.com/docs](https://render.com/docs)
4. **Documentação Vercel:** [vercel.com/docs](https://vercel.com/docs)

---

**Desenvolvido com 💜 por Lopes Designer**
