import {createDOMElement} from '../utils/DOM';
import FreqController from './FreqController';
import './UI.scss';
import Button from './Button';
import StartBtn from './StartBtn';
import {AXIS_X, AXIS_Y} from '../utils/constants';
import PlotService from './PlotService';
import {PLOT_ID} from '../utils/plotlySettings';
import PlotAnimService from "./PlotAnimService";

export default (function () {
    const rootContainer = document.getElementById('root');
    const render = async () => {
        const plotContainer = createPlotContainer();
        const controlPanel = createControlPanel();
        await rootContainer.append(plotContainer, controlPanel);
        PlotAnimService.setDefaultPlot();
    };
    return {render};
})();

function createPlotContainer() {
    const container = createDOMElement('section', null, ['plot__container']);
    const plot = createDOMElement('div', {id: PLOT_ID},['plot']);
    container.appendChild(plot);
    return container;
}

function createControlPanel() {
    const container = createDOMElement('section', null, ['control-panel__container']);
    const topControllers = createTopControllersContainer();
    const header = createHeader();
    const freqControllers = createFreqControllersContainer();
    const bottomControllers = createBottomControllersContainer();
    container.append(topControllers, header, freqControllers, bottomControllers);
    return container;
}

function createTopControllersContainer() {
    const container = createDOMElement('section', null, ['control-panel__inner-container']);
    const btnStart = StartBtn(() => (console.log(1)));
    const btnSpeed = Button(PlotService.getSpeed().text,
        ['btn--grey', 'btn--top'],
        () => (btnSpeed.innerHTML = PlotService.changeSpeed().text)
    );
    const btnHelp = Button('?', ['btn--grey', 'btn--top'], () => {});
    container.append(btnStart, btnSpeed, btnHelp);
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
    const freqControllerX = FreqController(AXIS_X);
    const freqControllerY = FreqController(AXIS_Y);
    container.append(freqControllerX, freqControllerY);
    return container;
}

function createBottomControllersContainer() {
    const container = createDOMElement('section', null, ['control-panel__inner-container']);
    const btnSave = Button('Save', ['btn--grey', 'btn--bottom'], () => {});
    const btnClear = Button('Clear', ['btn--grey', 'btn--bottom'], () => {});
    container.append(btnSave, btnClear);
    return container;
}
