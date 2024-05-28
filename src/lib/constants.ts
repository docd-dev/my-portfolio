import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const CITY = 'Surabaya'

export const COUNTRY = 'Indonesia'

export const COUNTRY_FLAG = '🇮🇩'

export const ACCOUNT_EMAIL = 'docd.dev@gmail.com'

export const LINKS = {
  github: 'https://github.com/docd-dev',
  linkedin: 'https://www.linkedin.com/in/dwi-yulianto-515a9b167/',
  x: 'https://x.com/docd_dev',
  mail: 'mailto:docd.dev@gmail.com',
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
    title: 'Software Engineer',
    institution: 'SMKN 2',
    link: 'https://smkn2sby.sch.id/',
    date: '2012 - 2015',
  },
  {
    title: '...',
    institution: 'BuildWithAngga',
    link: 'https://buildwithangga.com/',
    date: '2021 - Current',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2022 - Current',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2020 - Current',
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
    company: 'BIISCORP',
    link: 'https://biiscorp.com/',
    location: `${CITY}, ${COUNTRY}`,
    position: 'Fullstack Developer',
    start: '2019',
    end: '2021',
    tasks: [
      'Development system or website for clients using Laravel, PHP, and PostgreSql.',
      'Developing an application for a power generation company integrated with IoT devices to monitor real-time energy production using Laravel and Node-RED',
      'Meeting with the client to discuss the ongoing development of the application.',
      'Testing and debugging',
    ],
  },
  {
    company: 'Aksamedia',
    location: `${CITY}, ${COUNTRY}`,
    position: 'Web Developer',
    start: '2015',
    link: 'https://aksamedia.co.id/',
    end: '2019',
    tasks: [
      'Building and maintaining web applications by writing code, debugging, and implementing new features, using PHP, MySQL, and JavaScript.',
      'Work closely with designers to translate mockups into responsive web pages.',
      'Create spesific city area maps with Google Maps API',
      'Meet the client for building company profile website',
    ],
  },
]
