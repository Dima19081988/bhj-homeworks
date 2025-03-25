const textArea = document.getElementById('editor');

const button = document.getElementById('button');

window.onload = () => {
    const savedText = localStorage.getItem('text');
    if (savedText) {
        textArea.value = savedText;
    }
}

textArea.addEventListener ('input', () => {
    localStorage.setItem('text', textArea.value);
})

button.addEventListener('click', () => {
    textArea.value = '';
    localStorage.removeItem('text');
})