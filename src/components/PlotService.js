import Plotly from 'plotly.js-dist';
import {MAX_FREQUENCY, MIN_FREQUENCY, SPEED_dPHASE} from "../utils/constants";

export default (function () {
    const params = {
        freqX: MIN_FREQUENCY,
        freqY: MIN_FREQUENCY,
        speed: SPEED_dPHASE.X2,
        continue: false
    };
    const getFreqX = () => (params.freqX);
    const getFreqY = () => (params.freqY);
    const getContinue = () => (params.continue);
    const getSpeed = () => (params.speed);

    const upFreqX = () => {
        if(params.freqX < MAX_FREQUENCY) {
            params.freqX = getFreqX() + 1;
        }
    };
    const upFreqY = () => {
        if(params.freqY < MAX_FREQUENCY) {
            params.freqY = getFreqY() + 1;
        }
    };
    const downFreqX = () => {
        if(params.freqX > MIN_FREQUENCY) {
            params.freqX = getFreqX() - 1;
        }
    };
    const downFreqY = () => {
        if(params.freqY > MIN_FREQUENCY) {
            params.freqY = getFreqY() - 1;
        }
    };
    return {
        upFreqX,
        upFreqY,
        downFreqX,
        downFreqY,
        getFreqX,
        getFreqY
    };
})();
