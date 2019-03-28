---
title: Como obter certificado SSL
sidebar: auto
---

# Resultados obtidos com essa documentação 

Nesta seção você aprenderá para que serve, como obter e
utilizar o certificado SSL em seu servidor web. Também vai
aprender como criar uma chave em ambientes Linux e servir o 
certificado gerado em servidores Web, podendo assim, servir
páginas com o protocolo `https`.

## Para que serve o certificado SSL

Certificados SSL trazem mais segurança na transmissão de dados entre clientes e
servidores. Com sua utilização os dados trafegados entre as partes se tornam
inelegíveis durante a conexão.

Essa proteção é criada a partir de uma chave de criptografia forte que
embaralha as informações enviadas pelo usuário, de modo que seja impossível
descobrir o conteúdo de dentro da chave e o único lugar que pode desembaralhar
este conteúdo é o servidor onde está instalado o Certificado SSL.

## Gerar certificado SSL 

Em um sistema operacional Linux, verifique se você tem instalado o aplicativo
`openssl`. Sugerimos a seguinte estrutura organizacional de diretórios:
```
<sub-dominio>.ifce.edu.br
├── certs # local de criação das chaves
├── infra # arquivos de configuração relacionados ao servidor
└── src # código da aplicação
...
```

No diretório `certs` execute o seguinte comando, modificando os termos
entre os sinais `<>` com o valor real.
```
$ openssl genrsa -des3 -out <sub-dominio>.ifce.edu.br.key 2048
Generating RSA private key, 2048 bit long modulus
..........+++
..................+++
e is 65537 (0x010001)
Enter pass phrase for <sub-dominio>.ifce.edu.br.key:
Verifying - Enter pass phrase for <sub-dominio>.ifce.edu.br.key:
```

A partir da chave privada, vamos gerar o arquivo `.csr` (*Certificate Signing
Request*) com o seguinte comando:
```{10-16}
$ openssl req -new -key <sub-dominio>.ifce.edu.br.key -out <sub-dominio>.ifce.edu.br.csr
Enter pass phrase for <sub-dominio>.ifce.edu.br.key:
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:BR
State or Province Name (full name) [Some-State]:Ceara
Locality Name (eg, city) []:Fortaleza
Organization Name (eg, company) [Internet Widgits Pty Ltd]:IFCE
Organizational Unit Name (eg, section) []:DGTI
Common Name (e.g. server FQDN or YOUR name) []:<sub-dominio>.ifce.edu.br
Email Address []:<responsavel>@ifce.edu.br

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
```

::: warning Atributos extras
Os atributos extras são opcionais. Por esse motivo, não preencheremos.
:::

Ao fim destes passos, você terá dois arquivos no diretório `certs`. Um
com extensão `.key` e outro com extensão `.csr`.

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
