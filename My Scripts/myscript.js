const myProjects = document.querySelector('.my__projects');
const projects = document.querySelectorAll('.project');
const tableRows = document.querySelectorAll('.afiliate__box__launch table tbody tr');
const checkAll = document.querySelector('#check-all');
const body = document.querySelector('body');

// Add active links
const showOptionMenu = (project, evt) => {
    if(evt.target.className === "menu"){
        project.querySelector('.options').classList.toggle('none');
    }
}

const showTableRowOptions = (tableRow, evt) => {
    if(evt.target.className === "options-img"){
        tableRow.querySelector('.options').classList.toggle('none');
    }
}

projects.forEach((project) => {
    project.addEventListener('click', (evt) => showOptionMenu(project, evt));
});

tableRows.forEach((tableRow) => {
    tableRow.addEventListener('click', (evt) => showTableRowOptions(tableRow, evt));
});

if(myProjects){
    myProjects.addEventListener('click', (evt) => {
        if (body.contains(evt.target) && evt.target.className !== 'menu'){
            document.querySelectorAll('.options').forEach(option => {
                !option.classList.contains('none') ? option.classList.add('none') : null;
            })
        }
    });
}

checkAll.addEventListener('click', () => {
    let isChecked = !checkAll.checked;
    checkAll.checked = isChecked;
    document.querySelectorAll('.inp-checkboxx').forEach(checkBox => {
        checkBox.checked = !isChecked;
    })
});

// close any option if open
body.addEventListener('click', (evt) => {
    if(body.contains(evt.target) && evt.target.className !== 'options-img'){
        document.querySelectorAll('.options').forEach(option => {
            !option.classList.contains('none') ? option.classList.add('none') : null;
        })
    };
});