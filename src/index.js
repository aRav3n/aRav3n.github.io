import "./style.css";
import GithubIcon from "../src/media/icons8-github.svg";
import OpenLinkIcon from "../src/media/icons8-open.svg";

const projectList = [];

const addProject = (
  screenshotSrc,
  imageAltText,
  projectName,
  projectDescription
) => {
  const projectObject = {};
  projectObject.screenshot = screenshotSrc;
  projectObject.name = projectName;
  projectObject.description = projectDescription;
  projectObject.alt = imageAltText;
  projectList.push(projectObject);
};

const buildProjectDOM = () => {
  const mainDomElement = document.querySelector("main");

  const heading = document.createElement("h2");
  heading.innerHTML = "My Work";

  const projectGrid = document.createElement("div");
  projectGrid.classList.add("projectGrid");

  for (let i = 0; i < projectList.length; i++) {
    const projectObject = projectList[i];
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const screenshot = document.createElement("img");
    screenshot.setAttribute("alt", projectObject.alt);
    screenshot.setAttribute("src", projectObject.screenshot);
    const screenshotDiv = document.createElement("div");
    screenshotDiv.appendChild(screenshot);
    projectDiv.appendChild(screenshotDiv);

    const linkDiv = document.createElement

  }

  mainDomElement.innerHTML = "";
  mainDomElement.appendChild(heading);
  mainDomElement.appendChild(projectGrid);
};
