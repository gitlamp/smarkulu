const languages = require('./languages')

module.exports = {
  title: `Taskulu`,
  siteUrl: `https://taskulu.com`,
  description: `Flexible task management, realtime chat, time logs and deep integrations. Taskulu helps you get results and scale your team performance.`,
  sourceCodeLink: `https://git.taskulu.com/amirali/smarkulu.git`,
  menu: [
    {
      header: [
        {label: 'header.menu.product', slug: '/product'},
        {label: 'header.menu.pricing', slug: '/pricing'},
        {
          label: 'header.menu.industries',
          slug: '/industries',
          items: [
            {label: 'header.menu.marketing', slug: '/industries/marketing'}
          ]
        },
      ]
    },
    {
      footer: [
        {
          label: 'col-label-1',
          slug: '',
          items: [
            {label: 'footer.menu.home', slug:'/'},
            {label: 'footer.menu.product', slug:'/product'},
            {label: 'footer.menu.companies', slug:'/companies'},
            {label: 'footer.menu.pricing', slug:'/pricing'},
            {label: 'footer.menu.customer-success', slug:'/customer-success'},
            {label: 'footer.menu.demo', slug:'/enterprise'},
          ]
        },
        {
          label: 'col-label-2',
          slug: '',
          items: [
            {label: 'footer.menu.company', slug:'/about'},
            {label: 'footer.menu.contact', slug:'/contact'},
            {label: 'footer.menu.press', slug:'/press'},
            {label: 'footer.menu.jobs', slug:'/careers'},
            {label: 'footer.menu.blog', slug:'/blog'},
          ]
        },
        {
          label: 'col-label-3',
          slug: '',
          items: [
            {label: 'footer.menu.marketing', slug:'/industries/marketing'},
            {label: 'footer.menu.commercial', slug:'/industries/commercial'},
            {label: 'footer.menu.developers', slug:'/industries/software-development'},
            {label: 'footer.menu.content-providers', slug:'/industries/content-providers'},
          ]
        },
        {
          label: 'col-label-4',
          slug: '',
          items: [
            {label: 'footer.menu.help', slug:'help.taskulu.com'},
            {label: 'footer.menu.academy', slug:'academy.taskulu.com'},
          ]
        },
      ]
    }
  ],
  languages,
  socials: {
    en: [
      // Facebook
      {
        icon: 'fa fa-facebook-square facebook-highlight',
        link: 'https://www.facebook.com/TaskuluHQ'
      },
      // Twitter
      {
        icon: 'fa fa-twitter twitter-highlight',
        link: 'http://twitter.com/taskulu'
      },
      // Linkedin
      {
        icon: 'fa fa-linkedin-square linkedin-highlight',
        link: 'linkedin'
      },
      // Telegram
      {
        icon: 'fa fa-telegram telegram-highlight',
        link: 'telegram'
      },
      // Instagram
      {
        icon: 'fa fa-instagram instagram-highlight',
        link: 'instagram'
      }
    ],
    fa: [
      // Facebook
      {
        icon: 'fa fa-facebook-square facebook-highlight',
        link: 'https://www.facebook.com/taskuluir'
      },
      // Twitter
      {
        icon: 'fa fa-twitter twitter-highlight',
        link: 'http://twitter.com/taskulu_ir'
      },
      // Linkedin
      {
        icon: 'fa fa-linkedin-square linkedin-highlight',
        link: 'linkedin'
      },
      // Telegram
      {
        icon: 'fa fa-telegram telegram-highlight',
        link: 'telegram'
      },
      // Instagram
      {
        icon: 'fa fa-instagram instagram-highlight',
        link: 'instagram'
      }
    ]
  }
}