const projects = document.querySelectorAll('.project');
const tableRows = document.querySelectorAll('.afiliate__box__launch table tbody tr');
const checkAll = document.querySelector('#check-all');

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

checkAll.addEventListener('click', () => {
    checkAll.checked = !checkAll.checked;
    document.querySelectorAll('.inp-checkboxx').forEach(checkBox => {
        checkBox.checked = !checkBox.checked;
    })
})