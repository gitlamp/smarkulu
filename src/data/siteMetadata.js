const languages = require('./languages')

module.exports = {
  title: `Taskulu`,
  siteUrl: `https://taskulu.com`,
  description: `Flexible task management, realtime chat, time logs and deep integrations. Taskulu helps you get results and scale your team performance.`,
  sourceCodeLink: `https://git.taskulu.com/amirali/smarkulu.git`,
  menu: [
    {
      header: [
        {label: 'features', slug: '/features'},
        {label: 'pricing', slug: '/pricing'},
        {
          label: 'industries',
          slug: '/industries',
          items: [
            {label: 'industries.marketing', slug: '/industries/marketing'}
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
            {label: 'home', slug:'/'},
            {label: 'features', slug:'/features'},
            {label: 'industries', slug:'/industries'},
            {label: 'pricing', slug:'/pricing'},
          ]
        },
        {
          label: 'col-label-2',
          slug: '',
          items: [
            {label: 'company', slug:'/'},
            {label: 'jobs', slug:'/features'},
            {label: 'press', slug:'/industries'},
          ]
        },
        {
          label: 'col-label-3',
          slug: '',
          items: [
            {label: 'press', slug:'/'},
            {label: 'jobs', slug:'/features'},
            {label: 'company', slug:'/industries'},
            {label: 'features', slug:'/pricing'},
          ]
        },
        {
          label: 'col-label-4',
          slug: '',
          items: [
            {label: 'home', slug:'/'},
            {label: 'features', slug:'/features'},
            {label: 'industries', slug:'/industries'},
            {label: 'pricing', slug:'/pricing'},
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
        icon: 'fa fa-facebook-square',
        link: 'https://www.facebook.com/TaskuluHQ'
      },
      // Twitter
      {
        icon: 'fa fa-twitter',
        link: 'http://twitter.com/taskulu'
      },
      // Linkedin
      {
        icon: 'fa fa-linkedin-square',
        link: 'linkedin'
      },
      // Telegram
      {
        icon: 'fa fa-telegram',
        link: 'telegram'
      },
      // Instagram
      {
        icon: 'fa fa-instagram',
        link: 'instagram'
      }
    ],
    fa: [
      // Facebook
      {
        icon: 'fa fa-facebook-square',
        link: 'https://www.facebook.com/taskuluir'
      },
      // Twitter
      {
        icon: 'fa fa-twitter',
        link: 'http://twitter.com/taskulu_ir'
      },
      // Linkedin
      {
        icon: 'fa fa-linkedin-square',
        link: 'linkedin'
      },
      // Telegram
      {
        icon: 'fa fa-telegram',
        link: 'telegram'
      },
      // Instagram
      {
        icon: 'fa fa-instagram',
        link: 'instagram'
      }
    ]
  }
}