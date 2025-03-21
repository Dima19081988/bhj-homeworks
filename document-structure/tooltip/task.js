const helpTitles = document.querySelectorAll('.has-tooltip');

function openToolTip(event) {
    event.preventDefault();

    const activeToolTip = document.querySelector('.tooltip_active');
    const title = this.getAttribute('title');
    if (activeToolTip) {
        if (activeToolTip.textContent === title) {
            activeToolTip.classList.remove('tooltip_active');
            activeToolTip.remove();
            return; 
        } else {
            activeToolTip.classList.remove('tooltip_active');
            activeToolTip.remove();
        }
    }

    const toolTip = document.createElement('div');
    toolTip.className = 'tooltip';
    toolTip.textContent = title;
    document.body.appendChild(toolTip);
    const rect = this.getBoundingClientRect();  
    toolTip.style.left = `${rect.left}px`;
    toolTip.style.top = `${rect.bottom}px`;
    toolTip.classList.add('tooltip_active');
};

helpTitles.forEach(title => {
    title.addEventListener('click', openToolTip);
});

