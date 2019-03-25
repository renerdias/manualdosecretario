---
title: SUAP/Almoxarifado - Fluxo do processo
sidebar: true
---

# 3.4 SUAP/Almoxarifado - Fluxo do processo

## 3.4.1. Entrada de material (compra)
* Cadastrar o processo de compra (módulo Protocolo);
* Cadastrar o empenho;
* Cadastrar os itens do empenho;
* Registrar a entrada do material (Dar entrada na nota fiscal);
* Gerar o PDF do detalhamento da entrada de compra.

## 3.4.2. Entrada de material (doação)

* Cadastrar o processo de doação (módulo Protocolo - opcional);
* Registrar a entrada de doação do material, informando os dados do fornecedor (obrigatório), data e número da nota fiscal (opcionais);
* Gerar o PDF do detalhamento da entrada de doação.

## 3.4.3. Saída de material

* Servidor requisita saída de Material para Consumo (informando o material e a quantidade)
* Servidor integrante da Coordenação de Almoxarifado analisa a requisição pendente.
* Se a requisição for deferida, a Coordenação de Almoxarifado libera total ou parcialmente a quantidade de material requisitada.
