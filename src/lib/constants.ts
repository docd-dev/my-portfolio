import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const CITY = 'Surabaya'

export const COUNTRY = 'Indonesia'

export const COUNTRY_FLAG = '🇮🇩'

export const ACCOUNT_EMAIL = 'dwiyulianto619@gmail.com'

export const LINKS = {
  github: 'https://github.com/docd-dev',
  linkedin: 'https://www.linkedin.com/in/dwi-yulianto-515a9b167/',
  x: 'https://x.com/docd_dev',
  mail: 'mailto:dwiyulianto619@gmail.com',
  discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/tattoodcacademy/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Indev',
    location: `${CITY}, ${COUNTRY}`,
    position: 'Frontend Developer',
    start: '2022',
    link: 'https://indev.id/',
    end: 'Current',
    tasks: [
      'Creating and optimizing the user interface of web applications using Next JS, Tailwind and Typescript.',
      'Converting UI/UX designs created using Figma into functional and responsive HTML, CSS, and JavaScript code.',
      'Integrate APIs and backend services into the web application, ensuring seamless data flow between the server and the client side.',
    ],
  },
  {
    company: 'Goperasi',
    location: `${CITY}, ${COUNTRY}`,
    position: 'Fullstack Developer',
    link: 'https://goperasi.id/',
    start: '2021',
    end: '2023',
    tasks: [
      'Developing an B2B application with React, Tailwind and TypeScript',
      'Developed and optimized an application using Prisma ORM for seamless data management and integration between the frontend and backend.',
      'Testing and debugging',
    ],
  },
  {
    company: 'Imaginamos',
    link: 'https://imaginamos.com/',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: '2021',
    end: '2021',
    tasks: [
      'Development of the Imaginamos platform with the use of React, Redux, and Material UI',
      'Work in ETB project with the use of React, Redux, and Material UI',
    ],
  },
  {
    company: 'INETUM',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: '2021',
    link: 'https://www.inetum.com/es',
    end: '2021',
    tasks: [
      'Support in the QA area and bug review',
      'Use of SCRUM methodology',
      'Claro projects with the use of frameworks and libraries such as react and angular',
      'Use of redux toolkit as aproposal which allowed a shorter development time when using this tool',
    ],
  },
]
