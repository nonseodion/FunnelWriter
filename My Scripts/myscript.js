const projects = document.querySelectorAll('.project');

// Add active links
const showOptionMenu = (project, evt) => {
    if(evt.target.className === "menu"){
        project.querySelector('.options').classList.toggle('none');
    }
}

projects.forEach((project) => {
    project.addEventListener('click', (evt) => showOptionMenu(project, evt));
});