const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const sliders = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider(){
    sliders.forEach((slider, index) => {
        slider.classList.remove('active', 'previous', 'next');

        if(index === currentIndex){
            slider.classList.add('active');
        }else  if(index === (currentIndex - 1 + sliders.length) % sliders.length) {
            slider.classList.add('previous');
        }else if(index === (currentIndex + 1) % sliders.length){
            slider.classList.add('next');
        }
    });
}


leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    updateSlider();
});

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliders.length;
    updateSlider();
});

updateSlider();


