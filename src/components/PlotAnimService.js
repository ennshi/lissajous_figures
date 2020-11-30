import Plotly from 'plotly.js-dist';
import {ANIM_CONFIG, INIT_DATA, LAYOUT, PLOT_CONFIG, PLOT_ID, TRACE_SETTINGS} from "../utils/plotlySettings";
import {AMPLITUDE, dT, MAX_PHASE, MAX_T} from "../utils/constants";
import PlotService from './PlotService';

export default (function () {
    const params = {
        data: INIT_DATA,
        phaseDiff: 0,
        start: false,
        reqFrame: null,
        numPlots: 0
    };
    const getStart = () => (params.start);
    const setDefaultPlot = () => {
        Plotly.newPlot(PLOT_ID, [{...INIT_DATA, ...TRACE_SETTINGS}], LAYOUT, PLOT_CONFIG);
    };
    const updateData = () => {
        if(params.start) {
            const phDiff = params.phaseDiff;
            Object.assign(params, {data: countData(phDiff)});
            Plotly.animate(PLOT_ID,
                {data: [{...params.data}]},
                ANIM_CONFIG
            );
            params.phaseDiff = phDiff < MAX_PHASE ? parseFloat((phDiff + PlotService.getSpeed().num).toFixed(3)) : 0;
            params.reqFrame = requestAnimationFrame(updateData);
        }
    };
    const startAnimation = () => {
        params.start = true;
        updateData();
    };
    const stopAnimation = () => {
        params.start = false;
        params.reqFrame = null;
    };
    const addPlot = () => {

    };
    const clearAll = () => {

    };
    return {
        setDefaultPlot,
        startAnimation,
        stopAnimation,
        getStart
    }
})();

function countData(phaseDiff) {
    const x = [];
    const y = [];
    for(let i = 0; i < MAX_T; i++) {
        const t = i * dT;
        x[i] = parseFloat((AMPLITUDE * Math.sin(PlotService.getFreqX() * t + Math.PI * phaseDiff)).toFixed(3));
        y[i] = parseFloat((AMPLITUDE * Math.sin(PlotService.getFreqY() * t)).toFixed(3));
    }
    return {x, y};
}
