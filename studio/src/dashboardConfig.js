export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebc3bca01e916cabbfec120',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4gk4oi4x',
                  apiId: 'f947e38c-0545-4e13-927a-5e3a55535d8b'
                },
                {
                  buildHookId: '5ebc3bca01e916b6defec213',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-swn7s1eq',
                  apiId: '32b0a65a-d3b3-4f80-a5cc-1e6915189b4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codyvb/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-swn7s1eq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
