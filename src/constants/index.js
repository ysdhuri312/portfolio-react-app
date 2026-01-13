/** @format */

import {
  html5,
  css3,
  javascript,
  git,
  github,
  express,
  mongodb,
  react,
  tailwind,
  typescript,
  c,
  node,
  bootstrap,
  jquery,
  sass,
  figma,
  portfolio,
  yelpCamp,
} from '../assets';

const technologies = [
  {
    name: 'HTML 5',
    icon: html5,
  },
  {
    name: 'CSS 3',
    icon: css3,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'github',
    icon: github,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: react,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: node,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'express',
    icon: express,
  },
  {
    name: 'bootstrap',
    icon: bootstrap,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'c-programming',
    icon: c,
  },
  {
    name: 'jquery',
    icon: jquery,
  },
  {
    name: 'sass',
    icon: sass,
  },
];

const projects = [
  {
    name: 'Portfolio Website',
    description:
      'My personal website - built with HTML, CSS, javascript and Deploy on GitHub Pages.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/ysdhuri312/portfolio-app',
    live_app_link: 'https://ysdhuri312.github.io/dhuriyogesh.github.io/',
  },
  {
    name: 'Yelp Camp',
    description:
      'A full-stack CRUD application to find nearest campground and if you login then can add campground with images and description. It build with Bootstrap, EJS, Express.js, MongoDB and deploy on Render.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: yelpCamp,
    source_code_link: 'https://github.com/ysdhuri312/yelp-camp.git',
    live_app_link: 'https://yelp-camp-i3wi.onrender.com/',
  },
  {
    name: 'Personal and Blogging website',
    description:
      'My personal portfolio and blogging website, built with React, React Markdown and styled using Tailwind CSS to showcase my projects and skills',
    tags: [
      {
        name: 'react-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind-css',
        color: 'green-text-gradient',
      },
      {
        name: 'react-markdown',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/ysdhuri312/dhuriyogesh_personal.git',
    live_app_link: 'https://dhuriyogesh.vercel.app/',
  },
];

// const experiences = [
//   {
//     title: 'React.js Developer',
//     company_name: 'Starbucks',
//     icon: starbucks,
//     iconBg: '#383E56',
//     date: 'March 2020 - April 2021',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
//   {
//     title: 'React Native Developer',
//     company_name: 'Tesla',
//     icon: tesla,
//     iconBg: '#E6DEDD',
//     date: 'Jan 2021 - Feb 2022',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
//   {
//     title: 'Web Developer',
//     company_name: 'Shopify',
//     icon: shopify,
//     iconBg: '#383E56',
//     date: 'Jan 2022 - Jan 2023',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
//   {
//     title: 'Full stack Developer',
//     company_name: 'Meta',
//     icon: meta,
//     iconBg: '#E6DEDD',
//     date: 'Jan 2023 - Present',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ];

// const services = [
//   {
//     title: 'Web Developer',
//     icon: web,
//   },
//   {
//     title: 'React Native Developer',
//     icon: mobile,
//   },
//   {
//     title: 'Backend Developer',
//     icon: backend,
//   },
//   {
//     title: 'Content Creator',
//     icon: creator,
//   },
// ];

export { technologies, projects };
