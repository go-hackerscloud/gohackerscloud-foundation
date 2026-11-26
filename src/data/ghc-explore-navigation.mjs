// Single source of truth for public Explore-section sidebar and overview.
// These are existing routes; grouping changes must not remove or relocate them.
export const ghcExploreGroups = [
  {
    id:'foundation',title:'Free Foundation & Study Plans',eyebrow:'LEARN FOR FREE',
    description:'Start with fundamentals, choose from 16 modules and build a sustainable study routine.',
    links:[
      {label:'Start Here · Free Foundation',href:'/start-here/'},
      {label:'Explore 16 Modules',href:'/curriculum/'},
      {label:'Core IT & DevOps Deep-Dive',href:'/core-it-devops/'},
      {label:'7-Day Free Foundation Challenge',href:'/7-day-challenge/'},
      {label:'12-Week Study Plan',href:'/study-plan/'},
    ],
  },
  {
    id:'careers',title:'Career & Portfolio Development',eyebrow:'PICK A LEARNING ROUTE',
    description:'Follow a student or professional pathway and turn free exercises into documented evidence.',
    links:[
      {label:'Student Learning Path',href:'/paths/students/'},
      {label:'Professional Upskilling Path',href:'/paths/professionals/'},
      {label:'Career & Portfolio Hub',href:'/portfolio/'},
    ],
  },
  {
    id:'academy',title:'Courses, Tests & GHC Labs',eyebrow:'CONTINUE YOUR LEARNING',
    description:'Compare separate course, exam-practice and Academy lab offerings before deciding what fits.',
    links:[
      {label:'Courses & Bundles',href:'/about-gohackerscloud/courses/'},
      {label:'Test Engine & Mock Exams',href:'/about-gohackerscloud/test-engine/'},
      {label:'Academy & GHC Labs Hub',href:'/ghc-labs/'},
      {label:'Academy Lab Lesson Directory',href:'/about-gohackerscloud/lab-directory/'},
    ],
  },
  {
    id:'company',title:'About GoHackersCloud & Services',eyebrow:'DISCOVER THE ECOSYSTEM',
    description:'Understand the complete platform, browse its public catalog and explore enterprise services.',
    links:[
      {label:'About GoHackersCloud',href:'/about-gohackerscloud/'},
      {label:'Complete Promotional Catalog',href:'/about-gohackerscloud/catalog/'},
      {label:'Cybersecurity Services',href:'/about-gohackerscloud/cybersecurity-services/'},
    ],
  },
];
export const ghcExploreRoutes=['/',...ghcExploreGroups.flatMap(group=>group.links.map(link=>link.href))];
