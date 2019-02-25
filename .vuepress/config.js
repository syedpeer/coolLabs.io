const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')
module.exports = {
    postcss: {
      plugins: [require('tailwindcss')(tailwindJS), require('autoprefixer')]
    },
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