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
      search: false,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about/vision.html' },
        { text: 'Applications', link: '/about/apps/' },
        { text: 'Support', link: '/support/' },
        { text: 'Github', link: 'https://github.com/coollabsio/' }
      ],
      sidebar: {
        '/about/': genSidebarConfig('About us', 'Applications')
      }
    },
    plugins: {
      '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          }
      }
  }
  
function genSidebarConfig (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'vision',
        'who-we-are'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'apps/',
        'apps/palinkapp/',
        'apps/coolcode/'
      ]
}
  ]
}