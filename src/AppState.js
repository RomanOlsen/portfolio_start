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
      name: 'Coming Soon',
      description: 'This project is coming soon. Stay tuned!',
      image: 'mystery.jpg',
      date: 'TBD',
      github: '',
      link: '',
      tags: ['SaaS', 'Fitness']
    }),
    new Project({
      name: 'I Meditated',
      description: 'Meditation habit-tracking app created to solve my own problem.',
      image: 'imeditated.png',
      date: 'June 2025',
      github: 'https://github.com/RomanOlsen/imeditated',
      link: 'https://imeditated.com',
      tags: ['Fullstack', 'Vue', 'Node', 'MongoDB']
    }),
    new Project({
      name: 'Project U',
      description: 'CodeWorks capstone. Worked with 2 other people to create a food logger/nutrition app.',
      image: 'ProjectU.png',
      link: "",
      date: 'April 2025',
      github: 'https://github.com/RMWernsing/project_u',
      tags: ['CodeWorks', 'Group Project', 'Fullstack', 'Vue', 'Node', 'MongoDB']
    }),
    new Project({
      name: 'Keeper',
      description: `My final at CodeWorks. Keeper is a Pinterest clone.`,
      icon: 'keeper-logo.png',
      image: "Keeper.png",
      date: 'May 2025',
      link: '',
      github: 'https://github.com/RomanOlsen/keeper',
      tags: ['CodeWorks', 'Fullstack', 'Vue', 'C# .NET', 'SQL']
    }),
    new Project({
      name: 'MegaRocket',
      description: 'High school project. Challenging to beat. Play today.',
      image: "megarocketimage.png",
      link: '/megarocket',
      date: 'October 2020',
      tags: ['Unity', 'Game Development', 'One Stone'],
    }),
    new Project({
      name: 'Low Poly Environment',
      description: "High school passion project. A low poly environment I made in Blender and playable in Unity. Official name: Roman's Return to Solitude",
      image: "lowpoly.png",
      link: 'https://romanonfire.itch.io/lowpolyenvironment',
      tags: ['One Stone', 'Blender', 'Unity', '3D Modeling'],
      date: 'December 2021'
    }),
    new Project({
      name: 'Logo for Integ',
      description: "Designed and pitched logos for a student's business project. This was the winning logo",
      image: "integ.png",
      link: '',
      tags: ['Logo', 'Adobe Illustrator', 'One Stone'],
      date: 'March 2021'
    }),
    new Project({
      name: 'Kurbsi',
      description: "Group project of 4 using the design thinking process to solve a parking finding problem for workers in the downtown Boise area. We ended up creating and presenting an iOS app that finds known free parking zones. I also created the logo.",
      image: "kurbsi.png",
      link: '',
      tags: ['Logo', 'Adobe Illustrator', 'One Stone', 'Group Project', 'Design Thinking'],
      date: 'March 2022'
    }),
    new Project({
      name: 'Dreams',
      description: 'A game I made in Roblox Studio. This was my first big building/coding project. 7K+ visits, 90+ favorites.',
      image: "dreams.png",
      tags: ['Game Development', 'Lua', 'Roblox Studio'],
      link: '',
      date: 'September 2019'
    }),
    new Project({
      name: 'Digital Builders Club',
      description: 'For the builders of the technology age. Join us today!',
      image: "dbc.png",
      tags: ['Online Community', 'Skool'],
      link: 'https://www.skool.com/digital-builders-club-1240',
      date: 'August 2025'
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