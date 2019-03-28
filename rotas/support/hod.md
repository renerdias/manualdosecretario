---
title: Como configurar corretamente o acesso ao SiapeNet 
sidebar: auto
---

# Resultados obtidos com essa documentação 

Nesta seção você aprenderá o que é necessário para que o acesso ao SiapeNet
(módulos servidor e orgão) ocorra sem dificuldades em sistemas Windows. 

## O que é o SiapeNet? 

O SiapeNet é um sistema do Serpro utilizado pelo Instituto Federal do Ceará. Para
acessá-lo é necessário permissão e a autenticação pode ser feito por meio do CPF
do servidor, ou ainda um *token* de acesso.

O sistema, tem basicamente, dois módulos, você pode acessar o [módulo Servidor](https://acesso.serpro.gov.br/HOD10/jsp/logonID.jsp)
e o [módulo Orgão](https://www1.siapenet.gov.br/orgao/Login.do?method=inicio).

## Instalação de softwares necessários

São necessários dois softwares específicos: 

* [Mozilla Firefox 52 ESR (32 bits)](https://ftp.mozilla.org/pub/firefox/releases/52.9.0esr/win32/pt-BR/Firefox%20Setup%2052.9.0esr.exe)
* [Java 6 Update 25, (32 bits)](http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase6-419409.html) (necessário
criar uma conta)

:::warning Aviso
Caso o usuário esteja utilizando um *token* para acessar o sistema, é
necessário também, instalar os certificados corretamente.
:::

### Instalando o Mozilla Firefox 52

No processo de instalação, lembre-se de escolher a instalação personalizada. Essa opção
permite que você escolha o destino final do programa. Como por exemplo 
`C:\Arquivos de Programas\Mozilla Firefox 52 ESR`. Evitando assim, que uma instalação mais
nova do mesmo programa sobreponha a versão 52 ESR recém instalada.

### Instalando o Java 6 Update 25

Na instalação do Java 6 não é necessário alterar nada.

## Configuração de um perfil Mozilla Firefox

O perfil deve ser criado se você pretende instalar outras versões do navegador. Para realizar
esse procedimento, crie um atalho do navegador e com o botão direito escolha a opção `Propriedades`

## Leituras extras

Além desse tutorial rápido você pode saber mais sobre o assunto ao ler
os seguintes links.

* [Link 1](https://google.com)
* [Link 2](https://nginx.org/en/docs/beginners_guide.html)
* [Link 3](https://github.com/tldr-pages/tldr/blob/master/pages/common/openssl.md)
