const languages = require('./languages')

module.exports = {
  title: `Taskulu`,
  siteUrl: `https://taskulu.com`,
  description: `Flexible task management, realtime chat, time logs and deep integrations. Taskulu helps you get results and scale your team performance.`,
  sourceCodeLink: `https://git.taskulu.com/amirali/smarkulu.git`,
  menu: {
    header: [
      {label: 'header.menu.product', slug: '/product'},
      {label: 'header.menu.pricing', slug: '/pricing'},
      {
        label: 'header.menu.industries',
        slug: '/our-users',
        items: [
          {label: 'header.menu.marketing', slug: '/industries/marketing'}
        ]
      },
    ],
    footer: {
      en: [
        {
          label: 'col-label-1',
          slug: '',
          items: [
            {label: 'footer.menu.home', slug:'/'},
            {label: 'footer.menu.product', slug:'/product'},
            {label: 'footer.menu.companies', slug:'/our-users'},
            {label: 'footer.menu.pricing', slug:'/pricing'},
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
          ]
        },
        {
          label: 'col-label-3',
          slug: '',
          items: [
            {label: 'footer.menu.analytics', slug:'/product/performance-analytics'},
            {label: 'footer.menu.integrations', slug:'/product/inegrations'},
            {label: 'footer.menu.security', slug:'/product/security'},
            {label: 'footer.menu.file.previews', slug:'/product/file-previews'},
            {label: 'footer.menu.time.tracking', slug:'/product/time-tracking'},
          ]
        },
        {
          label: 'col-label-4',
          slug: '',
          items: [
            {label: 'footer.menu.help', slug:'help.taskulu.com'},
            {label: 'footer.menu.blog', slug:'/blog'},
          ]
        }
      ],
      fa: [
        {
          label: 'col-label-1',
          slug: '',
          items: [
            {label: 'footer.menu.home', slug:'/'},
            {label: 'footer.menu.product', slug:'/product'},
            {label: 'footer.menu.companies', slug:'/our-users'},
            {label: 'footer.menu.pricing', slug:'/pricing'},
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
          ]
        },
        {
          label: 'col-label-3',
          slug: '',
          items: [
            {label: 'footer.menu.analytics', slug:'/product/performance-analytics'},
            {label: 'footer.menu.integrations', slug:'/product/inegrations'},
            {label: 'footer.menu.time.management', slug:'/product/time-management'},
            {label: 'footer.menu.task.management', slug:'/product/task-management'},
          ]
        },
        {
          label: 'col-label-4',
          slug: '',
          items: [
            {label: 'footer.menu.help', slug:'help.taskulu.com'},
            {label: 'footer.menu.blog', slug:'/blog'},
            {label: 'footer.menu.construction', slug:'/ebook/digital-construction'},
            {label: 'footer.menu.performance.analytics', slug:'/ebook/performance-analytics'},
            {label: 'footer.menu.mashhad', slug:'/ebook/shahrdari-mashhad'},
          ]
        }
      ]
    }
  },
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
        link: 'https://www.linkedin.com/company/taskulu'
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
        link: 'https://www.linkedin.com/company/تسکولو'
      },
      // Telegram
      {
        icon: 'fa fa-telegram telegram-highlight',
        link: 'https://t.me/taskulu_ir'
      },
      // Instagram
      {
        icon: 'fa fa-instagram instagram-highlight',
        link: 'https://www.instagram.com/taskulu_ir/'
      }
    ]
  }
}