const menuToggle = document.getElementById('menu-toggle');
const labelForIcon = document.getElementById('label-for-icon');
menuToggle.addEventListener('click', () => {
    let isActive = menuToggle.classList.contains('menu-burger-active');
    isActive ? menuToggle.classList.remove('menu-burger-active') : menuToggle.classList.add('menu-burger-active');
    !isActive ?
        labelForIcon.innerHTML = `
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L18 18" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 6L6 18" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
` : labelForIcon.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <rect class="top" y="8" width="40" height="4" rx="2" fill="black" id = "rect-1"/>
    <rect class="middle" y="18" width="40" height="4" rx="2" fill="black" id = "rect-2"/>
    <rect class="bottom" y="28" width="40" height="4" rx="2" fill="black" id = "rect-3"/>
</svg>`;
});
