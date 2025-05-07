document.getElementById('assessmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    setTimeout(() => {
        this.submit();
    }, 300);
});

if (document.querySelector('.result-panel.active')) {
    setTimeout(() => {
        document.querySelector('.result-panel').style.opacity = '1';
        document.querySelector('.result-panel').style.transform = 'translateX(0)';
    }, 100);
}