module.exports = {
  title: 'Manual do Secretário',
  description: 'Documentação',
  base: "/manualdosecretario/",
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
logo: '/assets/img/manual.png',
    nav: [
      { text: 'Página Inicial', link: '/' },
      { text: 'Contagens de Tempo', link: '/guides/contagem/' },
      { text: 'Benefícios', link: '/guides/' },
      { text: 'Afastamentos', link: '/guides/' },
      { text: 'Guias', link: '/guides/' },
    ]
  }
}

