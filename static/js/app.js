getData()
.then((Developer) => {
	const workProjects = Developer.workProjects;
	const completedProjects = Developer.completedProjects;
	gmailName.setAttribute('href', `mailto:${Developer.gmailName}`)
	gmailName.textContent = Developer.gmailName;
	showAboutMe(aboutMe, Developer);
	showProfilePhoto(desktop, tablet, mobile, profilePhoto, Developer);
	showDevelopmentStack(devStack, Developer);
	greetingsAndIntro(devName, Developer);
	socialIconsHendler(Developer.developerSocials, socialIconsWrapper)
	createWorkProjects(workProjects, projectsContainer);
	createContainer(0, completedProjects, work_content)
	scrollBtn(completedProjects);
	checkNavLinks(navLinksArr)
	window.onscroll = () => {
	  let current = "";
	
	  sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (scrollY >= sectionTop - 60) {
		  current = section.getAttribute("id"); }
	  });
	  
	  navLi.forEach((li) => {
		li.removeAttribute('active')
		if (li.href.includes(current)) {
		  li.setAttribute('active', '')
		  li.onclick = header.classList.remove('active')
		}
	  });
	};
	work_content.addEventListener("click", function (e) {
		if (e.target.classList == "projectBtn") {
			createContainer(e.target.dataset.id, completedProjects, work_content);
			e.target.classList.add('active')
			e.target.style.borderRadius = "25px";
			e.target.setAttribute("style", "height:25px !important");
		}
	});
});


// async function getData() {
// 	return fetch("./static/js/userObj.json")
// 	  .then((response) => response.json())
// 	  .then((data) => data);
// }
async function getData() {
	return fetch("./static/js/userObj.min.json")
	  .then((response) => response.json())
	  .then((data) => data);
}
