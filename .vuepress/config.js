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
      { text: 'Secretaria', link: '/rotas/formulario/' },
      { text: 'Formulários', link: '/rotas/formulario/' },
      { 
        text: 'Contagens de Tempo', 
        link: '/rotas/contagem/',
        items: [
          { text: 'Greves / Paralizações', link: '/rotas/contagem/itens/greve' },
        ]
      },
      { 
        text: 'Benefícios', 
        link: '/rotas/beneficio/', 
        items: [
          { text: 'Abono 1.2 ou 1.17', link: '/rotas/beneficio/itens/abono-tempo-ficto' },
          { text: 'Arredondamento', link: '/rotas/beneficio/itens/arredondamento' },
          { text: 'Abono família', link: '/rotas/beneficio/itens/abono-familia' },
          { text: 'Adicional trintenário (10%)', link: '/rotas/beneficio/itens/adicional-trintenario' },
          { text: 'Afastamento da docência', link: '/rotas/beneficio/itens/afastamento-docencia' },
          { text: 'Ajustamento funcional', link: '/rotas/beneficio/itens/ajustamento-funcional' },
          { text: 'Alteração de nome', link: '/rotas/beneficio/itens/alteracao-nome' },
          { text: 'Alteração de titulação', link: '/rotas/beneficio/itens/alteracao-titulacao' },
          { text: 'Apostilamento (título declaratório)', link: '/rotas/beneficio/itens/apostilamento' },
          { text: 'Férias-prêmio', link: '/rotas/beneficio/itens/ferias-premio' },
          { text: 'Gratificação de Educação Especial', link: '/rotas/beneficio/itens/gratificacao-educacao-especial' },
          { text: 'Gratificação de função de Vice-Diretor', link: '/rotas/beneficio/itens/gratificacao-vice-diretor' },
          { text: 'Gratificação de função de Especialista em Educação Básica', link: '/rotas/beneficio/itens/gratificacao-especialista' },
          { text: 'Gratificação de dedicação exclusiva', link: '/rotas/beneficio/itens/gratificacao-dedicacao-exclusiva' },
          { text: 'Gratificação de Incentivo à Docência – Biênio', link: '/rotas/beneficio/itens/bienio' },
          { text: 'Gratificação de Incentivo à Docência – Pó de giz', link: '/rotas/beneficio/itens/gratificacao-po-de-giz' },
          { text: 'Gratificação por curso de Pós-Graduação', link: '/rotas/beneficio/itens/gratificacao-pos-graduacao' },
          { text: 'Opção pelo regime de 40 horas semanais de trabalho', link: '/rotas/aposentadoria/' },
          { text: 'Opção por composição remuneratória', link: '/rotas/aposentadoria/' },
          { text: 'Opção por contribuição previdenciária', link: '/rotas/aposentadoria/' },
          { text: 'Progressão', link: '/rotas/beneficio/itens/progressao' },
          { text: 'Promoção ao grau E', link: '/rotas/beneficio/itens/promocao-grau-e' },
          { text: 'Promoção por Escolaridade Adicional', link: '/rotas/beneficio/itens/promocao-escolaridade' },
          { text: 'Quinquênio (adicionais por tempo de serviço)', link: '/rotas/beneficio/itens/quinquenio' },
          { text: 'Redução de jornada de trabalho', link: '/rotas/beneficio/itens/reducao-jornada' },
          { text: 'Outros', link: '/rotas/aposentadoria/', items: [{ text: 'teste', link: '/rotas/aposentadoria/' }] },
        ]
      },
      { 
        text: 'Afastamentos', 
        link: '/rotas/beneficio/', 
        items: [
          { text: 'Adjunção / Disposição', link: '/rotas/aposentadoria/' },
          { text: 'Afastamento para campanha eleitoral', link: '/rotas/aposentadoria/' },
          { text: 'Afastamento para mandato eletivo', link: '/rotas/aposentadoria/' },
          { text: 'Afastamento para mandato sindical', link: '/rotas/aposentadoria/' },
          { text: 'Afastamento por motivo de casamento', link: '/rotas/aposentadoria/' },
          { text: 'Afastamento por motivo de luto', link: '/rotas/aposentadoria/' },
          { text: 'Afastamento voluntário incentivado - AVI', link: '/rotas/aposentadoria/' },
          { text: 'Autorização para frequentar curso', link: '/rotas/aposentadoria/' },
          { text: 'Férias-prêmio', link: '/rotas/aposentadoria/' },
          { text: 'Licença maternidade', link: '/rotas/aposentadoria/' },
          { text: 'Licença paternidade', link: '/rotas/aposentadoria/' },
          { text: 'Licença para acompanhar pessoa doente da família', link: '/rotas/aposentadoria/' },
          { text: 'Licença para tratamento de saúde', link: '/rotas/aposentadoria/' },
          { text: 'Licença para tratar de interesses particulares', link: '/rotas/aposentadoria/' },
        ]
      },
      { text: 'Aposentadoria', 
        link: '/rotas/aposentadoria/', 
        items: [
          { text: 'Processo', link: '/rotas/aposentadoria/' },
          { text: 'Legislação', link: '/rotas/aposentadoria/' },
        ]
      },
      // { text: 'Guias', link: '/rotas/' },
    ]
  }
}

