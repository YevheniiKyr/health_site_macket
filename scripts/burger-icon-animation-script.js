const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuToggle.classList.forEach((c) => console.log(c));
});
