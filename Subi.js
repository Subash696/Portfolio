function openPage(page) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = page;
    }, 500); // Duration of fade-out
}

window.onload = function() {
    document.body.classList.remove('fade-out');
};
