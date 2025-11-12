type UserDetails = {
  fname: string;
  lname: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  facebook: string;
  twitter: string;
  github: string;
  linkedin: string;
  bitbucket: string;
};

const userDetails: UserDetails = {
  fname: 'Jason',
  lname: 'Clark',
  address: '8808 Portia Drive',
  city: 'Reno',
  state: 'NV',
  zip: '89506',
  phone: '435.383.2773',
  email: 'riceboyler@pm.me',
  facebook: 'riceboyler',
  twitter: 'riceboyler',
  github: 'riceboyler',
  linkedin: 'riceboyler',
  bitbucket: 'riceboyler'
};

export type Experience = {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  description: string;
  start: string;
  end: string;
  reasonForLeaving?: string;
  technologiesUsed?: string[];
};

const experience: Experience[] = [
  {
    title: 'Web Architect',
    company: 'Chatbooks',
    companyUrl: 'https://chatbooks.com',
    location: 'Lehi, UT (Remote)',
    start: '11/2023',
    end: '9/2025',
    description: 'Continuation and expansion of Marketing Tech Lead role. Nearly completed migration of marketing site from Pages Router to App Router with React Server Components, switching to PandaCSS so we could have smaller bundle sizes and creation of our own plugin. Focused on performance, so middleware became essential to allow for user customization and geo-targeting.',
    reasonForLeaving: 'Company layoffs',
    technologiesUsed: [
      'Next.js (App Router)',
      'bun.js',
      'PandaCSS',
      'Vercel',
      'Builder.io',
      'TanStack Form',
      'TanStack Query'
    ]
  },
  {
    title: 'Marketing Tech Lead',
    company: 'Chatbooks',
    companyUrl: 'https://chatbooks.com',
    location: 'Lehi, UT (Remote)',
    description: 'Own all marketing technology decisions and implementation details, including moving from Prismic to Builder.io for our CMS and evaluating potentially moving to Shopify Plus for our e-commerce solution. Integrated Builder with custom components to override base blocks like buttons and images (to add analytics data and to use `next/image` for better pre-processing. Established processes for non-technical business users to be able to edit pages. Spearheaded effort to move Shop Screen and Product Description Pages (PDPs) from native apps to Builder and integrate segmented shop screens based on customer data.',
    start: '3/2023',
    end: '11/2023',
    reasonForLeaving: 'Transferred back to Engineering',
    technologiesUsed: [
      'Next.js',
      'NX',
      'PandaCSS',
      'Vercel',
      'Builder.io',
      'Formiz',
      'Figma'
    ]
  },
  {
    title: 'Web Development Manager/Front-End Lead',
    company: 'Chatbooks',
    companyUrl: 'https://chatbooks.com',
    location: 'Lehi, UT (Remote)',
    description: 'Manage a team of 3 front-end developers. Migrate site and web application to NX monorepo using Next.js for both Static Site Generation and Server-Side Rendering. Implement custom component library utilizing ChakraUI and Framer Motion. Assist with implementation of custom API layer using TanStack Query to manage app state. Migrate hosting from AWS to Vercel for improved performance and reduced cost.',
    start: '2/2021',
    end: '3/2023',
    reasonForLeaving: 'Changed departments and roles',
    technologiesUsed: [
      'Next.js',
      'NX',
      'ChakraUI',
      'Framer Motion',
      'Vercel',
      'TanStack Query',
      'Storybook',
      'Cypress',
      'Jotai',
      'React Hook Form'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'TCN',
    companyUrl: 'https://tcn.com',
    location: 'St. George, UT',
    description:
      'Created coherent Design System utilizing Figma for design mockups and demonstration of color schemes/typography. Implemented Design System via Material-UI theme which constrains available palette and typographical schemes. Mentored multiple junior engineers from the basics of JavaScript to assisting with complex React components. Started a series of workshops for sharing knowledge during Covid-19 restrictions. Implemented Cypress testing suite for E2E testing as we have no dedicated QA resources.',
    start: '7/2019',
    end: '1/2021',
    reasonForLeaving: '',
    technologiesUsed: [
      'React',
      'TypeScript',
      'Webpack',
      'Figma',
      'Cypress',
      'MDX'
    ]
  },
  {
    title: 'Lead Front-End Engineer',
    company: 'CollegeVine',
    location: 'Cambridge, MA (100% remote capable)',
    description:
      'Assumed responsibility for all front-end code for Education Finance/Guidance Startup. Stack included React, PureScript, Haskell and Python. Migrated shared component library from JavaScript to TypeScript to enforce consistent API. Created shared compnents to be be used in A/B tests for Catalyst Direct team, then moved to owning Marketing site and assets, preparing to move to a mobile-first architecture powered by Gatsby and NetlifyCMS',
    start: '4/2019',
    end: '6/2019',
    reasonForLeaving: 'Massive company reorganization resulted in layoff',
    technologiesUsed: [
      'React',
      'TypeScript',
      'PureScript',
      'GatsbyJS',
      'NetlifyCMS'
    ]
  },
  {
    title: 'Lead Front-End Engineer',
    company: 'PatientPing',
    location: 'Boston, MA',
    description:
      'Responsible for all front-end code for Medical Technology Startup. Upgraded React, Redux, Webpack and other libraries to be up to date; created shared component library and component generator based on Neutrino. Functioned as team lead for front-end engineers, responsible for establishing best practices, design documents for larger features and mentoring other engineers. Added front-end unit testing using Jest and React Testing Library.',
    start: '2/2018',
    end: '4/2019',
    reasonForLeaving: 'Moved to CollegeVine to allow for 100% remote work',
    technologiesUsed: [
      'React',
      'Redux',
      'Webpack',
      'NodeJS',
      'Bit',
      'Styled Components/Emotion'
    ]
  },
  {
    title: 'Engineering Manager',
    company: 'Cengage',
    location: 'Boston, MA',
    description:
      'Responsible for growing Nucleus/World Languages Team from four software engineers to 3 agile teams totalling 16 engineers. Challenges faced and solved: backfilling our tech lead, lost due to attrition; interviewing and hiring new engineers of various levels; management of three separate workstreams (Reader, WebRTC-based AV Board and Discourse based Discussion Forum activities) with associated backlog management, estimations and projections. Assisted with architectural design and code reviews of React components and applications. Built proofs of concept for my team to take and enhance to full production.',
    start: '8/2016',
    end: '1/2018',
    reasonForLeaving:
      'Change in leadership led to my career path going in a different direction',
    technologiesUsed: []
  },
  {
    title: 'Tech Lead',
    company: 'Cengage',
    location: 'Boston, MA',
    description:
      'Responsible for contributions to existing backlog, developing React/Redux based components to revolutionize the user experience of the student learning path. Responsible for all code reviews, deployment planning, release management, continuous integration (via Jenkins) and delivery models and improved automation of these tasks.',
    start: '5/2016',
    end: '8/2016',
    reasonForLeaving: 'Promoted to Engineering Manager',
    technologiesUsed: ['React', 'Redux', 'Icebox', 'TokBox', 'Jenkins', 'Webpack']
  },
  {
    title: 'Software Engineer IV',
    company: 'Cengage',
    location: 'Boston, MA',
    description:
      'Responsible for assisting with migration of item/activity builder components to React/Redux; developed Audio/Video Activity Board Proof of Concept utilizing TokBox with React, which is now being implemented by my current team; assisted Tech Lead with code reviews of offshore engineering assets and established coding standards and best practices documentation for team.',
    start: '10/2015',
    end: '5/2016',
    reasonForLeaving: 'Promoted to Tech Lead',
    technologiesUsed: ['React', 'Redux', 'Icebox', 'TokBox', 'Jenkins', 'Webpack']
  },
  {
    title: 'Sr. Software Engineer',
    company: 'Tresta',
    location: 'Tallahassee, FL',
    description:
      'Full Stack Developer on a team developing a new Cloud Communications Platform (tresta.com). Responsible for everything from configuring NGINX to building Erlang applications for the RESTful API, Node.js middleware, a DurandalJS based front-end utilizing HTML5 and CSS3 generated by SASS. Responsible for migrating marketing site built in Jade templating engine into common codebase.',
    start: '7/2014',
    end: '10/2015',
    reasonForLeaving:
      'Needed advancement opportunities, wanted to leave Florida',
    technologiesUsed: ['DurandalJS', 'NodeJS', 'Erlang', 'SASS']
  },
  {
    title: 'Sr. Software Consultant',
    company: 'Avatar Software',
    location: 'Brentwood, TN',
    description:
      'Built software on several different projects, focusing on UI/UX by implementing JavaScript Frameworks (jQuery, Knockout, Durandal, Angular). Projects included a Healthcare Scheduling application, a DSM-V Psychological Evaluation application and an Administrative back-end for a local Colocation Center',
    start: '10/2012',
    end: '7/2014',
    reasonForLeaving:
      'Needed to leave Tennessee due to family issues (I continued as a remote consultant for Avatar for 16 months doing work after hours and on weekends)',
    technologiesUsed: ['jQuery', 'Knockout', 'Durandal', 'Angular']
  },
  {
    title: 'Various - Software Developer/IT Director/Senior Network Engineer/Development Team Lead',
    company: 'cj Advertising/Malham Leverage Group/Legal Intake Professionals',
    location: 'Nashville, TN',
    description: 'Wore many different hats during my 7.5 year tenure. Started as a PHP/ASP.NET developer maintaining the PHP web app for Legal Intake Professionals, migrating cjTrack from a .NET Windows App to an ASP.NET Web Application with AJAX functionality. Served as IT Director for a year in the midst of explosive growth. Then returned to development, focusing primarily on front-end performance and UX.',
    start: '2/2005',
    end: '10/2012',
    reasonForLeaving: 'Time for new opportunities to expand my horizons',
    technologiesUsed: ['PHP', 'ASP.NET/C# (3.5)', 'MSSQL', 'jQuery', 'Knockout']
  },
  {
    title: '.NET Developer I',
    company: 'Dell Computer Corporation',
    location: 'Nashville, TN',
    description: 'Started as a SQL specialist writing dynamic stored procedures, user defined functions and (ewww) cursors. Migrated to ASP.NET web application development and helped build Customer Satisfaction (CSAT) Dashboard that pulled data and aggregated for leadership to review CSAT trends.',
    start: '2/2003',
    end: '2/2005',
    reasonForLeaving: 'Even after not being a tech support specialist for 3 years, called back to the floor due to offshore shutdown. Realized I would struggle to be seen as anything other than a tech support specialist.',
    technologiesUsed: ['MSSQL', 'ASP.NET/C# (2.0)', 'Classic ASP', 'HTML4/CSS2']
  }
];

const freelance: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Code Particle',
    location: 'Fully Remote',
    description: 'Worked on updated (currently unpublished) version of new Code Particle website using Next.js. Worked with a major health supplement client to improve their e-commerce solution and integrate with Sanity CMS.',
    start: '8/2023',
    end: '4/2024',
    reasonForLeaving: 'Contract ended',
    technologiesUsed: ['React', 'Next.js', 'Sanity CMS', 'Storybook']
  },
  {
    title: 'Front-end Developer',
    company: 'Hidden Ocean',
    location: 'St. George, UT',
    description: 'Initially reviewed existing Vue.js codebase with Python/Django API. Discussed and implemented migration to React with Hasura based GraphQL API using AWS Aurora Serverless. Continue to support as needed. Also implemented a Next.js based application using NetlifyCMS for content management. Next-based app never released to production.',
    start: '6/2020',
    end: '1/2024',
    reasonForLeaving: "Company ran out of funding",
    technologiesUsed: ['React', 'NextJS', 'NetlifyCMS', 'Hasura', 'AWS Aurora Serverless', 'GraphQL', 'Chart.js', 'React Table (now TanStack Table)', 'Material UI']
  },
  {
    title: 'Director of Web Services (Freelance)',
    company: 'Mobile Electronics Competition Association (MECA)',
    location: 'Goodlettsville, TN',
    description:
      'Responsible for all web properties for MECA, including crankitup.net (previously), mecacaraudio.com and mecaevents.com. Migrated mecacaraudio.com through various iterations, now running on WordPress CMS with a custom theme. Built mecaevents.com initially in PHP, migrated through ASP.NET/C# WebAPI, Node/Express 4 against a MSSQL database (on AWS) with a React 16 web application. Migrated all properties from standard VPS based hosting to Azure and AWS for scalability. As of 6/2020, migrated from Express API with a MSSQL backend to GraphQL using Hasura and PostgreSQL to allow the site to be serverless. Currently migrating WordPress based main site to GatsbyJS due to security issues with WordPress.',
    start: '1/2000',
    end: '10/2021',
    reasonForLeaving: 'Ownership change prompted retirement',
    technologiesUsed: [
      'ASP.NET',
      'C#',
      'MSSQL',
      'DotNetNuke',
      'DurandalJS',
      'NodeJS',
      'Express',
      'Hasura',
      'PostgreSQL',
      'React',
      'WordPress',
      'GatsbyJS',
      'NetlifyCMS'
    ]
  },
  {
    title: 'Freelance Developer',
    company: 'Prinstantly',
    location: 'Boston, MA',
    description: 'Take over maintenance and expansion of existing PHP application built in the Laravel Framework. Added React.js components to existing application to enhance User Experience.',
    start: '11/2015',
    end: '1/2017',
    reasonForLeaving: 'Company shutdown due to lack of funding',
    technologiesUsed: ['Laravel', 'React', 'PHP', 'MySQL']
  },
];

export type Education = {
  school: string;
  location: string;
  degree: string;
  start: string;
  end: string;
  description: string;
  department?: string;
};

const education: Education[] = [
  {
    school: 'Middle Tennessee State University',
    location: 'Murfreesboro, TN',
    degree: 'Seeking Bachelor of Science',
    department: 'Recording Industry Management (Engineering Track)',
    description:
      'Did not complete degree as I had to work full-time to support my new family',
    start: '1/1998',
    end: '12/1999'
  },
  {
    school: 'Brigham Young University',
    location: 'Provo, UT',
    degree: 'Seeking Bachelor of Science',
    department: 'Computer Science, then Mass Communication',
    description:
      'Spent more time figuring out who I was than actually going to classes. That education has been far more valuable to me than what I would have gained in General Education requirements.',
    start: '1/1993',
    end: '5/1994'
  },
  {
    school: 'Waynesboro High School',
    location: 'Waynesboro, VA',
    degree: "Governor's Seal Diploma",
    department: '',
    description: 'Completed enough credits to graduate by Junior Year',
    start: '1988',
    end: '1992'
  }
];
const interestText =
  "With nearly 30 years working on the web, I bring experience to building complex web software, where I love to work on UI/UX and front-end logic of sites. My objective is to be working with the best front-end frameworks in JavaScript, HTML5 and CSS3 to build killer web applications.\n Right now, I'm loving Next.js for building both Static and Server-Side rendered sites (with hydration), PandaCSS as an absolutely incredible set of design components to start with and TypeScript for a strongish-typed JavaScript language.";

export { userDetails, experience, freelance, education, interestText };
