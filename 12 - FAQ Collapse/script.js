const toggleBtns = document.querySelectorAll('.faq-toggle');

toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () => {
        toggleBtn.parentElement.classList.toggle('active');
    });
});