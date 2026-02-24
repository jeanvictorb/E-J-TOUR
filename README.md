# E&J Tour - Agência de Turismo em Foz do Iguaçu

![Angular](https://img.shields.io/badge/Angular-18.2.15-DD0031.svg?style=flat&logo=angular)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3.svg?style=flat&logo=bootstrap)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.svg?style=flat&logo=typescript)

Projeto desenvolvido para a **E&J Tour**, uma agência focada em experiências imersivas em Foz do Iguaçu. O site foi redesenhado para transmitir uma sensação "premium", com layout responsivo e fluído.

## 🌟 Principais Funcionalidades

- **Design Premium e Moderno:** Paleta de cores baseada em Esmeralda e Dourado (Gold), com efeitos de glassmorphism e animações baseadas no scroll do usuário (Intersection Observer).
- **Internacionalização (i18n):** Suporte nativo e instantâneo para três idiomas:
  - 🇧🇷 Português (PT)
  - 🇺🇸 Inglês (EN)
  - 🇪🇸 Espanhol (ES)
- **Design Responsivo:** Navegação adaptada perfeitamente para Desktop e Mobile. Header flutuante e menu lateral (off-canvas) funcional.
- **Roteamento Dinâmico:** Seções de Início, Sobre, Passeios, Pacotes e Contatos integradas e navegáveis via Angular Router.
- **Remoção de Preços:** Foco exclusivo na experiência e na captação de leads via WhatsApp.

## 💻 Tecnologias Utilizadas

- **Angular 18:** Framework principal, com suporte a Standalone Components e SCSS.
- **ngx-translate v17:** Gestão de tradução com carregador HTTP (`TranslateHttpLoader`) para ler os arquivos `.json` dinamicamente.
- **Bootstrap 5:** Sistema de grid, utilitários CSS e componentes responsivos (como o Offcanvas menu).
- **FontAwesome:** Ícones vetoriais modernos.
- **Playfair Display & Outfit:** Tipografia importada do Google Fonts.

## 🚀 Como Executar o Projeto Localmente

1. **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) e o Angular CLI instalados.
2. **Instalar Dependências:**
   ```bash
   npm install
   ```
3. **Rodar o Servidor de Desenvolvimento:**
   ```bash
   ng serve
   ```
4. **Visualizar:** Abra o navegador na url `http://localhost:4200/`. A página recarregará automaticamente sempre que houver mudanças no código.

## 🌍 Arquitetura de Tradução (i18n)

As traduções estão armazenadas em arquivos fixos dentro do diretório `/public/assets/i18n/`.
- `pt.json`
- `en.json`
- `es.json`

Quaisquer atualizações nos nomes, descrições dos passeios e textos de botões/header devem ser feitas diretamente em todos os três arquivos `.json` para refletir os idiomas.

## 🛠 Comandos Úteis

- Build para produção: `ng build` (os arquivos gerados ficarão em `dist/`)
- Criação de novos componentes: `ng generate component path/nome-do-componente`

---
*Criado com dedicação para elevar o turismo em Foz do Iguaçu.*
