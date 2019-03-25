---
title: VIM
sidebar: auto
---
## VIM
O Vim (Vi IMproved) é um editor de texto configurável.

### Modo Normal
 Modo que o editor inicia. Caso esteja em outro modo basta pressionar “ESC” para voltar a ele.

**Comandos:**

|  Move o cursor                 |Copia                                 | Apaga                |
|--------------------------------|--------------------------------------|----------------------|
|h - um caractere para a esquerda|y - a linha atual                    |dd - a linha atual     |
|j - para a próxima linha        |ye - do cursor até o final da palavra|D - o restante da linha|
|k - para a linha anterior       |yb - do começo da palavra até o cursor|                      |
|l - um caractere para a direita |p - colar em modo normal              |                      |

 ### **Modo Visual**
 Neste modo é possível selecionar blocos de texto para editar.

 **Comandos:**
|Acessar o modo visual do modo normal |
|-------------------------------------|
|v seleção de caracteres|
|V seleção de linhas inteiras|
|^V seleção de blocos|

### **Modo Inserção**

Nesse modo é possível modificar o texto.

**Comandos**

|Para entrar no modo de inserção |
|-------------------------------------|
|a inicia o modo um caractere após o atual|
|i  inicia o modo um caractere antes do atual|
|A inicia o modo no final da linha|
|I inicia o modo no começo da linha|


|Outros comandos|
|-------------------------------------|
|**Para salvar e sair:** Digite a tecla :w (modo normal)|
|**Para sair do vim e fechar:** Digite :q|
|**Para sair e salvar:** Digite :wq ou ZZ (no modo normal)|
|**Sair sem salvar nada:** Digite :q!|
|**Para desfazer o último comando:** Digite u (modo normal)|
|**Para refazer:** Aperte as teclas Ctrl + R (modo normal)|
