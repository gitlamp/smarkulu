const languages = require('./languages')

module.exports = {
  title: `Taskulu`,
  siteUrl: `https://taskulu.com`,
  description: `Flexible task management, realtime chat, time logs and deep integrations. Taskulu helps you get results and scale your team performance.`,
  sourceCodeLink: `https://git.taskulu.com/amirali/smarkulu.git`,
  menu: [
    {
      head: [
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
      foot: [
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
  languages
}