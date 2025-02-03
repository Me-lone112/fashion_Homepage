var indicator = document.querySelector('.nav-indicator');
var items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
items.forEach(function(item) {
    item.classList.remove('is-active');
    item.removeAttribute('style');
});

indicator.style.width = el.offsetWidth + 'px';
indicator.style.left = el.offsetLeft + 'px';
indicator.style.backgroundColor = el.getAttribute('active-color');

el.classList.add('is-active');
el.style.color = el.getAttribute('active-color');
}

items.forEach(function(item, index) {
item.addEventListener('click', function(e) {
    handleIndicator(e.target);
});
if (item.classList.contains('is-active')) {
    handleIndicator(item);
}
});
