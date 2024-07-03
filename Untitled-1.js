document.addEventListener("DOMContentLoaded", function() {
    let percentage = 0;
    const loadingScreen = document.getElementById('loading-screen');
    const loadingPercentage = document.querySelector('.loading-percentage');
    const loadingBarFill = document.querySelector('.loading-bar-fill');

    function updateLoading() {
        percentage += 1;
        loadingPercentage.textContent = percentage + '%';
        loadingBarFill.style.width = percentage + '%';

        if (percentage >= 100) {
            clearInterval(loadingInterval);
            loadingScreen.style.display = 'none';
        }
    }

    const loadingInterval = setInterval(updateLoading, 50); // 50ミリ秒ごとに1%増加
});
