import Plotly from 'plotly.js-dist';
import {INIT_DATA, LAYOUT, PLOT_CONFIG, PLOT_ID, TRACE_SETTINGS} from "../utils/plotlySettings";

export default (function () {
    const params = {
        start: false,
        reqFrame: null,
        numPlots: 0
    };
    const setDefaultPlot = () => {
        Plotly.newPlot(PLOT_ID, [{...INIT_DATA, ...TRACE_SETTINGS}], LAYOUT, PLOT_CONFIG);
    };
    const startAnimation = () => {

    };
    const stopAnimation = () => {

    };
    const addPlot = () => {

    };
    const clearAll = () => {

    };
    return {
        setDefaultPlot
    }
})();
