# 🚀 Deploy no Vercel - Guia Definitivo

## ✅ Pré-requisitos

- Código enviado para o GitHub
- Conta no Vercel (https://vercel.com)

---

## ⚙️ Configurações CORRETAS do Vercel

Use **EXATAMENTE** estas configurações (muito importante!):

### **Framework Preset:**
```
Vite
```

### **Build Command:**
```
npm run build
```

### **Output Directory:**
```
dist/public
```
⚠️ **ATENÇÃO:** Não é só `dist`! Tem que ser `dist/public`!

### **Install Command:**
```
npm install
```

### **Root Directory:**
```
./
```
(Deixe em branco ou use `./`)

---

## 🎯 Passo a Passo Completo

### **1. Fazer Push para o GitHub**

```bash
git add .
git commit -m "Configurar para deploy no Vercel"
git push origin main
```

### **2. Importar no Vercel**

1. Acesse https://vercel.com
2. Faça login com GitHub
3. Clique em "Add New..." → "Project"
4. Selecione seu repositório
5. Clique em "Import"

### **3. Configurar**

Na tela de configuração:

- **Project Name:** `lopes-designer` (ou o que preferir)
- **Framework Preset:** `Vite`
- **Root Directory:** `./` (padrão)
- **Build Command:** `npm run build` ✅
- **Output Directory:** `dist/public` ✅
- **Install Command:** `npm install` ✅

**NÃO adicione variáveis de ambiente** - não precisa!

### **4. Deploy**

1. Clique no botão **"Deploy"**
2. Aguarde 3-5 minutos
3. Quando aparecer 🎉 = **SUCESSO!**

---

## 🔧 Estrutura do Projeto

Este projeto usa:

- **Frontend:** React + Vite → build em `dist/public/`
- **Backend (API):** Serverless Functions do Vercel (5 endpoints individuais)
- **Dados:** JSON files em `data/` (lidos pelas serverless functions)

### **Serverless Functions Criadas:**

- `api/portfolio.js` - Endpoint `/api/portfolio`
- `api/services.js` - Endpoint `/api/services`
- `api/testimonials.js` - Endpoint `/api/testimonials`
- `api/faqs.js` - Endpoint `/api/faqs`
- `api/before-after.js` - Endpoint `/api/before-after`

### **Arquivos Importantes:**

- `vercel.json` - Configuração do Vercel com roteamento correto (✅ configurado)
- `api/*.js` - 5 serverless functions para as APIs (✅ criadas)
- `data/*.json` - Arquivos de dados lidos pelas APIs
- `package.json` - Dependências e scripts de build
- `vite.config.ts` - Configuração do Vite

---

## ✅ Checklist

Antes de fazer deploy, confirme:

- [ ] Código está no GitHub
- [ ] Arquivo `vercel.json` existe na raiz do projeto
- [ ] Pasta `api/` existe com `index.js` dentro
- [ ] `npm run build` funciona localmente sem erros
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist/public`

---

## 🎉 Após o Deploy

Seu portfolio estará online em:
```
https://seu-projeto.vercel.app
```

**Recursos disponíveis:**
- ✅ Frontend completo (React + Vite)
- ✅ APIs funcionando (`/api/portfolio`, `/api/services`, etc)
- ✅ Imagens em `/attached_assets/`
- ✅ HTTPS automático
- ✅ Atualizações automáticas a cada push no GitHub

---

## 🔄 Atualizações Futuras

Para atualizar o site:

```bash
git add .
git commit -m "Atualização do portfolio"
git push origin main
```

Vercel faz deploy automático em 2-3 minutos! 🚀

---

## 🐛 Solução de Problemas

### **Build falhou:**
- Verifique se `npm run build` funciona localmente
- Confirme que todos os arquivos foram enviados para o GitHub

### **404 nas APIs:**
- Confirme que a pasta `api/` existe no GitHub
- Verifique se `vercel.json` está na raiz do projeto

### **Site não carrega:**
- Confirme Output Directory: `dist/public`
- Aguarde 2-3 minutos após o deploy
- Limpe o cache (Ctrl + Shift + R)

### **Imagens não aparecem:**
- Verifique se a pasta `attached_assets/` foi enviada para o GitHub
- Confirme que as imagens existem no caminho correto

---

## 📞 Suporte

Se tiver problemas:
1. Verifique os logs de build no painel do Vercel
2. Confirme que todas as configurações estão corretas
3. Tente fazer um Redeploy

---

**Desenvolvido com 💜 por Lopes Designer**
