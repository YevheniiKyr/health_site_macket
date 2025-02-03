const menuToggle = document.getElementById('menu-toggle');
const menuBurgerOptions = document.getElementById('menu-burger-option');
menuToggle.addEventListener('blur', () => {
    menuBurgerOptions.style.display = 'none';
});
