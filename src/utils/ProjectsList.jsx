import React from "react";
import {
  CovidProject,
  PortfolioProject,
  MulticodeProject,
  vrapverse
} from "../assets/projects";
import ProjectImage from "../components/miscellaneous/ProjectImage";

const ProjectsList = [
  {
    name: "Portfolio Website",
    info: [
      "Built with React, framer motion and Chakra UI.",
      "Supports light and dark mode,",
      "Future plans: Migrate project to NextJS framework",
    ],
    media: <ProjectImage src={PortfolioProject} alt="Portfolio" />,
    live: null,
    repo: "https://github.com/vivek880490/portfolio",
  },
  {
    name: "Add To Cart - Firebase",
    info: [
      "Built using HTML, CSS, JS and Firebase",
      "Uses Firebase as data layer for dynamic data fetching",
      "Deployed on netlify"
      
    ],
    media: <ProjectImage src={CovidProject} alt="Add to cart" />,
    live: "https://add-to-carttt.netlify.app/",
    repo: "https://github.com/vivek880490/addtocart",
  },
  {
    name: "Vrapverse",
    info: [
      "Built using Wordpress",
      "Generated revenue using Google Adsense",
      "10k+ unique monthly visitors",
      "Deployed on Azure"
      
    ],
    media: <ProjectImage src={vrapverse} alt="Vrapverse" />,
    live: "https://vrapverse.in"
  },
];

export default ProjectsList;
