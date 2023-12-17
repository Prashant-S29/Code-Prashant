import {
    next,
    react,
    aws,
    mongo,
    python,
    git,
    docker,
    js,
    figma,
    tailwind, html,
    css,
    mysql,
    jira,
    slack,
    logo,
    serviceOne,
    serviceTwo,
    github_logo,
    insta_logo,
    linkedin_logo,
    whatsapp_logo,
    mail_logo,
    serviceFive,
    serviceSix,
    serviceSeven,
    serviceEight,
    serviceNine,
    serviceTen,
    serviceThree
} from "@/public";

const navLinks = [
    {
        href: "/",
        text: "Home",
    },
    {
        href: "/#about",
        text: "About",
    },
    {
        href: "/#services",
        text: "Services",
    },
    {
        href: "/#projects",
        text: "Projects",
    },
    {
        href: "/#contact",
        text: "Contact",
    },
]

const techStack = [
    next,
    react,
    aws,
    mongo,
    python,
    git,
    docker,
    js,
    tailwind, html,
    css,
    mysql,
    jira,
    slack
    // figma
]

const projectList = [
    {
        projectTitle: "Pravah'24",
        projectImage: serviceTwo,
        projectGithubLink: "https://github.com/Prashant-S29/Pravah2k24.git",
        projectLink: "https://pravah.skit.ac.in/",
        projectTags: [
            "web dev",
            "Nextjs",
            "mern",
            "cpanel",
            "mongodb"
        ],
        projectDesc: "Developed an amazing website for my college event. Come with its own admin panel appealing design."
    },
    {
        projectTitle: "Kiska Jutta",
        projectImage: serviceOne,
        projectGithubLink: "",
        projectLink: "https://www.figma.com/file/b6yxaSOE95tRX4mnEscKTP/KiskaJutta?type=design&node-id=0%3A1&mode=design&t=nWzkiu68jxXMyY0o-1",
        projectTags: [
            "web design",
            "figma"
        ],
        projectDesc: "Designed a stunning website for a shoe startup highlighting user appealing features."
    },
    {
        projectTitle: "SNT Club",
        projectImage: serviceSix,
        projectGithubLink: "https://github.com/snt-club/snt-club.vercel.app.git",
        projectLink: "https://snt-club.vercel.app/",
        projectTags: [
            "web design",
            "web dev",
            "figma",
            "Nextjs",
            "react"
        ],
        projectDesc: "Redeveloped Science and Technology Club, SKIT website using nextjs and other tools."
    },
    {
        projectTitle: "BlogNSpot",
        projectImage: serviceSeven,
        projectGithubLink: "",
        projectLink: "https://www.figma.com/file/yQkl29fLFxqV1hDUyXc6li/Santoshi.Portfolio?type=design&node-id=7%3A2&mode=design&t=QxaqEnCW1yi9k3tf-1",
        projectTags: [
            "protfolio",
            "web design",
            "figma",
        ],
        projectDesc: "Designed a personalized Portfolio for a freelance blog & content writer showcasing her achivements to targeted clients."
    },
    {
        projectTitle: "Designare Stilus",
        projectImage: serviceFive,
        projectGithubLink: "",
        projectLink: "https://www.figma.com/file/QYtZ7PTgqqixgw2RylGfHX/DesignareStilus-Prototype?type=design&node-id=0%3A1&mode=design&t=RGFluDosli44zcLO-1",
        projectTags: [
            "web design",
            "figma"
        ],
        projectDesc: "Developed an amazing website for my college event. Come with its own admin panel appealing design."
    },
    {
        projectTitle: "Slack ChatBot",
        projectImage: serviceEight,
        projectGithubLink: "",
        projectLink: "https://github.com/Prashant-S29/Slack-Bot.git",
        projectTags: [
            "python",
            "automation",
            "aws",
            "slack",
            "software",
            "chatbot"
        ],
        projectDesc: "Coded an automated Slack Chat Filtration and Standup Management Bot during my internship."
    },
    {
        projectTitle: "Royal Battleground",
        projectImage: serviceTen,
        projectGithubLink: "https://github.com/Prashant-S29/Royal-Battleground.git",
        projectLink: "https://royal-battleground.vercel.app/",
        projectTags: [
            "web design",
            "Nextjs",
            "mern",
            "mongodb"
        ],
        projectDesc: "Designed and Developed and amazing website for organizing online gaming events. User can register and look their scores on leaderboard."
    },
    {
        projectTitle: "Bingo AI",
        projectImage: serviceThree,
        projectGithubLink: "",
        projectLink: "https://www.figma.com/file/sdmtlFaHjilwzSStXNGQ9z/BingoAI?type=design&node-id=0%3A1&mode=design&t=XmAdzKSuHAbL6uCx-1",
        projectTags: [
            "web design",
            "figma"
        ],
        projectDesc: "Designed a amazing conceptual prototype website for a AI writing tool company - BingoAI."
    },
]

const contactDetails = [
    {
        contactIcon: github_logo,
        contactLink: "https://github.com/Prashant-S29"
    },
    {
        contactIcon: linkedin_logo,
        contactLink: "https://www.linkedin.com/in/prashant-singh-529391250/"
    },
    {
        contactIcon: whatsapp_logo,
        contactLink: "https://wa.me/919079215052"
    },
    {
        contactIcon: mail_logo,
        contactLink: "mailto:prashant@gmail.com"
    },
    {
        contactIcon: insta_logo,
        contactLink: "https://www.instagram.com/prashant.o29o/"
    },

]

export {
    navLinks, techStack, projectList, contactDetails
}