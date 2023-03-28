import * as f from "./functions.js";
import {
	devStack,
	profilePhoto, 
	aboutMe, 
	devName, 
	socialIconsWrapper, 
	projectsContainer, 
	work_content, 
	gmailName,
} from "./variables.js";

let Developer = await f.getData();
const workProjects = Developer.workProjects;
const completedProjects = Developer.completedProjects;
gmailName.textContent = Developer.gmailName;
f.showDevelopmentStack(devStack, Developer);
f.showProfilePhoto(profilePhoto, Developer);
f.showAboutMe(aboutMe, Developer);
f.greetingsAndIntro(devName, Developer);
f.socialIconsHendler(Developer.developerSocials, socialIconsWrapper)
f.createWorkProjects(workProjects, projectsContainer);
f.createContainer(0, completedProjects, work_content)
f.scrollBtn(completedProjects);



work_content.addEventListener("click", function (e) {
	if (e.target.classList == "projectBtn") {
		createContainer(e.target.dataset.id);
		scrollBtn();
	}
});
work_content.addEventListener("click", function (e) {
	if (e.target.classList == "projectBtn") {
		console.log(e.target);
		createContainer(e.target.dataset.id, "active");
		e.target.style.borderRadius = "25px";
		e.target.setAttribute("style", "height:25px !important");
	}
});