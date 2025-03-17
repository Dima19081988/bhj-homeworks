const helpTitles = document.querySelectorAll('.has-tooltip');

function openToolTip(event) {
    event.preventDefault();


    const activeToolTip = document.querySelector('.tooltip_active');
    if (activeToolTip) {
        activeToolTip.classList.remove('tooltip_active');
        activeToolTip.remove();
    };

    const toolTip = document.createElement('div');
    toolTip.className = 'tooltip';


    const title = this.getAttribute('title');
    toolTip.textContent = title;


    this.parentNode.insertBefore(toolTip, this.nextSibling);
    toolTip.classList.add('tooltip_active');
};

helpTitles.forEach(title => {
    title.addEventListener('click', openToolTip);
});

