---
title: Como configurar corretamente o acesso ao SiapeNet 
sidebar: auto
---

# Resultados obtidos com essa documentação 

Nesta seção você aprenderá o que é necessário para que o
acesso ao HOD ocorra sem dificuldades em sistemas Windows. 

## O que é o HOD? 

O HOD é um sistema do Serpro utilizado pelo Instituto Federal do Ceará. Para
acessá-lo é necessário permissão e a autenticação pode ser feito por meio do CPF
do servidor, ou ainda um *token* de acesso.

O sistema pode ser acessado pelo link: [HOD](https://acesso.serpro.gov.br/HOD10/jsp/logonID.jsp)

## Instalação de softwares necessários

São necessários dois softwares específicos: 

* [Mozilla Firefox 52 ESR (32 bits)](https://ftp.mozilla.org/pub/firefox/releases/52.9.0esr/win32/pt-BR/Firefox%20Setup%2052.9.0esr.exe)
* [Java 6 Update 25, (32 bits)](http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase6-419409.html) (necessário
criar uma conta)

Caso o usuário esteja utilizando um *token* para acessar o 

## Enviar o arquivo `.csr`

O arquivo `.csr` deve ser enviado em anexo na [Central de Atendimento](https://ifce.edu.br/centraldeatendimento)
nos itens "Servidor" > "Tecnologia da Informação (DGTI)" > "Redes e Internet" >
"Hospedagem e Servidor Virtual" > "Solicitar certificado (SSL) para um domínio/aplicação".

Na descrição você deve ainda, indicar o subdomínio ao qual o certificado SSL estará
conectado.

## Trabalhando com o certificado SSL

Você receberá o certificado SSL por e-mail, em seguida, será necessário configurar o 
seu servidor Web para responder requisições `https`.

### Certificado SSL no servidor Nginx

O servidor Nginx espera que o certificado seja um conjunto de certificados, para tanto, você
deve concatenar os arquivos levando em consideração a seguinte ordem:  

1. Certificado enviado por e-mail (salve o conteúdo no diretório `certs`, com nome `site.crt`.)
2. Certificado SSL de domínio intermediário [(baixe aqui)](https://support.globalsign.com/customer/en/portal/articles/1464460-domainssl-intermediate-certificates)
(clique em *View in Base64* e salve o conteúdo no diretório `certs`, com nome `intermediate.crt`.)
3. Certificado raíz R1 Global Sign [(baixe aqui)](https://support.globalsign.com/customer/en/portal/articles/1426602-globalsign-root-certificates)
(clique em *View in Base64* e salve o conteúdo no diretório `certs`, com nome `root.crt`.)

Você pode utilizar o comando `cat` para obter um único arquivo "*bundle*".

```
$ cat site.crt intermediate.crt root.crt > bundle.<sub-dominio>.ifce.edu.br.crt
```

Você deve agora ter dois arquivos principais que devem ser referenciados no
arquivo de configuração do *Virtual Host* do servidor Nginx.

Espera-se que o arquivo de configuração de apresentado abaixo seja 
colocado no diretório `/etc/nginx/conf.d/` e que os certificados sejam colocados
no diretório `/etc/secrets/` como representado nas linhas `14` e `15` do código
abaixo.

``` {14-15}
server {
  listen 80;
  server_name <sub-dominio>.ifce.edu.br;

  location / {
    return 301 https://$host$uri;
	}
}

server {
  listen 443 ssl;
  server_name <sub-dominio>.ifce.edu.br;

  ssl_certificate /etc/secrets/bundle.<sub-dominio>.ifce.edu.br.crt;
  ssl_certificate_key /etc/secrets/<sub-dominio>.ifce.edu.br.key;

  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header Host $host;
    proxy_pass http://127.0.0.1:8080;
    proxy_redirect http:// https://;
	}
}
```
Lembre-se de alterar o arquivo acima para as suas necessidades.

### Removendo a senha da chave
Para facilitar a configuração do Nginx, remova a senha adicionada a
chave criada na seção [Gerar Certificado SSL](/rotas/web/ssl.html#gerar-certificado-ssl)
com o comando:

```
$ openssl rsa -in <sub-dominio>.ifce.edu.br.key -out <sub-dominio>.ifce.edu.br.key
Enter pass phrase for wiki.ubajara.ifce.edu.br.key:
writing RSA key
```

Após reiniciar o servidor Nginx com as novas configurações você verá,
ao acessar a sua aplicação *web* que ela já está com o certificado
habilitado.


## Leituras extras

Além desse tutorial rápido você pode saber mais sobre o assunto ao ler
os seguintes links.

* [Criptografia](https://cartilha.cert.br/criptografia/)
* [Configuração Nginx](https://nginx.org/en/docs/beginners_guide.html) (em inglês)
* [Ferramenta openssl](https://github.com/tldr-pages/tldr/blob/master/pages/common/openssl.md) (em inglês)
