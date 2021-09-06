/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Prabhakar Kumar",
  title: "Hello,Hola! and Namaste,I'm Prabhakar",
  subTitle: emoji(
    "An independent and self-motivated graduate 🎓   with proven and tested negotiation, web and dev skills .Expert in front-end development with 1 year experience. Well-versed in Language and System.Strong background in Managemet and Leadership."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PRABHAKAR9107",
  linkedin: "https://www.linkedin.com/in/prabhakar-kumar-1b3944147/",
  gmail: "prabhakarku98@gmail.com",
  facebook: "https://www.facebook.com/prabhakar.bansal",
  medium: "https://prabhakarku98.medium.com/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: emoji(
    " A Passionate Software Engineer 💘  Front End Tech and wants to learn and explore every Tech stack"
  ),
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Great Team-worker ,Leadership and Management Skills"),
    emoji("⚡ Love and Live with Open Source Projects")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shri Mata Vaishno Devi University",
      logo: require("./assets/images/smvdulogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2016 - August 2020",
      desc: "Participated in the various workshops and  managed the  Tech and Non-Tech events also.",
      descBullets: [
        "Event Head at Titiksha 2018",
        "Student Coordinator at Hindi Cell 2019 "
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Hindi Cell",
      companylogo: require("./assets/images/hindicell.png"),
      date: "July 2019 – Nov 2019",
      desc: "Working as a web Administrator"
    },
    {
      role: "Digital Champions Intern",
      company: "Jio Pvt Ltd",
      companylogo: require("./assets/images/jio_logo.png"),
      date: "June 2018 – Sep 2018",
      desc: "Gold Badge Winner"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MongoDB Database",
      subtitle:
        " Learn all the fundamentals of MongoDB plus the most popular advanced features.",
      image: require("./assets/images/mongo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-5eb28735-d272-4dba-8d8e-22b20102abbe/"
        },
        {
          name: "Blog",
          url: "https://prabhakarku98.medium.com/introduction-to-mongodb-and-learn-basic-crud-operations-in-30-minutes-c24b86ae6f78"
        }
      ]
    },
    {
      title: "AWS Workshop",
      subtitle: "One-week workshop on AWS",
      image: require("./assets/images/aws.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://res.cloudinary.com/djnxdb9dr/image/upload/v1630874914/awscft.jpg"
        }
      ]
    },

    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "Completed Certifcation from Coursera",
      image: require("./assets/images/python.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/37VZJX367M72"
        },
        {
          name: "More Achivements",
          url: "https://drive.google.com/drive/u/0/folders/1CTqCGX7yFNxZNQg1htJw9znAYFTsntTL"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://prabhakarku98.medium.com/introduction-to-mongodb-and-learn-basic-crud-operations-in-30-minutes-c24b86ae6f78",
      title:
        "Introduction to MongoDB and Learn Basic CRUD Operations in 30 minutes",
      description:
        "MongoDB is a cross-platform document- oriented database program. It is developed by MongoDB Inc in 2007. It is classified as a NoSQL Database(schema-less)."
    },
    {
      url: "https://prabhakarku98.medium.com/learn-git-commnds-in-30-minutes-beginners-595ed376b1ab",
      title: "What is GIT and how to use it?",
      description:
        "Git is a distributed version-control system for tracking changes in source code during software development."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9149938482",
  email_address: "prabhakarku98@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "02panjiyara", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
