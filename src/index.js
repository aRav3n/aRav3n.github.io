import "./style.css";
import GithubIcon from "../src/media/icons8-github.svg";
import EmailIcon from "../src/media/mail_FILL0_wght400_GRAD0_opsz24.svg";
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
    screenshot,
    altText,
    projectName,
    gitHubLink,
    livePreviewLink,
    projectDescription
  ) => {
    const projectObject = {};
    projectObject.screenshot = screenshot;
    projectObject.name = projectName;
    projectObject.description = projectDescription;
    projectObject.alt = altText;
    projectObject.git = gitHubLink;
    projectObject.preview = livePreviewLink;
    projectList.push(projectObject);
  };

  addProject(
    businessPageImg,
    "homepage for a massage business in Mexico City",
    "Business Homepage",
    "https://github.com/aRav3n/punto-de-calma-homepage",
    "https://arav3n.github.io/punto-de-calma-homepage/",
    "This was my first in depth project utilizing webpack. It was a lot of fun to work on, so much so that I had to be reminded to take breaks to eat!"
  );

  addProject(
    battleshipImg,
    "battleship game part way through",
    "Battleship Game",
    "https://github.com/aRav3n/battleship",
    "https://arav3n.github.io/battleship/",
    "This is a Battleship game written in JavaScript, HTML, and CSS. It was my first project that utilized Jest tests and I found them to be helpful."
  );

  addProject(
    toDoListImg,
    "to-do list app",
    "To-Do List",
    "https://github.com/aRav3n/todo-list",
    "https://arav3n.github.io/todo-list/",
    "This project is my take on a simple to-do list. In doing this project I got some hands-on learning for long-term browser storage as well as storing values to, and retrieving them from, JSON."
  );

  addProject(
    tickTackToeImg,
    "tic tac toe game",
    "Tic-Tac-Toe Game",
    "https://github.com/aRav3n/tic-tac-toe",
    "http://arav3n.github.io/tic-tac-toe",
    "This was my first project using factory functions. It took longer to click for me that I would've thought and was a huge relief when it finally did."
  );

  addProject(
    libraryImg,
    "virtual library collection",
    "Library Application",
    "https://github.com/aRav3n/library_app",
    "http://arav3n.github.io/library_app/",
    "My first project using JavaScript objects was this virtual library application. It was fun to build and I also enjoyed spending some time on designing the color scheme."
  );

  addProject(
    dashboardImg,
    "admin dashboard project",
    "Admin Dashboard",
    "https://github.com/aRav3n/dashboard_project",
    "http://arav3n.github.io/dashboard_project/",
    "Learning CSS grids was a game changer for me. The dashboard that I built for this project was the first time I really got to play with combining grid and flexbox; it was a blast!"
  );

  addProject(
    signupImg,
    "signup form",
    "Signup Form",
    "https://github.com/aRav3n/sign.up.form.project",
    "http://arav3n.github.io/sign.up.form.project/",
    "This is probably the project I refer back to the most when I need to remember something. It is a pretty simple form but I'd given myself the added challenge of making it work on mobile, without media queries, as well."
  );

  addProject(
    calculatorImg,
    "simple calculator app",
    "Calculator App",
    "https://github.com/aRav3n/calculator",
    "http://arav3n.github.io/calculator/",
    "This is a simple calculator application, one of the first projects I ever built with JavaScript."
  );

  addProject(
    etchASketchImg,
    "etch-a-sketch app",
    "Etch-A-Sketch",
    "https://github.com/aRav3n/etchASketch",
    "http://arav3n.github.io/etchASketch/",
    "Simple Etch-A-Sketch app that uses mouse cursor hover or finger drag to simulate the effect of an Etch-A-Sketch."
  );

  addProject(
    rockPaperScissorsImg,
    "rock paper scissors game",
    "Rock Paper Scissors",
    "https://github.com/aRav3n/rockPaperScissors",
    "http://arav3n.github.io/rockPaperScissors/",
    "Looking back on this application that I built 15 months ago makes me really excited to see where I'll be in another 15 months! I remember it being quite a challenge to get the game logic just right."
  );

  return projectList;
};

const toggleVisibility = (clickElement, visibilityElement) => {
  document.addEventListener("DOMContentLoaded", () => {
    visibilityElement.style.display = "none";
  });

  clickElement.addEventListener("click", () => {
    // credit to Adam Rackis: https://stackoverflow.com/a/8454104/20821536
    visibilityElement.style.display =
      visibilityElement.style.display === "none" ? "" : "none";
  });
};

const buildMain = () => {
  buildProjectList();
  const projectList = buildProjectList();
  const mainDomElement = document.querySelector("main");

  const heading = document.createElement("h2");
  heading.innerHTML = "Examples of My Work";

  const clickMessage = document.createElement("h3");
  clickMessage.innerHTML = "Click on a project to learn more!";

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

    const projectTitle = document.createElement("h3");
    projectTitle.innerHTML = projectObject.name;

    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = projectObject.description;
    const detailDiv = document.createElement("div");
    detailDiv.appendChild(projectTitle);
    detailDiv.appendChild(descriptionP);

    const buttonDiv = document.createElement("div");
    const gitLink = document.createElement("a");
    gitLink.setAttribute("href", projectObject.git);
    gitLink.setAttribute("target", "_blank");
    gitLink.setAttribute("rel", "noopener noreferrer");
    const gitImg = new Image();
    gitImg.src = GithubIcon;
    gitImg.setAttribute("alt", "project git hub");
    gitLink.appendChild(gitImg);
    gitLink.innerHTML += "View source code on GitHub";
    const previewLink = document.createElement("a");
    previewLink.setAttribute("href", projectObject.preview);
    previewLink.setAttribute("target", "_blank");
    previewLink.setAttribute("rel", "noopener noreferrer");
    const previewImg = new Image();
    previewImg.src = OpenLinkIcon;
    previewImg.setAttribute("alt", "live preview of the project");
    previewLink.appendChild(previewImg);
    previewLink.innerHTML += "Check out the project web page";
    buttonDiv.classList.add("popupButtonDiv");
    buttonDiv.appendChild(gitLink);
    buttonDiv.appendChild(previewLink);

    projectDiv.appendChild(screenshotDiv);
    projectDiv.appendChild(detailDiv);
    projectDiv.appendChild(buttonDiv);
    projectGrid.appendChild(projectDiv);

    toggleVisibility(projectDiv, buttonDiv);
  }

  mainDomElement.innerHTML = "";
  mainDomElement.appendChild(heading);
  mainDomElement.appendChild(clickMessage);
  mainDomElement.appendChild(projectGrid);
};

buildMain();
