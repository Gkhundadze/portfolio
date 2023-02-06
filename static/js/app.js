import * as f from "./functions.js";
import * as variables from "./variables.js";
import Developer from './userObj.json' assert {type: 'json'};


f.showDevelopmentStack(variables.devStack, Developer);
f.showProfilePhoto(variables.profilePhoto, Developer);
f.showAboutMe(variables.aboutMe, Developer);