 export const ABOUT = {
  title: "About",
  paragraphs: [
    "In 2013 I moved to Canada and started studying at University of Toronto.",
    "In the near future i would like to travel and meet new people around the world."
  ],
  quote: {
    text: "Empower people around the world through the Internet",
    author: {
      name: "Hiroshi Mikitani",
      title:"Rakuten CEO",
    },
  },
}

export const PROJECTS = [
  {
    title: "USW App",
    techStack: ["Node.js", "Javascript", "MongoDB", "jQuery", "HTML5", "CSS3", "Cordova"],
    description: ['Health and Safety web app for United Steels Workers'],
    features: [
      "Display workplace health and safety content",
			"Search through USW’s health and safety documentation",
			"Provide members a way to give feedback",
			"Support English and French languages",
			"Add content though an administrator page",
    ],
    imageName: 'uswapp',
    url: "https://uswapp.herokuapp.com",
  },
  {
    title: "TSports",
    techStack: ["Node.js", "Javascript", "PostgreSQL", "jQuery", "HTML5", "CSS3"],
    description: [
      "Team sharing economy web application."
    ],
    features: [
      "One-to-one messaging between users",
      "Group messaging among users who are attending the same sporting event.",
      "After each event, users who attended the same sporting event can rate each other and leave comments anonymously. A user’s rating in a specific sport and the comments left are set as public to be seen by all users.",
      "Optimized Search and Recommendation System to search for both users and events and results are ranked according to the user’s query and personal data.",
    ],
    imageName: 'defaultImage',
    url: "https://tsports.ca",
  }
]

export const RESEARCH = [
  {
    title: "Department of Computer Science Research Volunteer - Group N-Way Merging (september 2015 – september 2016)",
    tasks: [
      "Analyze large databases, design and maintain users results to store and sort the different users’ profiles and preferences resulting in effectively merging models for software needs.",
      "Plan and create informational learning tutorials for first time users to enhance and foster their familiarity with the program within a 2-minute video."
    ]
  }
]

export const PUBLICATION = [
  {
    title: "Serious Games for NP-hard Problems",
    url: "https://www.researchgate.net/publication/303362869_Serious_games_for_NP-hard_problems_challenges_and_insights",
    collaborators: [
      "Christina Chung", "Angel Liu", "Asako Matsuoka", "Yutie Yang",
    ],
    workshop: [
      {
        title: "GAS '16 Proceedings of the 5th International Workshop on Games and Software Engineering Pages 29-32)",
        year: "May 2016",
      }
    ],
  }
]

export const CONTACT_INFO = {
  email: "sihua.caoliu@gmail.com",
  github: "https://github.com/hiei23",
  linkedIn: "https://www.linkedin.com/in/si-hua-cao-liu-36068aab/"
}
