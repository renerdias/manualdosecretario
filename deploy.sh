#!/usr/bin/env sh


SERVER=200.129.17.30
USER=operador
DIST=docs.ifce.edu.br




# abort on errors
#set -e

# build
echo "-- build --"
vuepress build

echo "-- deploy --"


echo "-- Movendo logo --"
cp -R ./assets/images/manual.svg ./docs/assets/img/manual.svg


echo "-- Movendo imagem hero --"
cp -R ./assets/images/manual.svg ./docs/manual.svg

echo "-- Movendo arquivos de formulário --"
cp -R ./rotas/formulario/arquivos/ ./docs/rotas/formulario/arquivos/


# navigate into the build output directory
#cd docs/

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

#git init
#git add -A
#git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:renerdias/manualdosecretario.git master:gh-pages

#cd -

