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
          slug: '/industries/',
          items: [
            {label: 'industries.marketing', slug: 'industries/marketing'}
          ]
        },
      ]
    },
    {
      foot: [
        {label: 'contact', slug: '/contact'},
        {label: 'demo', slug: '/enterprise'},
      ]
    }
  ],
  languages
}