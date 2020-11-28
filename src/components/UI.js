import {createDOMElement} from '../utils/DOM';
import FreqController from './FreqController';
import './UI.scss';
import Plot from './Plot';
import Button from './Button';
import StartBtn from './StartBtn';
import SpeedBtn from './SpeedBtn';

export default (function () {
    const rootContainer = document.getElementById('root');
    const render = () => {
        const plotContainer = createPlotContainer();
        const controlPanel = createControlPanel();
        rootContainer.appendChild(plotContainer);
        rootContainer.appendChild(controlPanel);
    };
    return {render};
})();

function createPlotContainer() {
    const container = createDOMElement('section', null, ['plot__container']);
    const plot = Plot.plot;
    container.appendChild(plot);
    return container;
}

function createControlPanel() {
    const container = createDOMElement('section', null, ['control-panel__container']);
    const topControllers = createTopControllersContainer();
    container.appendChild(topControllers);
    const header = createHeader();
    container.appendChild(header);
    const freqControllers = createFreqControllersContainer();
    container.appendChild(freqControllers);
    const bottomControllers = createBottomControllersContainer();
    container.appendChild(bottomControllers);
    return container;
}
function createTopControllersContainer() {
    const container = createDOMElement('section', null, ['control-panel__inner-container']);
    const btnStart = StartBtn(() => (console.log(1)));
    const btnSpeed = SpeedBtn(() => (console.log(2)));
    const btnHelp = Button('?', ['btn--grey', 'btn--top'], () => {});
    container.appendChild(btnStart);
    container.appendChild(btnSpeed);
    container.appendChild(btnHelp);
    return container;
}

function createHeader() {
    const container = createDOMElement('header', null, ['control-panel__header']);
    const name = createDOMElement('h1');
    name.innerText = 'Lissajous Figures';
    container.appendChild(name);
    return container;
}

function createFreqControllersContainer() {
    const container = createDOMElement('section', null, ['control-panel__inner-container']);
    const freqControllerX = FreqController('X');
    const freqControllerY = FreqController('Y');
    container.appendChild(freqControllerX);
    container.appendChild(freqControllerY);
    return container;
}

function createBottomControllersContainer() {
    const container = createDOMElement('section', null, ['control-panel__inner-container']);
    const btnSave = Button('Save', ['btn--grey', 'btn--bottom'], () => {});
    const btnClear = Button('Clear', ['btn--grey', 'btn--bottom'], () => {});
    container.appendChild(btnSave);
    container.appendChild(btnClear);
    return container;
}
