---
title:  Catalogo de Produtos
sidebar: true
---

# Catalogo de Produtos do Instituto to Federal

## Grupos

* Usuário Leitura(catalogo padrao): Poderá ter acesso às listas de produtos e categorias;
* Usuário de Edição(catalogo gerente): Poderá ter acesso às listas de produtos, poderá incluir, editar e excluir produtos e gerenciar categorias;
* Usuário Administrador: Terá os mesmos atributos do usuário de edição além de ter permissão para autorizar novos usuários e mudar o perfil de usuários existentes;

## Modelo de dados

Classe: Categoria 


| atributo | valor | tamanho | tipo | descrição | OBS |
| :--------|  :----|  :------|  :---| :---------| :---|
| id | IntegerField | - | chave primária | id da categoria | Obrigatório | 
| categoria | CharField | 255 | - | categoria do produto | obrigatório |

Exemplos de categoria: 

* Redes - Consumo
* Redes - Permanente
* Hardware - Consumo
* Hardware - Permanente

---------------

Classe: Atributo

| atributo | valor | tamanho | tipo | descrição | OBS |
| :--------|  :----|  :------|  :---| :---------| :---|
| id | IntegerField | - | chave primária | id do atributo | Obrigatório | 
| atributo | CharField | 255 | - | descrever o atributo | obrigatório |

Exemplos de atributos: 

* Conexão
* Garantia
* Peso

-----------------

Classe: ValorAtributo

| atributo | valor | tamanho | tipo | descrição | OBS |
| :--------|  :----|  :------|  :---| :---------| :---|
| id | IntegerField | - | chave primária | id do valor do atributo | Obrigatório | 
| <nowiki>id_atributo</nowiki> | ForeignKey (Atributo) | - | - | - | ManyToManyField |
| valoratributo | CharField | 255 | - | descrever o valor do atributo | obrigatório |
| <nowiki>unidade_medida</nowiki> | ForeignKey de UnidadeMedida | - | - | - | obrigatório |

Exemplos de valores de atributos:
 
* conexão: USB | unidade
* Garantia: 1 mês | 2 mes | 3 mes
* Peso: 0.5 kg, 100 kg

--------------------

Classe: Produto

| atributo | valor | tamanho | tipo | descrição | OBS|
| :--------|  :----|  :------|  :---| :---------| :---|
| id | IntegerField | - | chave primária | id do produto | Obrigatório | 
| produto | CharField | 255 | - | descrever o produto resumidamente | obrigatório |
| imagem | ImageField | - | - | Foto do produto (diretório: upload)  | não obrigatório |
| <nowiki>id_categoria</nowiki> | ForeignKey de Categoria | - | - | - | um produto deve estar associado a apenas uma categoria |
| <nowiki>id_valoratributo</nowiki> | ForeignKey de ValorAtributo | - | - | - | ManyToManyField |
| <nowiki>codigo_catmat</nowiki> | CharField | 20 | - | Código Catmat | não obrigatório |
| observacao | TextField | - | - | observações do produto | não obrigatório |

Exemplos de produto: 

* produto: patch cord
* imagem: <patch_cord.gif>
* id_categoria: 1 (Redes - consumo)
* id_atributo: 2 (Garantia - 6 meses)

--------------------

Classe: ProdutoCampus

| atributo | valor | tamanho | tipo | descrição | OBS |
| :--------|  :----|  :------|  :---| :---------| :---|
| id | IntegerField | - | chave primária | id do produto | Obrigatório | 
| <nowiki>ou_id</nowiki> | ForeignKey | - | chave estrangeira para UnidadeOrganizacional | - | obrigatório | 
| quantidade | IntegerField | - | - | quantidade do produto | obrigatório |

--------------------

Classe: Catálogo

| atributo | valor | tamanho | tipo | descrição | OBS |
| :--------|  :----|  :------|  :---| :---------| :---|
| id | IntegerField | - | chave primária | id do catálogo | Obrigatório | 
| descricao | CharField | 255 | - | descrever o catálogo resumidamente | obrigatório |
| <nowiki>ou_id</nowiki> | ForeignKey de UnidadeOrganizacional | - | - | - | obrigatório |
| <nowiki>inicio_vigencia</nowiki> | DateTimeField | - | - | - | obrigatório |
| <nowiki>fim_vigencia</nowiki> | DateTimeField | - | - | - | obrigatório |
| ativo | BooleanField | - | - | - | obrigatório |
--------------------
