module.exports = {
  title: 'Manual do Secretário',
  description: 'Documentação',
  base: "/manualdosecretario/",
  dest:"docs/",
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': './assets/img'
      }
    }
  },
  themeConfig: {
    logo: '/assets/img/manual.svg',
    nav: [
      { text: 'Página Inicial', link: '/' },
      { text: 'Formulários', link: '/rotas/formulario/' },
      { text: 'Contagens de Tempo', link: '/rotas/contagem/' },
      // { text: 'Benefícios', link: '/rotas/' },
      { text: 'Benefícios', link: '/rotas/beneficio/' },
      { text: 'Afastamentos', link: '/rotas/contagem/' },
      { text: 'Aposentadoria', link: '/rotas/contagem/' },
      // { text: 'Guias', link: '/rotas/' },
    ]
  }
}

