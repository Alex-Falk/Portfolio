var projectNames = ["softbody", "elbloob", "physics", "graphics", "ue4"];
var projectButtons = [];
var projectTexts = [];

projectNames.forEach(proj => {
    var text = document.getElementById(proj + "-text");
    projectButtons.push(document.getElementById(proj));
    projectTexts.push(text);

    if (text != null)
        text.style.display = "none";
});

SelectProject("softbody");

function SelectProject(name) {
    for (i = 0; i < projectNames.length; i++) {
        if (name === projectNames[i] && projectTexts[i].style.display !== "flex") {
            projectTexts[i].style.display = "flex";
            projectButtons[i].style.border = "solid var(--color4)";
        } else {
            projectTexts[i].style.display = "none";
            projectButtons[i].style.border = "";
        }
    }
}
