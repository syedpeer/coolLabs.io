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
            { text: 'About', link: '/about/the-vision.html' },
            { text: 'Application Library 📚', link: '/webapps/' },
            { text: 'Contact', link: '/contact/' },
            { text: 'Github', link: 'https://github.com/coollabsio/' }
        ],
        sidebar: {
            '/about/': genAboutSidebar('About'),
            '/webapps/': genWebappsSidebar('Application Library 📚', 'Upcoming Apps 📢'),
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
function genAboutSidebar (group) {
    return [
      {
        title: group,
        collapsable: false,
        children: [
          'the-vision',
          'how-we-doing-it',
          'who-we-are'
        ]
      }
    ]
  }
  function genWebappsSidebar (group, groupb) {
    return [
      {
        title: group,
        collapsable: false,
        children: [
          '',
          'palinkapp',
          'coolnote'
        ]
      },
      {
        title: groupb,
        collapsable: false,
        children: [
          'upcoming/',
          'upcoming/coolarmory',
          'upcoming/coolcode',
          'upcoming/coolpdc',
          'upcoming/coolanalytics'
        ]
      }
    ]
  }