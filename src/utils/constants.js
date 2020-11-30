export const AMPLITUDE = 1;
export const MIN_FREQUENCY = 1;
export const MAX_FREQUENCY = 15;
export const dT = 0.01;
export const MAX_T = 800;
export const SPEED_dPHASE = [
    {text: 'X2', num: 0.001, next: 1},
    {text: 'X4', num: 0.002, next: 2},
    {text: 'X8', num: 0.004, next: 3},
    {text: 'X10', num: 0.008, next: 4},
    {text: 'X1', num: 0.010, next: 0}
];

export const MAX_PHASE = 2.000;

export const AXIS_X = 'X';
export const AXIS_Y = 'Y';

export const INCREASE = 'up';
export const DECREASE = 'down';

export const MAX_NUM_PLOTS = 15;

export const INITIAL_PARAMS = {
    freqX: MIN_FREQUENCY,
    freqY: MIN_FREQUENCY,
    speed: SPEED_dPHASE[0],
};

