function menuopn(element) {
    const menu = document.getElementById('menu');
    const body = document.body;

    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
        element.src = 'asserts/threedot.svg';
        element.style.width = '';
        body.style.overflow = ''

    }
    else {
        menu.style.display = 'flex';
        element.src = 'asserts/wrong.svg';
        element.style.width = '0.9em';
        body.style.overflow = 'hidden';

    }
}
