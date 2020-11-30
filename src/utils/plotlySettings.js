import {AMPLITUDE} from "./constants";

export const PLOT_ID = 'plot';

export const INIT_DATA = {
    x: [],
    y: []
};

export const TRACE_SETTINGS = {
    mode: 'lines',
    hoverinfo: 'none',
    line: {
        color: 'rgb(142, 254, 54)',
        width: 2
    }
};

export const LAYOUT = {
    xaxis: {range: [-AMPLITUDE, AMPLITUDE]},
    yaxis: {range: [-AMPLITUDE, AMPLITUDE]},
    paper_bgcolor: 'rgb(68, 66, 66)',
    plot_bgcolor: 'rgb(68, 66, 66)'
};

export const PLOT_CONFIG = {
    displayModeBar: false,
};
