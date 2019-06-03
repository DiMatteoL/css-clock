export const updateClock = (hourRotation, minuteRotation, secondRotation) => {
    document.querySelector('.hour').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('.second').style.transform = `rotate(${secondRotation}deg)`;
};

export const updateDigits = (hour, minute, second) => {
    document.querySelector('.digits').innerHTML = `${hour}:${minute}:${second}`;
};

export const clickListener = (target, callback) => {
    document.addEventListener('click', function (event) {
        if (!event.target.matches(target)) return;
        event.preventDefault();
        return callback();
    }, false);
};