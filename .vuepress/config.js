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
    logo: 'assets/img/manual.svg',
    nav: [
      { text: 'Página Inicial', link: '/' },
      { text: 'Formulários', link: '/guides/formulario/' },
      { text: 'Contagens de Tempo', link: '/guides/contagem/' },
      // { text: 'Benefícios', link: '/guides/' },
      { text: 'Benefícios', link: '/guides/contagem/' },
      { text: 'Afastamentos', link: '/guides/contagem/' },
      { text: 'Aposentadoria', link: '/guides/contagem/' },
      // { text: 'Guias', link: '/guides/' },
    ]
  }
}

