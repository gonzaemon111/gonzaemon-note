module.exports = {
  title: 'Gonzaemonの技術ブログ',
  description: '学生エンジニアGonzaemonの技術ブログ',
  dest: 'dist',
  theme: 'meteorlxy',
  head: [
    ['link', { href: 'https://use.fontawesome.com/releases/v5.11.2/css/all.css', rel: 'stylesheet'}],
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/favicons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/favicons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/favicons/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/favicons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/favicons/apple-icon-180x180.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    ['meta', { name: 'msapplication-TileColor', content: '#8cdbf9' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/favicons/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#8cdbf9' }],
    ['meta',{ name:"keywords", content:"学生エンジニア, Gonzaemon, gonzaemon, gonzo, Gonzo, ブログ, 技術ブログ, vuepress"}],
    ['meta',{ name:"og:title", content:"Gonzaemonの技術ブログ"}],
    ['meta',{ name:"og:description", content:"学生エンジニアGonzaemonの技術ブログ"}],
    ['meta',{ name:"og:type", content:"website"}],
    ['meta',{ name:"og:url", content:"https://gonzaemon.site"}],
    ['meta',{ name:"og:site_name", content:"Gonzaemonの技術ブログ"}],
    ['meta',{ name:"og:country_name", content:"Gonzaemonの技術ブログ"}],
    ['meta',{ name:"twitter:card", content:"summary"}],
    ['meta',{ name:"twitter:site", content:"@gsxe_14914"}],
    ['meta',{ name:"og:image", content:"https://gonzaemon.site/img/note.png"}],
  ],
  locales: {
    '/': {
      lang: 'ja',
      title: 'Gonzaemonの技術ブログ',
      description: '学生エンジニアGonzaemonの技術ブログ'
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/ja-JP'), {
      home: 'Welcome to Gonzaemon\'s Blog!',
      posts: '記事一覧',
    }),
    sidebar: 'auto',
    personalInfo: {
      nickname: 'gonzaemon',
      description: '某W大学情報理工専攻修士1年',
      email: 'gonzaemon@gonzaemon.page',
      location: 'Tokyo Japan',
      avatar: '/img/profile.jpg',
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
      { text: 'About', link: '/about/', exact: false }
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
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': process.env.GA_TRACKING_ID
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "新しい記事が投稿されました。",
          buttonText: "Refresh"
        }
      }
    ]
  ]
}
