import { reactive } from 'vue'
import { Project } from './models/Project.js'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  projects: [
    new Project({
      name: 'I Meditated',
      description: 'Meditation habit-tracking app. Had a ton of fun making this.',
      image: 'imeditated.png',
      link: 'https://imeditated.com',
      tags: ['Fullstack', 'Vue', 'Node', 'MongoDB']
    }),
    new Project({
      name: 'Project U',
      description: 'Worked with 2 other people to create a food logger/nutrition app',
      image: 'ProjectU.png',
      link: 'https://github.com/RMWernsing/project_u',
      tags: ['CodeWorks', 'Group Project', 'Fullstack', 'Vue', 'Node', 'MongoDB']
    }),
    new Project({
      name: 'Keeper',
      description: `A pinterest-inspired site. CodeWork's final assignment.`,
      icon: 'keeper-logo.png',
      image: "Keeper.png",
      link: 'https://github.com/RomanOlsen/keeper',
      tags: ['CodeWorks', 'Fullstack', 'Vue', 'C# .NET', 'SQL']
    }),
    // new Project({
    //   name: 'TowerBrite',
    //   description: 'An eventBrite-inspired site.',
    //   image: "tower.png",
    //   link: 'https://github.com/RomanOlsen/tower',
    //   tags: ['CodeWorks', 'Fullstack', 'Vue', 'Node']
    // }),
    // new Project({
    //   name: 'The Instagram Network',
    //   description: 'Social media platform. Name inspiration from The Social Network movie',
    //   image: "network.png",
    //   link: 'https://github.com/RomanOlsen/network',
    //   tags: ['CodeWorks', 'Vue']
    // }),

  ],
  /** @type {import('./models/Project.js').Project[]} */

})

2