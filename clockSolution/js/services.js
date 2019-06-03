
export const getRotation = (hour, minute, second) => {
    const secondRotation = second * 6;
    const minuteRotation = minute * 6 + secondRotation / 60;
    const hourRotation = hour / 12 * 360 + minuteRotation / 12;

    return [hourRotation, minuteRotation, secondRotation];
};

export const formatHourNumbers = number => {
    const integer = Math.floor(number);
    return integer.toString().length === 2 ? integer : `0${integer}`;
};

export const compose = (...funcs) =>
    funcs.reduce((prevFunc, nextFunc) => (...args) => prevFunc(nextFunc(...args)), value => value);