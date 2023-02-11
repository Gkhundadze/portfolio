export function showDevelopmentStack(devStack, Developer) {
    let li = document.createElement('li');
    Developer['developmentStack'].forEach(stack => {
        li.innerHTML = stack;
        devStack.appendChild(li.cloneNode(true))
    });
}

export function showProfilePhoto(profilePhoto, Developer) {
    profilePhoto.src = Developer['developerPhoto'].desktop;
}

export function showAboutMe(aboutMe, Developer) {
    let p = document.createElement('p');
    for (let i in Developer['about']) {
        p.innerHTML = Developer['about'][i];
        aboutMe.appendChild(p.cloneNode(true))
    }
}