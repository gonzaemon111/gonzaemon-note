module.exports = {
  dest: 'dist',
  theme: 'meteorlxy',
  themeConfig: {
    lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/en-US'), {
      home: 'Welcome to Gonzaemon\'s Blog!',
      posts: '記事一覧',
    }),
    personalInfo: {
      nickname: 'gonzaemon',
      description: '某W大学情報理工学科4年',
      location: 'Tokyo Japan',
      avatar: '/img/MyProfile.jpg',
      sns: {
        github: {
          account: 'gonzaemon111',
          link: 'https://github.com/gonzaemon111',
        },
        twitter: {
          account: 'gsxe_14914',
          link: 'https://twitter.com/gsxe_14914',
        }
      }
    },
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/' },
      { text: 'About', link: '/about/', exact: false },
      { text: 'PortFolio', link: 'https://gonzaemon-portfolio.netlify.com', exact: false }
    ],
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: false,

      // Add your custom footer (HTML supported)
      custom: 'Copyright 2018-present <a href="https://github.com/meteorlxy" target="_blank">gonzaemon</a> | MIT License',
    },
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/img/infoCardProfile.jpeg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },
    lastUpdated: true,
    pagination: {
      perPage: 10
    },
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
    sidebar: 'auto',
    displayAllHeaders: true,
    activeHeaderLinks: false
  }
}