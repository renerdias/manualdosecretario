---
title: Quero contribuir
sidebar: auto
---

# Resultados obtidos com essa documentação

Você estará apto a contribuir com esse projeto de documentação dos serviços
utilizados pelo Instituto Federal do Ceará.

## O que vou precisar?

Para começar a contribuir você precisa ter conhecimento de ferramentas como
`git`, conhecimentos básicos da linguagem `Markdown` e ter instalado em seu computador os programas
[`node/npm`](https://nodejs.org/en/download/) e [`vuepress`](https://vuepress.vuejs.org/).

## Instalação dos requisitos

Caso você utilize sistema operacional Linux, baseado em distribuições Debian, basta
executar a atualização do sistema e instalação dos pacotes mencionados acima.

```
$ sudo apt-get install git nodejs npm
... (processo de instalação)
$ node --version
v8.10.0
$ npm --version
3.5.2
$ git --version
git version 2.17.1

$ npm install -g vuepress
```

## Contribuindo com a documentação
1. Faça um Fork do Projeto

 - Acesse o link do projeto `http://gitlab.ifce.edu.br/INFRA-DGTI/docs`
 - Clique em “Fork”
 - Selecione o seu usuário como novo namespace
 - O GitLab vai fazer uma cópia do projeto para a sua conta: `http://gitlab.ifce.edu.br/<SEULOGIN>/docs`

 2. Faça um clone do projeto que está na sua conta,

 - Clique em “Download” OU
 -  `git clone git@gitlab.ifce.edu.br:<SEULOGIN>/docs.git`

3. Entre no diretório do projeto que você fez clone

- `cd docs`

4. Sincronize o seu Fork com o projeto original

    ::: warning
    Sincronize o clone do seu Fork com o projeto original  para não fique com um projeto desatualizado e    evitar problemas quando for submeter o código para produção
    :::
    1. Adicione um remote para o repositório original (executado só a primeira vez)
       - `git remote add upstream http://gitlab.ifce.edu.br/INFRA-DGTI/docs`
       -  *upstream é um nome convencional para o seu remote, poderia ser outro nome.
    2. Atualize o remote upstream
       - `git fetch upstream `
    3. Faça o rebase do master com o master do upstream
       - `git rebase upstream/develop`


5. Crie uma Branch

- `git branch nome_da_funcionalidade`

6. Faça as modificações e envie para sua branch

- `git  add  .`
- `git  commit  -m  'Mensagem explicando  a mudança feita'`

7. Envia a sua branch para o seu Fork

- `git  push  origin  nome_da_branch`

8. Faça a Pull Request

- Crie um merge_requests `http://gitlab.ifce.edu.br/2794521/docs/merge_requests/new#`

::: warning
Caso você precise alterar algo no Pull Request (antes de aceito) , basta fazer as alterações locais e subir novamente o código via “git push” sem precisar refazer o Pull Request.
 - git  add  .
 - git  commit  -m  'Mensagem explicando  a mudança feita'`
 - git push
  :::    



### Estrutura do projeto

A estrutura de diretórios da documentação segue o seguinte padrão:

```
docs.ifce.edu.br
├── assets
│   └── images
│       └── ...
├── guides
│   ├── contribute
│   │   └── README.md (este arquivo que você está lendo)
│   ├── README.md
│   ├── pfsense
│   │   └── README.md
│   ├── suap
│   │   └── README.md
│   └── web
│       ├── README.md
│       └── ssl.md
├── README.md
└── .vuepress
    ├── config.js
    └── public
        └── hero.png
```

Caso queira, por exemplo, contribuir com a documentação referente
ao `web`, você deve editar o arquivo `README.md` ou adicionar
mais arquivos com extensão `.md` ao diretório `docs/guides/web/novo-arquivo.md`.

Para verificar a documentação escrita (seu resultado final), você
pode executar o serviço de desenvolvimento com o comando:

```
vuepress dev
```

## Onde devo escrever a documentação?

Você pode escrever a documentação em qualquer editor de texto
plano, ou seja, nano, vim, bloco de notas, sublime text, atom etc.

Uma sugestão para aqueles que não são familiarizados com a linguagem
Markdown, é utilizar o programa [typora](https://typora.io/). Ele
foi desenvolvido especialmente para escrever e ler arquivos Markdown.
Funciona nos três principais sistemas operacionais (Linux, OS X e Windows).

![typora-tela-1](./images/typora-tela1.png)
