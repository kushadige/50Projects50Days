const hourEl = document.querySelector('.hour');
const minutesEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        toggle.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        toggle.innerHTML = 'Light mode';
    }
});

function setTime(){
    const time = new Date();
    //MONTH jan -> 0, feb -> 1...
    const month = time.getMonth();
    //DAY sunday -> 0, monday -> 1... 
    const day = time.getDay();
    //HOUR e.g 21, 22...
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    //MIN e.g 32, 33...
    const minutes = time.getMinutes();
    //SEC e.g 23, 24...
    const seconds = time.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${(30 * hoursForClock)}deg)`;

    minutesEl.style.transform = `translate(-50%, -100%) rotate(${(6 * minutes)}deg)`;
    
    secondEl.style.transform = `translate(-50%, -100%) rotate(${(6 * seconds)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
}

setTime();

setInterval(setTime, 1000);