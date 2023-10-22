export async function getData(Developer) {
  return fetch("./static/js/userObj.json")
    .then((response) => response.json())
    .then((data) => { return data });
}
export function showDevelopmentStack(devStack, Developer) {
  Developer['developmentStack'].forEach(stack => {
    let li = document.createElement('li');
    li.innerHTML = stack;
    devStack.append(li)
  });
}
export function showProfilePhoto(profilePhoto, Developer) {
  profilePhoto.src = Developer['developerPhoto'].desktop;
}
export function showAboutMe(aboutMe, Developer) {
  for (let i in Developer['about']) {
    let p = document.createElement('p');
    p.innerHTML = Developer['about'][i];
    aboutMe.append(p)
  }
}
export function greetingsAndIntro(devName, Developer) {
  let h2 = document.createElement('h2');
  h2.textContent = Developer['name'];
  let h1 = document.createElement('h1');
  h1.textContent = Developer['slogan']
  let p = document.createElement('p');
  p.textContent = Developer['introduction']
  devName.append(h2);
  devName.append(h1);
  devName.append(p);
}
export function socialIconsHendler(socialsArr, path) {
  socialsArr.forEach(social => {
    const socialItem = document.createElement('li')
    socialItem.setAttribute('class', `social__links ${social.platform}`)
    const icontag =
      `
		    <a href="${social.profileUrl}">
          <img src="${social.platformIconUrl}" alt="${social.platform}">
		    </a>
        `
    socialItem.innerHTML = icontag
    path.append(socialItem)
  })
}
export function createWorkProjects(arr, container) {
  arr.forEach((project, index) => {
    const projectItem = document.createElement("div");
    const isOdd = index % 2 === 1;
    projectItem.classList.add("projects-content-item");
    if (isOdd) {
      projectItem.classList.add("opposite");
    }
    const projectText = `
          <h3 title="project name : ${project.projectTitle}">${project.projectTitle}</h3>
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
          <p class="project-date">${project.projectStart} - ${project.projectEnd}</p>
          <div class="projects-content-item-text-links">
            ${
              project.projectGithub ? `
              <a title="Go To ${project.projectTitle} Github repository" href="${project.projectGithub}" aria-label="github link ${project.projectTitle}" >
                <img
                src="./static/images/social-icons/github-icon.svg"
                alt="github icon"
                loading="lazy"
                />
              </a>
            `
            : ''
            }
            <a title="Go To ${project.projectTitle} Website" href="${project.projectLink}" aria-label="redirect to ${project.projectTitle}" >
            <img
            src="./static/images/external-icon.svg"
            alt="redirect icon"
            alt="external link"
            loading="lazy"
            /></a>
          </div>
        `;
    projectItem.innerHTML = `
          <div class="projects-content-item-text">
            ${projectText}
          </div>
          <div class="projects-content-item-img">
            <img 
            src="${project.projectImgSource}" 
            alt="${project.projectTitle}" 
            loading="lazy"
            />
            <div class="overlay"></div>
          </div>
        `;
    container.appendChild(projectItem);
  });
}
export const createContainer = (index, arr, wrapper) => {
  const { projectStart, projectEnd, ProjectContent, projectRole, projectUrl, projectName, projectStack } =
    arr[index];
  const experienceContainer =
    "<div class='projectNames'>" +
    arr.map((item, ind) => {
      return `<button class="projectBtn${index == ind ? " active" : ""
        }" data-id = ${ind}>${item.projectName}</button>`;
    })
      .join("") +
    "</div><div class='project-inner'><h3>" +
    projectRole +
    "</h3><p class='duration'>" +
    projectStart +
    " - " +
    projectEnd +
    "<h4 class='project-stack'>project stack : " +
    projectStack +
    "</h4>" +
    `<p class='link-to-project'>` +
    "link to :" +
    " - " +
    `<a href=${projectUrl}>` +
    projectName +
    "</a>" +
    "</p>" +
    ProjectContent.map((item) => {
      return (
        '<div><i class="fa-solid fa-caret-right"></i><p>' +
        item +
        "</p></div>"
      );
    }).join("");
  ("</div>");
  wrapper.innerHTML = experienceContainer;
};
export const scrollBtn = (arr) => {
  const projectNames = document.querySelector(".projectNames");
  arr.length > 6 ? projectNames.classList.add("active") : projectNames.classList.remove("active");
};


export function checkNavLinks(arr) {
  if (window.innerWidth <= 861) {
    arr.forEach(el => {
      el.addEventListener('click', () => {
        header.classList.toggle('active')
      })
    })
  }
}	