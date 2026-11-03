# 📱 MoodShot

## Inteligência que entende cada momento.

O **MoodShot** é um projeto desenvolvido pela **Apexxon Consultoria** como proposta de inovação para a câmera do próximo smartphone **Jovi**. A ideia é transformar a fotografia em uma experiência mais prática e inteligente, usando **Inteligência Artificial** para adaptar a câmera ao contexto escolhido pelo usuário (festa, estudo, viagem ou encontro).

Nesta Sprint 4, a landing page da Sprint 3 evoluiu para uma aplicação React completa, com rotas públicas e privadas, login, consumo de API e uma área do usuário onde é possível registrar e organizar os próprios momentos.

## 🔗 Links

- **Deploy na Vercel:** https://moodshot-three.vercel.app
- **Repositório no GitHub:** https://github.com/mateustavaresw/Moodshot-front-web

## 💻 Tecnologias utilizadas

- **React 19**: biblioteca para construção da interface
- **Vite 8**: ferramenta de desenvolvimento e build
- **React Router DOM 7**: rotas públicas e privadas
- **Tailwind CSS 4**: estilização e responsividade
- **JavaScript (ES6+)**, **HTML5** e **CSS3**
- **DummyJSON**: API pública de terceiros usada para a autenticação
- **MockAPI**: API mockada usada para salvar os momentos do usuário (CRUD)
- **ESLint**: padronização do código
- **Git, GitHub e Vercel**: versionamento e publicação

## ✨ Funcionalidades

- Landing page com pesquisa, persona, solução, experiência, galeria, proposta de valor, equipe e contato
- Login com validação de campos e mensagens de erro
- Sessão salva no navegador (o usuário continua logado ao atualizar a página)
- Rota privada `/painel`, acessível somente após o login
- Painel do usuário com cadastro, listagem, favoritos, filtros por mood e exclusão de momentos
- Página 404 para endereços inexistentes
- Layout responsivo para desktop, tablet e mobile

## 🗺️ Rotas

| Rota | Acesso | Descrição |
| --- | --- | --- |
| `/` | Pública | Landing page do MoodShot |
| `/login` | Pública | Tela de login |
| `/painel` | Privada | Área do usuário com os momentos |
| `*` | Pública | Página não encontrada (404) |

## 🧩 Organização do código

```text
src/
├── components/   componentes reutilizáveis (Navbar, SectionHeader, FormField, MomentoCard...)
├── contexts/     contexto de autenticação (AuthContext e AuthProvider)
├── data/         textos e dados fixos da landing page
├── hooks/        hooks customizados (useAuth, useForm, useMomentos, useScrollToHash)
├── pages/        páginas das rotas (Home, Login, Painel, NotFound)
├── services/     comunicação com as APIs (authService e momentosService)
├── App.jsx       definição das rotas
└── main.jsx      ponto de entrada da aplicação
```

Hooks nativos utilizados: `useState`, `useEffect`, `useContext` e `startTransition`.
Hooks customizados: `useAuth`, `useForm`, `useMomentos` e `useScrollToHash`. Eles concentram a lógica e deixam os componentes responsáveis apenas pela parte visual.

## ⚙️ Pré-requisitos

- **Node.js** 20.19 ou superior (recomendado: versão LTS mais recente)
- **npm** (instalado junto com o Node.js)
- Conexão com a internet (as APIs são externas)

Para conferir as versões instaladas:

```bash
node -v
npm -v
```

## 📦 Como instalar as dependências

Depois de extrair o .ZIP ou clonar o repositório, entre na pasta do projeto e rode:

```bash
npm install
```

## ▶️ Como executar o projeto

```bash
npm run dev
```

Depois é só abrir no navegador o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar e testar a versão de produção:

```bash
npm run build
npm run preview
```

## 🖥️ Servidores e back-end

O projeto **não possui back-end próprio**, então não é necessário iniciar nenhum servidor além do `npm run dev`. Os dados vêm de duas APIs externas, que já ficam online:

- **Autenticação:** `https://dummyjson.com/auth/login` (DummyJSON)
- **Momentos:** MockAPI, no resource `momentos`. A URL fica em `src/services/momentosService.js`.

## 🔐 Usuário e senha para teste

| Usuário | Senha |
| --- | --- |
| `teste` | `teste123` |

O login confere esse usuário no `authService.js` e faz a autenticação na DummyJSON com uma conta de demonstração dela, que devolve os dados e o token.

## 🤖 Uso de Inteligência Artificial

Usamos o Claude (IA da Anthropic), pelo VS Code, como apoio na Sprint 4: ele ajudou a gerar o código da migração para React (rotas, hooks, login e integração com as APIs) e a refazer o visual da interface. A equipe revisou, configurou as APIs, aprovou o visual e testou o projeto. A ideia do produto, a pesquisa, a persona e as cores são da equipe.

## 👥 Equipe

| Nome | RM |
| --- | --- |
| Matheus Donas Vieira | 568626 |
| Rafael Rosatti de Paula | 571280 |
| José Henrique Oliveira de Lira | 569037 |
| Mateus Rodrigues Tavares | 571189 |
| Enzo Cassiano Machado | 569630 |

---

### MoodShot — Apexxon Consultoria · 2026

**A câmera que entende você.**
