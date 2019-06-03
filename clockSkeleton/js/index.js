import { updateClock, updateDigits } from './domEvents.js';

const INTERVAL = 100;

const intervalRunner = () => {
    updateClock(0, 0, 0);
    updateDigits(0, 0, 0);
    setTimeout(intervalRunner, INTERVAL);
};

intervalRunner();