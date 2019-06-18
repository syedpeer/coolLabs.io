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
/*         logo: '/coollabs.svg', */
        nav: [
            { text: 'Home 🏠', link: '/' },
            { text: 'Application Library 📚', link: '/webapps/published/' },
            { text: 'About us', link: '/about/who-we-are.html' },
            { text: 'Contact 📡', link: '/contact/' },
/*             { text: 'Blog', link: 'https://dev.to/coollabsio' }, */
            { text: 'GitHub', link: 'https://github.com/coollabsio/' }
        ],
        sidebar: {
            '/about/': genAboutSidebar('About us'),
            '/webapps/': genWebappsSidebar('Published Applications 🎉', 'Upcoming Applications 📢')
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
          'who-we-are',
          'how-we-doing-it'
        ]
      }
    ]
  }
function genWebappsSidebar (groupa, groupb) {
    return [
      {
        title: groupa,
        path: '/webapps/published/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/webapps/published/palinkapp',
          '/webapps/published/coolnote'
        ]
      },
      {
        title: groupb,
        path: '/webapps/upcoming/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/webapps/upcoming/coolpdc',
          '/webapps/upcoming/coolcalendar',
          '/webapps/upcoming/coolcode',
          '/webapps/upcoming/coolanalytics'
        ]
      }
    ]
}
function getPubApps () {
  return [
    {
      collapsable: false,
      sidebarDepth: 1,
      children: [
        'published/coolnote'
      ]
    }
  ]
}