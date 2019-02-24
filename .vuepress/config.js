module.exports = {
    host: '0.0.0.0',
    title: 'coolLabs',
    head: [
        ['link', {
            rel: 'icon',
            href: '/coollabs.svg'
        }],
        ['link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Miriam+Libre|Poppins"'
        }],
        ['link', {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css'
      }]
    ],
    themeConfig: {
      logo: '/coollabs.svg',
      search: true,
      nav: [
        { text: 'Apps', link: '/apps/' },
        { text: 'Github', link: 'https://github.com/coollabsio/' },
        { text: 'Gitlab', link: 'https://gitlab.com/coollabsio/' },
      ],
      sidebar: {
        '/apps/': genSidebarConfig('Applications')
      }
    }
  }
  
function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'coolcode/',
        'palinkapp/'
      ]
    }
  ]
}