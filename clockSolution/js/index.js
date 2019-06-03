import clock from './clock.js';
import timer, { resetTimer } from './timer.js';
import { clickListener, updateClock, updateDigits } from './domEvents.js';
import { getRotation, formatHourNumbers, compose } from './services.js';

const INTERVAL = 100;
const INCREMENT = INTERVAL/1000;

let isClockMode = true;
let shouldRun = true;

const invertIsClockMode = () => isClockMode = !isClockMode;
const invertShouldRun = () => shouldRun = !shouldRun;
const shouldRunToTrue = () => shouldRun = true;

clickListener('#switch', compose(invertIsClockMode, shouldRunToTrue, resetTimer));
clickListener('#reset', compose(resetTimer, shouldRunToTrue));
clickListener('#stop', invertShouldRun);

const getTime = () => isClockMode ? clock() : timer(INCREMENT);

function intervalRunner() {
    if (shouldRun) {
        const time = getTime();
        updateClock(...getRotation(...time));
        updateDigits(...time.map(a => formatHourNumbers(a)));
    }
    setTimeout(intervalRunner, INTERVAL);
}

intervalRunner();