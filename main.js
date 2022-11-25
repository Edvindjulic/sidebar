window.addEventListener('DOMContentLoaded', main)

function main() {
    addEventListeners()
}

function addEventListeners() {
    const menuIcon = document.querySelector('.burger-menu');
    menuIcon.addEventListener('click', toggleSidebar)
}

function toggleSidebar() {
    const aside = document.querySelector('aside');
    aside.classList.toggle('close');

    const menuIcon = document.querySelector('.burger-menu');
    menuIcon.classList.toggle('hidden');
}