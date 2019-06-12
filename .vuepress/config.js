module.exports = {
    postcss: {
        plugins: [require('tailwindcss')(), require('autoprefixer')]
    },
    title: 'coolLabs',
    head: [
      ['link', {
        rel: 'icon',
        href: '/coollabs.svg'
      }],
        ['link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Miriam+Libre'
        }]
    ],
    themeConfig: {
        search: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/vision.html' },
            { text: 'Applications', link: '/about/apps/' },
            { text: 'Contact', link: '/contact/' },
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
              message: "We updated the content of our site!",
              buttonText: "Download the latest!"
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
          'apps/coolnote/',
          'apps/coolcode/'
        ]
  }
    ]
  }