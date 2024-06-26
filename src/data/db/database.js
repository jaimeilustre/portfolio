import Mock from "../mock";

const database = {
  information: {
    name: 'Jaime',
    fullName: 'Jaime Joaquin Gonzales Ilustre',
    aboutContent: "I am a former business analyst turned software developer. After studying finance and becoming a business analyst, I have decided to embark on a new path as I grew a fond interest in the tech industry. I attended a rigorous bootcamp that allowed me to learn the fundamentals of software development and with that bootcamp now finished, I am ready to showcase my skills but also am open to learning new programming languages along the way.",
    detailedContent1: "With the bootcamp, I built a strong foundation in software development, specifically the MERN stack, HTML, CSS, and Vanilla JavaScript. I have completed various projects and assignments to showcase my skills on GitHub and LinkedIn. I have also gained knowledge in essential programming workflows, such as GitHub, pair-programming, and agile methodologies. Since the bootcamp, I have expanded my skills to include TypeScript, Python, and SQL, and I am actively pursuing further learning in new technologies.",
    detailedContent2: "Prior to transitioning into tech, I worked as a business analyst in the environmental commodities market, focusing on biofuels. This role honed my analytical, project management, and problem-solving skills. I independently developed business cases and market insights, and my experience in a startup enhanced my communication and teamwork skills through collaboration with the sales and analyst team.",
    detailedContent3: "With my business acumen and technical expertise, I am excited to collaborate closely with your team to deliver impactful solutions. I am ready to leverage my current knowledge of full stack technologies, while at the same time learning new technologies along the way. I am confident that my unique blend of business background and programming skills will make me an effective contributor to your team.",
    age: 26,
    phone: '+31643707594',
    nationality: 'Filipino',
    language: 'English, Dutch, Tagalog, Spanish',
    email: 'jaimeilustre@yahoo.com',
    address: 'Hilversum, the Netherlands',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: 'http://linkedin.com/in/jaime-ilustre-81289a201',
      dribbble: '',
      github: 'https://github.com/jaimeilustre'
    },
    brandImage: '/images/personal-img.jpeg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/CV.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'brush-alt',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "ReactJS",
    "NodeJS",
    "Express",
    "TypeScript",
    "Bootstrap",
    "Tailwind",
    "Sass",
    "MongoDB",
    "Python",
    "SQL",
    "REST APIs",
    "Token-Based Authentication",
    "Git",
    "Github",
    "Pair Programming",
    "Agile Methodology",
    "Data Analysis", 
    "Data Collection",
    "Analytical",
    "Teamwork",
    "Interpersonal and Communication Skills",
    "Problem-solving",
    "Detail-oriented",
    "Project Management",
    "Dynamic",
    "Willingness to Learn"
  ],
  portfolios: [
    {
      id: 1,
      title: "RingAShow",
      subtitle: "A single-page application that allows you to book artists for small gigs at home or at a specified location. The app is easy to use and works similar to a food delivery app. Just browse through our list of artists and their performances and book your favourite artist.",
      imageUrl: "/images/portfolio-img-1.png",
      largeImageUrl: ["/images/portfolio-img-1.png"],
      url: 'https://ring-a-show.netlify.app/',
      stacks: ["ReactJS", "NodeJS", "Express", "CSS", "MongoDB", "REST API", "Token-Based Authentication"],
    },
    {
      id: 2,
      title: "ESG Tracker",
      subtitle: "A single-page application for investors, regulators, and individuals to explore companies' ESG and other relevant data. From their perspective, they can see important information such as ESG scores, the country they are located in, the industry they are active in and their market capitalization.",
      imageUrl: "/images/portfolio-img-2.png",
      largeImageUrl: ["/images/portfolio-img-2.png"],
      url: 'https://esg-tracker.netlify.app/',
      stacks: ["ReactJS", "CSS", "MongoDB", "REST API"],
    },
    {
      id: 3,
      title: "Formula Revenge",
      subtitle: "A game where a player can control the car using the arrow keys and shoot incoming obstacles with an automatic shooting system. Each obstacle destroyed garners the player 25 points.",
      imageUrl: "/images/portfolio-img-3.png",
      largeImageUrl: ["/images/portfolio-img-3.png"],
      url: 'https://jaimeilustre.github.io/Project-1/',
      stacks: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "October 2022 - January 2023",
        position: "Strategy Analyst",
        company: "OTC FLOW",
        details: "I developed insights into the European biofuel market, focusing on physical end products, feedstocks, and biofuel certificates/tickets, and shared updates on regulatory and market trends with the sales team. I created business cases for entering new markets, specifically in Portugal and Ireland, and monitored the biofuel markets in the Netherlands, UK, Portugal, and Ireland, as well as the European Compulsory Stock Obligations (CSO) market. Additionally, I assisted in onboarding new colleagues with a general introduction to the biofuel market, gathered information from governing authorities, and provided daily support to management."
      },
      {
        id: 2,
        year: "October 2018 - September 2020",
        position: "Brand Representative",
        company: "Hollister & Co.",
        details: "In my part-time, customer-oriented role, I helped customers with their shopping needs and assisted them in any way possible. I regularly maintained clothing presentations throughout the store and assisted the stock room team with handling incoming shipments and organizing the inventory."
      },
      {
        id: 3,
        year: "August 2018 - February 2020",
        position: "Student Representative",
        company: "Maastricht University School of Business and Economics",
        details: "I assisted in university-hosted events, such as open days and introduction days. During open days, I represented my bachelor program to potential new students and their parents. On introduction days, I guided groups of new students around the university campus and the city of Maastricht, introduced them to the university's learning practices, and answered their general questions about the university."
      },
      {
        id: 3,
        year: "August 2016 - August 2017",
        position: "Brand Representative",
        company: "Abercrombie & Fitch Co.",
        details: "In my part-time, customer-oriented role, I helped customers with their shopping needs and assisted them in any way possible. I regularly maintained clothing presentations throughout the store and assisted the stock room team with handling incoming shipments and organizing the inventory."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "October 2023 - December 2023",
        graduation: "Web Development Bootcamp",
        university: "Ironhack",
        details: "I completed a 10-week, full-time (400+ hours) bootcamp covering the fundamentals of web development, divided into three modules. In Module 1, I learned HTML, CSS, and JavaScript, culminating in a final project to create a game using object-oriented programming (OOP). Module 2 focused on React and APIs, with a final project to create a Single Page Application using React.js and an API. Module 3 covered the MERN Stack, REST APIs, and token-based authentication, concluding with a final project to create a full-stack application using the MERN Stack."
      },
      {
        id: 2,
        year: "September 2021 - August 2022",
        graduation: "M.Sc. Sustainable Finance",
        university: "Maastricht University School of Business and Economics",
        details: "I completed a one-year program focused on the fields of Data Analytics, Sustainable Finance, Management and Strategy, Institutional Investors, Financial Statement Analysis and Valuation, Sustainable and Responsible Investments, and Real Estate Finance."
      },
      {
        id: 3,
        year: "September 2017 - July 2020",
        graduation: "B.Sc. Economics and Business Economics",
        university: "Maastricht University School of Business and Economics",
        details: "I completed a three-year bachelor's program, taking courses in Marketing, Supply Chain, Accounting, Finance, Banking, International Business Strategy, Project Management, Process Management, and Technology and Innovation Management."
      },
      {
        id: 4,
        year: "September 2019 - December 2019",
        graduation: "Exchange Program",
        university: "Smith School of Business at Queen's University",
        details: "During my bachelor, I completed a four-month exchange program in Canada where I completed courses including COMM 343 Strategic Service Operations, COMM 353 Managing Across Cultures, COMM 357 Interpersonal Skills for Managers, COMM 410 Strategies for Social Enterprise, and COMM 416 Organisational Fraud."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+31 643707594'],
    emailAddress: ['jaimeilustre@yahoo.com'],
    address: "Hilversum, the Netherlands"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});