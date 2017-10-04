const languages = require('./languages')

module.exports = {
  title: `Taskulu`,
  siteUrl: `https://taskulu.com`,
  description: `Testing site`,
  sourceCodeLink: `https://git.taskulu.com/amirali/smarkulu.git`,
  menu: [
    {label: 'home', slug: '/'},
    {label: 'features', slug: '/features'},
    {label: 'pricing', slug: '/pricing'},
    {label: 'request a demo', slug: '/enterprise'},
    {label: 'contact', slug: '/contact'}
  ],
  languages,
}