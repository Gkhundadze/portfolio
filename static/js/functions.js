
function showDevelopmentStack(devStack, Developer) {
  Developer['developmentStack'].forEach(stack => {
    let li = document.createElement('li');
    li.innerHTML = stack;
    devStack.append(li)
  });
}
function showProfilePhoto(desktop, tablet, mobile, profilePhoto, Developer) {
  desktop.setAttribute('srcset', Developer['developerPhoto'].desktop)
  tablet.setAttribute('srcset', Developer['developerPhoto'].tablet)
  mobile.setAttribute('srcset', Developer['developerPhoto'].mobile)
  profilePhoto.setAttribute('height', 400)
  profilePhoto.setAttribute('width', 400)
  profilePhoto.src = Developer['developerPhoto'].desktop;
  profilePhoto.alt = Developer['name'] + ' ' + Developer['surname'] + ' ' + 'photo';
}
function showAboutMe(aboutMe, Developer) {
  for (let i in Developer['about']) {
    let p = document.createElement('p');
    p.innerHTML = Developer['about'][i];
    aboutMe.append(p)
  }
}
function greetingsAndIntro(devName, Developer) {
  let h2 = document.createElement('h2');
  h2.textContent = Developer['slogan']
  let p = document.createElement('p');
  p.textContent = Developer['introduction']
  devName.append(h2);
  devName.append(p);
}
function socialIconsHendler(socialsArr, path) {
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
function createWorkProjects(arr, container) {
  arr.forEach((project, index) => {
    const projectItem = document.createElement("article");
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
            width="600"
            />
            <div class="overlay"></div>
          </div>
        `;
    container.appendChild(projectItem);
  });
}

const createContainer = (index, arr, wrapper) => {
  const { projectStart, projectEnd, ProjectContent, projectRole, projectUrl, projectName, projectStack } =
  arr[index];
  const experienceContainer =
    "<div class='projectNames'>" +
    arr.map((item, ind) => {
      return `<button class="projectBtn${index == ind ? " active" : ""
        }" data-id ="${ind}" >${item.projectName}</button>`;
    })
      .join("") +
    "</div><article class='project-inner'><h3>" +
    projectRole +
    "</h3><p class='duration'>" +
    projectStart +
    " - " +
    projectEnd + "</p>" +
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
        "</article>"
      );
    }).join("");
  ("</div>");
  wrapper.innerHTML = experienceContainer;
};
const scrollBtn = (arr) => {
  const projectNames = document.querySelector(".projectNames");
  arr.length > 6 ? projectNames.classList.add("active") : projectNames.classList.remove("active");
};


function checkNavLinks(arr) {
  if (window.innerWidth <= 861) {
    arr.forEach(el => {
      el.addEventListener('click', () => {
        header.classList.toggle('active')
      })
    })
  }
}	



function renderServices (serviceArr, locationDiv) {
  serviceArr.forEach((service) => {
    const template =  `
    <article class="serviceCard">
      <img loading="lazy" src=${service.iconPath} alt="${service.title} banner" />
      <h3 class="cardTitle">${service.title}</h3>
      <p onclick="showFullText(this)" class="cardParagraph">
        ${service.description}
      </p>
    </article>
  `
  locationDiv.innerHTML += template
  })
}

function showFullText(el) {
  el.classList.toggle('show-full-text')
}