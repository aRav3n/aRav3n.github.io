import "./style.css";
import GithubIcon from "../src/media/icons8-github.svg";
import OpenLinkIcon from "../src/media/icons8-open.svg";
import battleshipImg from "../src/media/Screenshots/battleship.jpeg";
import businessPageImg from "../src/media/Screenshots/business_page.jpeg";
import calculatorImg from "../src/media/Screenshots/calculator.jpeg";
import dashboardImg from "../src/media/Screenshots/dashboard.jpeg";
import etchASketchImg from "../src/media/Screenshots/etch-a-sketch.jpeg";
import libraryImg from "../src/media/Screenshots/library.jpeg";
import rockPaperScissorsImg from "../src/media/Screenshots/rock_paper_scissors.jpeg";
import signupImg from "../src/media/Screenshots/signup.jpeg";
import tickTackToeImg from "../src/media/Screenshots/tic-tac-toe.jpeg";
import toDoListImg from "../src/media/Screenshots/to-do-list.jpeg";

const buildProjectList = () => {
  const projectList = [];

  const addProject = (
    screenshotSrc,
    imageAltText,
    projectName,
    projectDescription,
    gitHubLink,
    livePreviewLink
  ) => {
    const projectObject = {};
    projectObject.screenshot = screenshotSrc;
    projectObject.name = projectName;
    projectObject.description = projectDescription;
    projectObject.alt = imageAltText;
    projectObject.git = gitHubLink;
    projectObject.preview = livePreviewLink;
    projectList.push(projectObject);
  };

  return projectList;
};

const buildProjectDOM = () => {
  const projectList = buildProjectList();
  const mainDomElement = document.querySelector("main");

  const heading = document.createElement("h2");
  heading.innerHTML = "Examples of My Work";

  const projectGrid = document.createElement("div");
  projectGrid.classList.add("projectGrid");

  for (let i = 0; i < projectList.length; i++) {
    const projectObject = projectList[i];
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const screenshot = new Image();
    screenshot.setAttribute("alt", projectObject.alt);
    screenshot.src = projectObject.screenshot;
    const screenshotDiv = document.createElement("div");
    screenshotDiv.appendChild(screenshot);

    const titleDiv = document.createElement("div");
    const projectTitle = document.createElement("h3");
    projectTitle.innerHTML = projectObject.name;
    const linkDiv = document.createElement;
    const gitLink = document.createElement("a");
    gitLink.setAttribute("href", projectObject.git);
    const gitImg = new Image();
    gitImg.src = GithubIcon;
    gitImg.setAttribute("alt", "project git hub");
    gitLink.appendChild(gitImg);
    const previewLink = document.createElement("a");
    previewLink.setAttribute("href", projectObject.preview);
    const previewImg = new Image();
    previewImg.src = OpenLinkIcon;
    previewImg.setAttribute("alt", "live preview of the project");
    previewLink.appendChild(previewImg);
    linkDiv.appendChild(gitLink);
    linkDiv.appendChild(previewLink);
    titleDiv.appendChild(projectTitle);
    titleDiv.appendChild(linkDiv);

    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = projectObject.description;
    const detailDiv = document.createElement("div");
    detailDiv.appendChild(titleDiv);
    detailDiv.appendChild(descriptionP);

    projectDiv.appendChild(screenshotDiv);
    projectDiv.appendChild(detailDiv);
    projectGrid.appendChild(projectDiv);
  }

  mainDomElement.innerHTML = "";
  mainDomElement.appendChild(heading);
  mainDomElement.appendChild(projectGrid);
};

buildProjectDOM();
