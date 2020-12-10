const months = document.querySelectorAll('.months p');

// Add active links
const monthActive = (id) => {
    if(months){
        months.forEach((month, idx) => {
            if(idx === id) {
                month.classList.add('active');
            } else{
                month.classList.remove('active');
            }
        });
    }
}

months.forEach((month, idx) => {
    month.addEventListener('click', () => monthActive(idx));
})