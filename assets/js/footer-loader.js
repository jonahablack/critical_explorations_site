// Footer loader
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('site-footer');
    if (footerContainer) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }
}); 