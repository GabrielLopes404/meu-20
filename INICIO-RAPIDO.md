# 🚀 Início Rápido - Lopes Designer Portfolio

## ✅ Projeto PRONTO para usar!

Este projeto está 100% configurado e funcionando. Você pode:

---

## 🎯 Opção 1: Usar no Replit (ATUAL)

**O projeto já está rodando!** ✅

- ✅ Servidor ativo na porta 5000
- ✅ Frontend React com HMR (Hot Module Replacement)
- ✅ Backend Express funcionando
- ✅ Todas as APIs respondendo
- ✅ ZERO erros!

### Para Publicar no Replit:
1. Clique no botão **"Publish"** no topo
2. O deploy já está configurado automaticamente!

---

## 🎯 Opção 2: Deploy no Vercel (COMPLETO)

**Deploy mais rápido:** Frontend + Backend juntos

```bash
# 1. Fazer push para GitHub
git add .
git commit -m "Deploy no Vercel"
git push origin main

# 2. Importar no Vercel
# - Acesse: vercel.com/new
# - Importe o repositório
# - Deploy automático!
```

**Tempo estimado:** 5 minutos  
**Documentação:** [DEPLOY.md](./DEPLOY.md)

---

## 🎯 Opção 3: Deploy Separado (Vercel + Render)

**Melhor performance:** Frontend no Vercel, Backend no Render

### Backend no Render:
```bash
# 1. Conecte repositório no Render
# 2. Use configuração do render.yaml (já incluído!)
# 3. Copie a URL do backend
```

### Frontend no Vercel:
```bash
# 1. Conecte repositório no Vercel
# 2. Configure variável de ambiente:
VITE_API_URL=https://seu-backend.onrender.com

# 3. Deploy!
```

**Tempo estimado:** 15 minutos  
**Documentação completa:** [DEPLOY-SEPARADO.md](./DEPLOY-SEPARADO.md)

---

## 📋 Comandos Disponíveis

```bash
# Desenvolvimento (já está rodando!)
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start

# Verificar tipos TypeScript
npm run check

# Sincronizar banco de dados (se configurado)
npm run db:push
```

---

## 📁 Estrutura do Projeto

```
├── client/              # Frontend React + Vite
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── lib/         # Utilitários e configuração
│   │   ├── pages/       # Páginas da aplicação
│   │   └── main.tsx     # Entrada do React
│   └── public/          # Assets públicos
│
├── server/              # Backend Express
│   ├── app.ts           # Configuração Express
│   ├── routes.ts        # Rotas da API
│   ├── index-dev.ts     # Servidor desenvolvimento
│   └── index-prod.ts    # Servidor produção
│
├── shared/              # Tipos compartilhados
│   └── schema.ts        # Schema do banco
│
├── data/                # Dados JSON (portfólio, serviços, etc)
│
├── attached_assets/     # Imagens e assets
│
└── dist/                # Build de produção (gerado)
```

---

## 🔧 Variáveis de Ambiente

### Deploy Completo (Vercel ou Replit):
**Nenhuma variável necessária!** ✅

### Deploy Separado (Vercel + Render):

**Frontend (.env no Vercel):**
```env
VITE_API_URL=https://seu-backend.onrender.com
```

**Backend (.env no Render):**
```env
NODE_ENV=production
PORT=10000
```

**Arquivo de exemplo:** [.env.example](./.env.example)

---

## 🎨 Tecnologias

### Frontend:
- ⚛️ React 18 + TypeScript
- ⚡ Vite (build ultrarrápido)
- 🎨 Tailwind CSS + Radix UI
- 🎭 Framer Motion (animações)
- 🔄 TanStack Query (gerenciamento de estado)

### Backend:
- 🚀 Express.js + TypeScript
- 📊 PostgreSQL + Drizzle ORM (pronto para usar)
- 🔐 Passport.js (autenticação - opcional)

---

## ❓ Perguntas Frequentes

### P: Como adicionar novas seções ao portfólio?
**R:** Edite os arquivos JSON em `/data/` (portfolio.json, services.json, etc)

### P: Como personalizar as cores?
**R:** Edite `client/src/index.css` - todas as cores estão em CSS variables

### P: Como adicionar banco de dados?
**R:** 
1. Configure `DATABASE_URL` nas variáveis de ambiente
2. Execute `npm run db:push` para criar as tabelas
3. Atualize `server/storage.ts` para usar o banco

### P: Como otimizar as imagens?
**R:** Coloque as imagens em `attached_assets/` e o Vite fará a otimização automática

### P: Posso usar outro framework CSS?
**R:** Sim! O projeto usa Tailwind, mas você pode adicionar qualquer framework

---

## 🐛 Solução de Problemas

### Erro: "Port 5000 already in use"
```bash
# Mate o processo na porta 5000
npx kill-port 5000

# Ou use outra porta
PORT=3000 npm run dev
```

### Erro de build no Vercel
1. Verifique se `package.json` tem todos os scripts
2. Confirme que `npm run build` funciona localmente
3. Veja os logs de build no painel do Vercel

### API não conecta (deploy separado)
1. Confirme que `VITE_API_URL` está configurado
2. Verifique CORS no backend (se necessário)
3. Teste a URL do backend diretamente

---

## 📚 Documentação Completa

- 📖 [Opções de Deploy](./README-DEPLOY-OPTIONS.md) - Compare todas as opções
- 🚀 [Deploy Vercel Completo](./DEPLOY.md) - Frontend + Backend juntos
- 🔀 [Deploy Separado](./DEPLOY-SEPARADO.md) - Vercel + Render
- 🎨 [Guidelines de Design](./design_guidelines.md) - Padrões visuais
- 📝 [Documentação do Projeto](./replit.md) - Arquitetura completa

---

## 🎉 Próximos Passos

1. ✅ **Explorar o projeto** - Role pela página e veja todas as seções
2. 📝 **Personalizar conteúdo** - Edite os arquivos em `/data/`
3. 🎨 **Ajustar design** - Modifique cores e estilos em `index.css`
4. 🚀 **Fazer deploy** - Escolha uma das opções acima
5. 📊 **Adicionar analytics** - Google Analytics, Vercel Analytics, etc

---

## 💜 Suporte

Problemas? Perguntas?

1. Consulte a documentação completa
2. Verifique os logs no console (F12)
3. Confira os exemplos em `/data/`

---

**Desenvolvido com 💜 por Lopes Designer**

**Status:** ✅ Rodando perfeitamente  
**Última atualização:** Novembro 2025  
**Versão:** 1.0.0
