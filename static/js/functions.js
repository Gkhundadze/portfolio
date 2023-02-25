export async function getData(Developer) {
    return fetch("./static/js/userObj.json")
        .then((response) => response.json())
        .then((data) => {return data});
}

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

export function greetingsAndIntro(devName, Developer) {
    let h2 = document.createElement('h2');
    h2.textContent = Developer['name'];
    let h3 = document.createElement('h3');
    h3.textContent = Developer['slogan']
    let p = document.createElement('p');
    p.textContent = Developer['introduction']
    devName.appendChild(h2.cloneNode(true));
    devName.appendChild(h3.cloneNode(true));
    devName.appendChild(p.cloneNode(true));
}