let seconds = 0;

const timer = (increment) => {
    const hour = seconds / 3600;
    const minute = seconds / 60;
    const second = seconds % 60;
    seconds += increment;

    return [hour, minute, second];
};

export const resetTimer = () => seconds = 0;

export default timer;