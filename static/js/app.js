import * as f from "./functions.js";
import * as variables from "./variables.js";
import Developer from './userObj.json' assert {type: 'json'};


f.showDevelopmentStack(variables.devStack, Developer);
f.showProfilePhoto(variables.profilePhoto, Developer);
f.showAboutMe(variables.aboutMe, Developer);
f.greetingsAndIntro(variables.devName,Developer)


const completedProjects = Developer.completedProjects;
const work_content = document.querySelector('.work-content');


function createContainer(index){
    const { projectStart, projectEnd, ProjectContent, projectRole } = completedProjects[index];
    const experienceContainer = "<div class='projectNames'>"+
        completedProjects.map((item, ind) => {
            return `<button class="projectBtn${index == ind ? ' active' : ''}" data-id = ${ind}>${item.projectName}</button>`
        }).join('')
    +"</div><div class='project-inner'><h3>"+projectRole+"</h3><p class='duration'>"+projectStart + ' - ' + projectEnd +"</p>"+
    ProjectContent.map((item) => {
        return '<div><i class="fa-solid fa-caret-right"></i><p>'+item+'</p></div>';
    }).join('')
    "</div>"
    work_content.innerHTML = experienceContainer;
}

createContainer(0);

work_content.addEventListener('click', function(e) {
    if(e.target.classList == 'projectBtn'){
        console.log(e.target);
        createContainer(e.target.dataset.id, 'active');   
        e.target.style.borderRadius = '25px';
        e.target.setAttribute('style', 'height:25px !important');
    }
})