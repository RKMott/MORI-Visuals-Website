document.querySelectorAll('.faqBox').forEach(box => {
    box.addEventListener('click', function () {
        document.querySelectorAll('.faqBox').forEach(b => b !== box && b.classList.remove('expanded'));
        box.classList.toggle('expanded');
    });
});