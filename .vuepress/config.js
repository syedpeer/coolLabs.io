module.exports = {
    postcss: {
        plugins: [require('tailwindcss')(), require('autoprefixer')]
    },
    title: 'coolLabs',
    head: [
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', {
        rel: 'icon',
        href: '/favicon.ico'
      }],
      ['link', {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/font.css'
    }]
    ],
    themeConfig: {
        search: false,
        logo: '/images/icons/android-chrome-192x192.png',
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
