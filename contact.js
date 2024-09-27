const formCard = document.querySelector('.form-card');

formCard.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    formCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

formCard.addEventListener('mouseleave', () => {
    formCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
