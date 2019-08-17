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
        href: '/css/font.css'
    }]
    ],
    themeConfig: {
        search: false,
        logo: '/coollabs.svg',
        nav: [
            { text: 'Home 🏠', link: '/' },
            { text: 'About us 👥', link: '/about' },
            { text: 'Products 📦', link: '/products/' },
            { text: 'Contact 📡', link: '/contact' },
            { text: 'Blog 📚', link: 'https://dev.to/coollabsio' },
            { text: 'GitHub 💾', link: 'https://github.com/coollabsio/' }
        ],
    },
    plugins: {
      '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
              message: "We refreshed our cool site.",
              buttonText: "Load the latest version!"
            }
          }
}
}
