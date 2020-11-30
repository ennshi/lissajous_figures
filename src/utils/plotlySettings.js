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
    xaxis: {range: [-AMPLITUDE - 0.1, AMPLITUDE + 0.1]},
    yaxis: {range: [-AMPLITUDE - 0.1, AMPLITUDE + 0.1]},
    paper_bgcolor: 'rgb(68, 66, 66)',
    plot_bgcolor: 'rgb(68, 66, 66)',
    margin: {
        l: 5,
        r: 5,
        b: 5,
        t: 5,
        pad: 5
    }
};

export const PLOT_CONFIG = {
    displayModeBar: false,
};

export const ANIM_CONFIG = {
    transition: {
        duration: 0,
    },
    frame: {
        duration: 0,
        redraw: false,
    }
};
