import * as f from "./functions.js";
import { devStack, profilePhoto, aboutMe, devName } from "./variables.js";

let Developer = await f.getData();
f.showDevelopmentStack(devStack, Developer);
f.showProfilePhoto(profilePhoto, Developer);
f.showAboutMe(aboutMe, Developer);
f.greetingsAndIntro(devName, Developer);

const completedProjects = Developer.completedProjects;
const work_content = document.querySelector(".work-content");


//createContainer
const createContainer = (index) => {
  const { projectStart, projectEnd, ProjectContent, projectRole } = completedProjects[index];
  const experienceContainer = "<div class='projectNames'>" +
    completedProjects.map((item, ind) => {
      return `<button class="projectBtn${index == ind ? ' active' : ''}" data-id = ${ind}>${item.projectName}</button>`
    }).join('')
    + "</div><div class='project-inner'><h3>" + projectRole + "</h3><p class='duration'>" + projectStart + ' - ' + projectEnd + "</p>" +
    ProjectContent.map((item) => {
      return '<div><i class="fa-solid fa-caret-right"></i><p>' + item + '</p></div>';
    }).join('')
  "</div>"
  work_content.innerHTML = experienceContainer;
}

//scrollBtn
const scrollBtn = () => {
  const projectNames = document.querySelector('.projectNames');
  completedProjects.length > 6 ? projectNames.classList.add('active') : projectNames.classList.remove('active');
}

createContainer(0);
scrollBtn();

work_content.addEventListener('click', function (e) {
  if (e.target.classList == 'projectBtn') {
    createContainer(e.target.dataset.id);
    scrollBtn();
  }
})

//createGmailName
const gmailName = document.querySelector('.gmailName');
gmailName.textContent = Developer.gmailName;



work_content.addEventListener("click", function (e) {
  if (e.target.classList == "projectBtn") {
    console.log(e.target);
    createContainer(e.target.dataset.id, "active");
    e.target.style.borderRadius = "25px";
    e.target.setAttribute("style", "height:25px !important");
  }
});

const workProjects = Developer.workProjects;
const projectsContainer = document.querySelector(".projects-content");

function createWorkProjects() {
  workProjects.forEach((project, index) => {
    const projectItem = document.createElement("div");
    const isOdd = index % 2 === 1;

    projectItem.classList.add("projects-content-item");

    if (isOdd) {
      projectItem.classList.add("opposite");
    }

    const projectText = `
          <p class="type">Featured Project</p>
          <h3>${project.projectTitle}</h3>
          <div class="projects-content-item-text-wrapper">
            <p>
              ${project.projectText}
            </p>
          </div>
          <div class="projects-content-item-text-techs">
            <ul>
              ${project.projectTechs.map((tech) => `<li>${tech}</li>`).join("")}
            </ul>
          </div>
          <div class="projects-content-item-text-links">
            <a href="${project.projectGithub}">
            <img
            src="/static/images/github-icon.svg"
            alt=""/></a>
            <a href="${project.projectLink}">
            <img
            src="/static/images/external-icon.svg"
            alt=""/></a>
          </div>
        `;

    projectItem.innerHTML = `
          <div class="projects-content-item-text">
            ${projectText}
          </div>
          <div class="projects-content-item-img">
            <img src="${project.projectImgSource}" alt="${project.projectTitle}" />
            <div class="overlay"></div>
          </div>
        `;

    projectsContainer.appendChild(projectItem);
  });
}

createWorkProjects();

