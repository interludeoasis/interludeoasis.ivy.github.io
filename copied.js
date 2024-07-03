function copyToClipboard(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text).then(() => {
        showCopiedAnimation(element);
    }).catch(err => {
        console.error('error( ᵕ ᵕ̩̩ ): ', err);
    });
}

function showCopiedAnimation(element) {
    const animation = element.nextElementSibling;
    animation.style.display = 'block';
    setTimeout(() => {
        animation.style.display = 'none';
    }, 2000);
}


