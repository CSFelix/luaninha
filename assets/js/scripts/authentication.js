window.onload = function() {
    const correctPassword = 'MjEtMDItMjU=';
    const userPassword = prompt('Qual a senha?');

    if (userPassword !== atob(correctPassword)) {
        const youtubeVideo = 'https://www.youtube.com/shorts/m3YeXPpai4U';
        alert('Você errou a senha 😭');
        window.location.href = youtubeVideo;
        return;
    }

    alert('Senha correta 🥳 Agora, toque no Kirby!');
    const overlayContainer = document.getElementById('overlayContainer');
    overlayContainer.style.display = 'none';
};
