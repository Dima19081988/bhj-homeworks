const fontSizes = document.querySelectorAll('.font-size');
const textColors = document.querySelectorAll('.color[data-text-color]');
const bgColors = document.querySelectorAll('.color[data-bg-color]');
const book = document.querySelector('.book');

fontSizes.forEach(fontSize => {
    fontSize.addEventListener('click', function(event) {
        event.preventDefault();
        fontSizes.forEach(el => el.classList.remove('font-size_active'));
        fontSize.classList.add('font-size_active');
        book.classList.remove('book_fs-big', 'book_fs-small');
        const size = fontSize.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        };
    });
});

textColors.forEach(textColor => {
    textColor.addEventListener('click', function(event) {
        event.preventDefault();
        textColors.forEach(el => el.classList.remove('color_active'));
        textColor.classList.add('color_active');
        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        const color = textColor.dataset.textColor;
        if (color === 'black') {
            book.classList.add('book_color-black');
        };
        if (color === 'gray') {
            book.classList.add('book_color-gray');
        };
        if (color === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
        };
    });
});

bgColors.forEach(bgColor => {
    bgColor.addEventListener ('click', function(event) {
        event.preventDefault();
        bgColors.forEach(el => el.classList.remove('color_active'));
        bgColor.classList.add('color_active');
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        const color = bgColor.dataset.bgColor;
        if (color === 'gray') {
            book.classList.add('book_bg-gray');
        }
        if (color === 'black') {
            book.classList.add('book_bg-black');
        }
        if (color === 'white') {
            book.classList.add('book_bg-white');
        };
    });
});



