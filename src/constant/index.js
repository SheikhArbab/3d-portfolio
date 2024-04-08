import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    stics,
    fiverr,
    csv,
    threejs,
    adam,
    qasim,
    adnan
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "MERN Developer",
      company_name: "Super Tech Insitution",
      icon: stics,
      iconBg: "#383E56",
      date: "March 2023 - Jan 2024",
      points: [
        "Developing and maintaining web applications using MERN and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }, 
    {
      title: "Freelance Web Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },  
    {
      title: "Full stack Developer",
      company_name: "Cybersoft Vantage",
      icon: csv,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "amazing and awesome service he us right on it and price is reasonable.",
      name: "Adam Taher Ghali",
      designation: "Founder",
      company: "Prestige G, LLC",
      image: adam,
    },
    {
      testimonial:
        "Impressive work, Arbab! You did a great job!",
      name: "Qasim Shamim",
      designation: "CO-Founder",
      company: "TechFlow LLC",
      image: qasim
    },
    {
      testimonial:
        "Nice working with you aga bhi kuch howa tu rabata kroo gaa",
      name: "Adnan Yousaf",
      designation: "MERN Developer",
      company: "Sysreforms International",
      image: adnan,
    },
  ];
  
  const projects = [
    {
      name: "Hoo Bank App",
      description:
        "Hoo Bank app using react html css js and more...",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://raw.githubusercontent.com/SheikhArbab/portfolio-assets/main/web%20app/2.webp',
      source_code_link: "https://hoo-bank-r.netlify.app/",
    },
    {
      name: "SIMS Dashboard",
      description:
        "SIMS Dashboard app using react js, node js, express js, mongodb, formik, yup, and more...",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "mern",
          color: "green-text-gradient",
        },
      ],
      image:"https://raw.githubusercontent.com/SheikhArbab/portfolio-assets/main/web%20app/sims_admin.webp",
      source_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7146196486383456256/",
    },
    {
      name: "Blog platform",
      description:
        "Blog platform app using react js, node js, express js, mongodb, formik, yup, and more...",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "restapi",
            color: "green-text-gradient",
          },
          {
            name: "node",
            color: "pink-text-gradient",
          },
          {
            name: "mern",
            color: "green-text-gradient",
          },
        ],
        image:"https://raw.githubusercontent.com/SheikhArbab/portfolio-assets/main/web%20app/blog.JPG",
      source_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7157792950423371776/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
