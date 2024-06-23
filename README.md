# Unisinos - Saude Em Dia

**Integrantes:**

* Kayanne Vitória de Lima de Mello
* Bernardo Bergamo Stange
* Marcos Vinícius da Silva Carvalho
* Andrew Paes da Silva

**Repositório:**

https://github.com/andrew-paes/Unisinos.SaudeEmDia

**Atividade:**

Esta atividade acadêmica, de caráter extensionista, desafia você a refletir sobre a integração entre os conhecimentos adquiridos e as demandas locais e regionais da sociedade. O objetivo é mapear desafios em sua comunidade, propondo ações de intervenção e desenvolvendo uma proposta inovadora para a sociedade em que está inserido.

No contexto do desenvolvimento de softwares e sites para web, empresas buscam constantemente novos desenvolvedores com habilidades em tecnologias essenciais e que possam de adaptar rapidamente às novas tecnologias. Nesse contexto, o desenvolvimento web são relevantes na formação para atuação no mercado de trabalho.

O desafio propõe a criação de uma solução web (app ou site) criativa, demonstrando os conhecimentos adquiridos na Atividade Acadêmica. A proposta pode estar associada a uma empresa ou problema mapeado, sendo possível atender às necessidades identificadas.

Imagine-se contratado por uma empresa para desenvolver um website dinâmico e temático, com uma página inicial e pelo menos mais 3 telas para conteúdos/interações\*. A proposta visa aplicar os conceitos estudados de forma prática e inovadora.

**Requisitos:**

- O site proposto deve funcionar como uma aplicação web ou pelo menos conter recursos de programação **JavaScript**, tornando o site dinâmico.
- Como tecnologias, você pode utilizar aquelas que foram estudadas ao longo da AA.
- **Não serão aceitas tecnologias de front-end nem frameworks de renderização servidor.**
- Deve ser entregue, além de arquivos de código-fonte, arquivos ou link para projeto de protótipo/planejamento e um vídeo no formato MP4 com a explicação da execução e de partes importantes do código-fonte. **Sem o vídeo ou sem os arquivos, os alunos não recebem nota na atividade**.
  - *OBS.: Não serão aceitos links para github, gitlab ou qualquer outro sistema de versionamento de arquivos. O Aluno deve entregar os arquivos de código-fonte dentro de um arquivo compactado no formato ZIP. O código-fonte deve estar legível no vídeo.*
- O trabalho **deve ser feito em grupos de quatro alunos**, no entanto a **nota é individual** e t**odos os integrantes devem apresentar trabalho**, explicando a execução e partes importantes do código-fonte. O limite de tempo para a apresentação é de **8 minutos**, sendo necessário distribuir esse período **entre os membros do grupo**.
- Atividades **copiadas** da internet ou de colegas **não receberão nota**.

# Configurando o Ambiente para Executar um Aplicativo Angular 17 com NodeJS 18

Este guia detalha os passos necessários para configurar um ambiente de desenvolvimento para um aplicativo Angular 17 utilizando NodeJS 18.

## Requisitos

- NodeJS 18.x
- npm (geralmente incluído com o NodeJS)
- Angular CLI

## Passo 1: Instalando o NodeJS 18

Primeiro, precisamos instalar o NodeJS 18. Para isso, acesse o site oficial do NodeJS [nodejs.org](https://nodejs.org/) e baixe a versão LTS (Long Term Support) que é recomendada para a maioria dos usuários.

### Windows e macOS

Baixe o instalador e siga as instruções na tela.

https://nodejs.org/en/download/package-manager

### Linux

Para sistemas baseados em Debian e Ubuntu:

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Passo 2: Instalando o Angular CLI

O Angular CLI (Command Line Interface) facilita a criação e o gerenciamento de projetos Angular. Para instalá-lo globalmente, execute:

```bash
npm install -g @angular/cli
```

Verifique a instalação:

```bash
ng version
```

## Passo 3: Instalando dependências

Com o Angular CLI instalado, você pode instalar as dependências do projeto Angular. Navegue até o diretório onde deseja criar o projeto e execute:

```bash
cd .\Unisinos.SaudeEmDia
npm install
```

Siga as instruções na tela para configurar o projeto.

## Passo 4: Executando o Projeto Angular

Para iniciar o servidor de desenvolvimento e ver seu aplicativo em ação, navegue até o diretório do seu projeto e execute:

```bash
cd .\Unisinos.SaudeEmDia
npm start
```

O Angular CLI compilará o projeto e iniciará um servidor local. Abra seu navegador e vá para http://localhost:4200 para ver o aplicativo em execução.