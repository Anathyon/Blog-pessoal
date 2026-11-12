# Anathyon Erysson — Portfólio

Portfólio de **Anathyon Erysson**, desenvolvedor front-end na **Plugwin Sistemas**.
Sites institucionais, portais e plataformas web com React, TypeScript e Tailwind CSS.

🔗 **https://anathyon-erysson-programador.web.app** · [LinkedIn](https://www.linkedin.com/in/anathyonerysson/) · [Currículo (PDF)](blog-p-app/public/pdf-cv/Anathyon-Erysson-Curriculo.pdf)

## Stack

- **React 19 + TypeScript** (modo estrito) com **Vite**
- **Tailwind CSS v4** (tokens de design em `src/index.css` via `@theme`)
- **Framer Motion** com respeito a `prefers-reduced-motion`
- **Firebase** (Auth anônima + Firestore) no formulário de contato, carregado sob demanda
- Deploy na **Vercel** com cabeçalhos de segurança (CSP, HSTS etc.) em `vercel.json`

## Estrutura

```
blog-p-app/
├── cv/curriculo.html          # fonte do currículo (gera o PDF)
├── public/
│   ├── img-projetos/          # prints dos projetos (.webp)
│   ├── logo/logo.svg          # logo / favicon
│   └── pdf-cv/                # currículo em PDF
└── src/
    ├── data/                  # ✏️ conteúdo: perfil, projetos, experiência, skills
    ├── lib/contact.ts         # envio do formulário (Firebase lazy)
    └── components/            # Header, Hero, About, Experience, projects/, Skills, Contact, Footer
```

Quase toda atualização de conteúdo é feita só em `src/data/`.

### Adicionar ou atualizar um projeto

1. Salve o print em `public/img-projetos/<slug>.webp` (~1200 px de largura, proporção ~2:1).
   Para converter: `cwebp -q 80 -resize 1200 0 print.png -o public/img-projetos/<slug>.webp`
2. Em `src/data/projects.ts`, adicione/edite o objeto e preencha `image: '/img-projetos/<slug>.webp'`.
   Sem `image`, o card mostra uma capa gerada com as cores de `accent`.
3. `featured: true` coloca o projeto entre os primeiros da aba.

### Atualizar o currículo

Edite `blog-p-app/cv/curriculo.html` e gere o PDF:

```bash
pip install weasyprint
weasyprint blog-p-app/cv/curriculo.html blog-p-app/public/pdf-cv/Anathyon-Erysson-Curriculo.pdf
```

(Alternativa: abra o HTML no navegador → Imprimir → Salvar como PDF.)

## Rodando localmente

```bash
cd blog-p-app
cp .env.example .env   # opcional: credenciais do Firebase para o formulário
npm install
npm run dev            # desenvolvimento
npm run check          # typecheck + lint
npm run build          # build de produção
```

Sem as variáveis do Firebase, o formulário abre o cliente de e-mail do visitante com a mensagem preenchida.

## Firestore

As regras em `firestore.rules` permitem **apenas criar** mensagens válidas em `contact_messages`
(ninguém lê pelo cliente). Para publicar: `firebase deploy --only firestore:rules`.
