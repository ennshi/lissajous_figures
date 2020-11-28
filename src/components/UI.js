import {createDOMElement} from '../utils/DOM';
import FreqController from './FreqController';
import './UI.scss';

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
    return container;
}

function createControlPanel() {
    const container = createDOMElement('section', null, ['control-panel__container']);
    const header = createHeader();
    container.appendChild(header);
    const freqControllers = createFreqControllersContainer();
    container.appendChild(freqControllers);
    const bottomControllers = createBottomControllersContainer();
    container.appendChild(bottomControllers);
    return container;
}
function createHeader() {
    const container = createDOMElement('header', null, ['control-panel__header']);
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
    return container;
}
