getData()
.then((Developer) => {
	const workProjects = Developer.workProjects;
	const completedProjects = Developer.completedProjects;
	gmailName.setAttribute('href', `mailto:${Developer.gmailName}`)
	gmailName.textContent = Developer.gmailName;
	showAboutMe(aboutMe, Developer);
	showProfilePhoto(profilePhoto, Developer);
	showDevelopmentStack(devStack, Developer);
	greetingsAndIntro(devName, Developer);
	socialIconsHendler(Developer.developerSocials, socialIconsWrapper)
	createWorkProjects(workProjects, projectsContainer);
	createContainer(0, completedProjects, work_content)
	scrollBtn(completedProjects);
	checkNavLinks(navLinksArr)
	const sections = document.querySelectorAll("section");
	const navLi = document.querySelectorAll("[nav-link]");
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
		}
	  });
	};
	work_content.addEventListener("click", function (e) {
		if (e.target.classList == "projectBtn") {
			f.createContainer(e.target.dataset.id, completedProjects, work_content);
			e.target.classList.add('active')
			e.target.style.borderRadius = "25px";
			e.target.setAttribute("style", "height:25px !important");
		}
	});
});


async function getData() {
	return fetch("./static/js/userObj.json")
	  .then((response) => response.json())
	  .then((data) => data);
  }
