import {INITIAL_PARAMS, MAX_FREQUENCY, MIN_FREQUENCY, SPEED_dPHASE} from "../utils/constants";

export default (function () {
    const params = {...INITIAL_PARAMS};
    const getFreqX = () => (params.freqX);
    const getFreqY = () => (params.freqY);
    const getSpeed = () => (params.speed);

    const upFreqX = () => {
        if(params.freqX < MAX_FREQUENCY) {
            params.freqX = getFreqX() + 1;
        }
        return getFreqX();
    };
    const upFreqY = () => {
        if(params.freqY < MAX_FREQUENCY) {
            params.freqY = getFreqY() + 1;
        }
        return getFreqY();
    };
    const downFreqX = () => {
        if(params.freqX > MIN_FREQUENCY) {
            params.freqX = getFreqX() - 1;
        }
        return getFreqX();
    };
    const downFreqY = () => {
        if(params.freqY > MIN_FREQUENCY) {
            params.freqY = getFreqY() - 1;
        }
        return getFreqY();
    };
    const changeSpeed = () => {
        params.speed = SPEED_dPHASE[getSpeed().next];
        return getSpeed();
    };
    return {
        upFreqX,
        upFreqY,
        downFreqX,
        downFreqY,
        getFreqX,
        getFreqY,
        getSpeed,
        changeSpeed
    };
})();
