export async function getData(Developer) {
    return fetch("./static/js/userObj.json")
        .then((response) => response.json())
        .then((data) => {return data});
}
export function showDevelopmentStack(devStack, Developer) {
    let li = document.createElement('li');
    Developer['developmentStack'].forEach(stack => {
        li.innerHTML = stack;
        devStack.append(li)
    });
}
export function showProfilePhoto(profilePhoto, Developer) {
    profilePhoto.src = Developer['developerPhoto'].desktop;
}
export function showAboutMe(aboutMe, Developer) {
    let p = document.createElement('p');
    for (let i in Developer['about']) {
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
            src="./static/images/social-icons/github-icon.svg"
            alt=""/></a>
            <a href="${project.projectLink}">
            <img
            src="./static/images/external-icon.svg"
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
		container.appendChild(projectItem);
	});
}
export const createContainer = (index, arr, wrapper) => {
	const { projectStart, projectEnd, ProjectContent, projectRole } =
    arr[index];
	const experienceContainer =
		"<div class='projectNames'>" +
		arr
			.map((item, ind) => {
				return `<button class="projectBtn${
					index == ind ? " active" : ""
				}" data-id = ${ind}>${item.projectName}</button>`;
			})
			.join("") +
		"</div><div class='project-inner'><h3>" +
		projectRole +
		"</h3><p class='duration'>" +
		projectStart +
		" - " +
		projectEnd +
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