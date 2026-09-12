/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Omkar's Portfolio",
  description:
    "A passionate Android Developer who enjoys building end-to-end mobile products that are reliable, scalable, and focused on creating a great user experience.",
  og: {
    title: "Omkar Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Omkar Shripat",
  logo_name: "Omkar Shripat",
  subTitle:
    "A passionate Android Developer who enjoys building end-to-end mobile products that are reliable, scalable, and focused on creating a great user experience.",
  resumeLink:
    "https://www.dl.dropboxusercontent.com/scl/fi/cxdt15oeiroq5bd26dh3r/Omkar_Shripat_Resume.pdf?rlkey=18kkqcj6ktnafjkffmgskoch0&st=7icsblri&dl=0",
  portfolio_repository: "https://github.com/omkardot",
  githubProfile: "https://github.com/omkardot",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/omkardot",
  // linkedin: "https://www.linkedin.com/in/omkar-shripat-027b8825b/",
  // gmail: "shripatomkar22@gmail.com",
  // facebook: "https://www.facebook.com/omkar.shripat/",
  // instagram: "https://www.instagram.com/omkar.shripat/"

  {
    name: "Github",
    link: "https://github.com/omkardot",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/omkar-shripat-027b8825b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shripatomkar22@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/omkar_shripat/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Android Development",
      fileName: "AndroidImg",
      skills: [
        "⚡ Build scalable Android applications with Kotlin and modern Android architecture.",
        "⚡ Develop real-world features including GPS tracking, video streaming, Face authentication, and background processing.",
        "⚡ Focus on performance, reliability, and production-ready user experiences.",
      ],
      softwareSkills: [
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos-kotlin",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "logos-android-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jetpack Compose",
          fontAwesomeClassname: "simple-icons:jetpackcompose",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos-firebase",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing backend services and REST APIs using Spring Boot",
        "⚡ Building scalable APIs for Android applications and integrating them with mobile clients",
        "⚡ Working with databases, cloud services, and backend systems to support production applications",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "logos-spring-icon",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos-firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "AWS S3",
          fontAwesomeClassname: "logos-aws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "REST API",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },
    {
      title: "UI/UX & Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing clean and user-friendly interfaces for mobile applications",
        "⚡ Creating application flows and UI designs with a focus on usability and user experience",
        "⚡ Collaborating with development teams using design handoff and collaboration tools",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "AI Design Tools",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Modern College of Arts, Science and Commerce Pune",
      subtitle: "Msc Computer Science",
      logo_path: "morden_clg_logo.png",
      alt_name: "Modern College Pune",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Studied core computer science subjects including Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture, and Artificial Intelligence.",
        "⚡ Gained practical knowledge through academic projects and coursework covering software development, application development, and emerging technologies.",
        "⚡ Developed a strong foundation in computer science concepts that helped me transition into professional Android development.",
      ],
      website_link: "https://moderncollegepune.edu.in/",
    },
    {
      title: "New Arts, Commerce & Science College, Ahmednagar",
      subtitle: "Bsc. Computer Science",
      logo_path: "new_arts_clg.png",
      alt_name: "New Arts, Commerce & Science College, Ahmednagar",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Studied core computer science concepts including Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Software Engineering.",
        "⚡ Developed a strong foundation in programming, problem-solving, database management, and software development through academic coursework and projects.",
        "⚡ Gained hands-on experience in application development and explored emerging technologies through academic projects and practical learning.",
      ],
      website_link: "https://nacscs.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    //   {
    //     title: "Machine Learning",
    //     subtitle: "- Andrew Ng",
    //     logo_path: "stanford_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //     alt_name: "Stanford University",
    //     color_code: "#8C151599",
    //   },
    //   {
    //     title: "Deep Learning",
    //     subtitle: "- Andrew Ng",
    //     logo_path: "deeplearning_ai_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //     alt_name: "deeplearning.ai",
    //     color_code: "#00000099",
    //   },
    //   {
    //     title: "ML on GCP",
    //     subtitle: "- GCP Training",
    //     logo_path: "google_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //     alt_name: "Google",
    //     color_code: "#0C9D5899",
    //   },
    //   {
    //     title: "Data Science",
    //     subtitle: "- Alex Aklson",
    //     logo_path: "ibm_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //     alt_name: "IBM",
    //     color_code: "#1F70C199",
    //   },
    //   {
    //     title: "Big Data",
    //     subtitle: "- Kim Akers",
    //     logo_path: "microsoft_logo.png",
    //     certificate_link:
    //       "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //     alt_name: "Microsoft",
    //     color_code: "#D83B0199",
    //   },
    //   {
    //     title: "Advanced Data Science",
    //     subtitle: "- Romeo Kienzler",
    //     logo_path: "ibm_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //     alt_name: "IBM",
    //     color_code: "#1F70C199",
    //   },
    //   {
    //     title: "Advanced ML on GCP",
    //     subtitle: "- GCP Training",
    //     logo_path: "google_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //     alt_name: "Google",
    //     color_code: "#0C9D5899",
    //   },
    //   {
    //     title: "DL on Tensorflow",
    //     subtitle: "- Laurence Moroney",
    //     logo_path: "deeplearning_ai_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //     alt_name: "deeplearning.ai",
    //     color_code: "#00000099",
    //   },
    //   {
    //     title: "Fullstack Development",
    //     subtitle: "- Jogesh Muppala",
    //     logo_path: "coursera_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //     alt_name: "Coursera",
    //     color_code: "#2A73CC",
    //   },
    //   {
    //     title: "Kuberenetes on GCP",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
    //   {
    //     title: "Cryptography",
    //     subtitle: "- Saurabh Mukhopadhyay",
    //     logo_path: "nptel_logo.png",
    //     certificate_link:
    //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //     alt_name: "NPTEL",
    //     color_code: "#FFBB0099",
    //   },
    //   {
    //     title: "Cloud Architecture",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked on Android applications using Kotlin, Jetpack Compose, and MVVM architecture, with hands-on experience in video streaming using ExoPlayer and production debugging. I enjoy building practical solutions, learning new technologies, and continuously improving my development skills. I’m also interested in contributing to collaborative projects and developer communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Android Developer",
          company: "Mobicule Technologies.",
          company_url: "https://mobicule.com/",
          logo_path: "mobicule_logo.png",
          duration: "Jan 2025 - Present",
          location: "Pune, Maharashtra",
          description:
            "Working as an Android Developer with hands-on experience in Kotlin, Jetpack Compose, MVVM architecture, and video streaming using ExoPlayer. Involved in developing and maintaining Android applications, implementing features, debugging production issues, and working with existing codebases to deliver business requirements.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I enjoy building Android applications that solve real-world problems, from location tracking and video streaming to productivity and user-focused experiences. My projects help me explore modern Android development while focusing on performance, reliability, and scalability.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "omkar_anime.png",
    description:
      "I’m an Android Developer focused on building reliable, user-focused mobile applications. I can help with Android, Kotlin, Jetpack Compose, location-based features, video streaming, and production application development",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Pune Maharashtra",
    locality: "Pune",
    country: "India",
    region: "Maaharashtra",
    postalCode: "411007",
    streetAddress: "Aundh, Pune",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/oZfkDwF9LUNvupiR7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
