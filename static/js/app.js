const body = document.body;
const html = document.documentElement;

getData()
.then((Developer) => {
	const workProjects = Developer.workProjects;
	const services = Developer.services
	const completedProjects = Developer.completedProjects;
	gmailName.setAttribute('href', `mailto:${Developer.gmailName}`)
	gmailName.textContent = Developer.gmailName;
	renderServices(services, servicesWrapper)
	showAboutMe(aboutMe, Developer);
	showProfilePhoto(desktop, tablet, mobile, profilePhoto, Developer);
	showDevelopmentStack(devStack, Developer);
	greetingsAndIntro(devName, Developer);
	socialIconsHendler(Developer.developerSocials, socialIconsWrapper)
	createWorkProjects(workProjects, projectsContainer);
	createContainer(0, completedProjects, work_content)
	scrollBtn(completedProjects);
	checkNavLinks(navLinksArr)
	const height = Math.max(
		body.scrollHeight, 
		body.offsetHeight,
		html.clientHeight, 
		html.scrollHeight, 
		html.offsetHeight
		);
	const width = Math.max(
		html.clientWidth,
		html.scrollWidth, 
		html.offsetWidth, 
		body.scrollWidth, 
		body.offsetWidth
		)
		const percentage = 3
		const boxSize = Math.round(width / 100 * percentage)
	window.onscroll = () => {
	  let current = "developer-intro";
	  sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (scrollY >= sectionTop - 70) {
		  current = section.getAttribute("id"); 
		}
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

	anime({
		targets: '.dev-name',
		direction: 'alternate',
		rotate: '1turn',
		duration: 1000,
		easing: 'easeOutBack',
		fontSize: '2rem'
	  });
	  function generateBackground() {
		const wrapper = document.querySelector('body')
        for (let i = 1; i < 80; i++) {
            const element = document.createElement('div')
            element.classList.add('box')
			element.style.width = `${boxSize}px`
			element.style.height = `${boxSize}px`
            wrapper.prepend(element)
        }
		const timeline = anime.timeline({
			targets: '.box',
			easing: 'easeInOutQuad',
			loop: false,
			delay: anime.stagger(200, {start: 500}),
			duration: 10000
		})
		timeline
			.add({
				// translateY: () => anime.random(0, height - (height / 100 * 10)),
				translateY: () => anime.random(0, height - (height / 100 * 15)),
				translateX: () => anime.random(0, width - (width / 100 * 15)),
				scale: () => anime.random(1, 6),
			})

		
	  }
	  window.addEventListener('load' , () => generateBackground())
});

async function getData() {
	return fetch("./static/js/userObj.json")
	  .then((response) => response.json())
	  .then((data) => data);
}

// function blurIt(html) {
// 	html.style.filter = 'blur(1px)'
// }
// function unBlurIt(html) {
// 	html.style.filter = 'unset'
// }
// function toggleBlur(html) {
// 	setInterval(() => {
// 		html.classList.toggle('blurred')
// 	}, 300)
// }