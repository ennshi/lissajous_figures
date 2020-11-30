import {createDOMElement} from '../utils/DOM';
import './FreqController.scss';
import PlotService from './PlotService';
import {DECREASE, INCREASE, MAX_FREQUENCY, MIN_FREQUENCY} from '../utils/constants';

export default (axis) => {
    const defaultVal = PlotService[`getFreq${axis}`]();

    const controlFieldWrapper = createDOMElement('div', null, ['freq-controller__container-wrapper']);
    const controlFieldHeader = createDOMElement('h2');
    controlFieldHeader.innerText = axis;

    const controlField = createDOMElement('div', null, ['freq-controller__container']);

    const displayFreq = createDOMElement('span', null, ['freq-controller__value']);
    displayFreq.innerText = defaultVal;

    const controlBtnContainer = createBtnGroup(axis, displayFreq);
    controlField.append(displayFreq, controlBtnContainer);
    controlFieldWrapper.append(controlFieldHeader, controlField);
    return controlFieldWrapper;
};

function createBtnGroup(axis, displayValue) {
    const controlBtnContainer = createDOMElement('div', null, ['freq-controller__btn-container']);
    const incBtn =  createBtn(INCREASE);
    const decrBtn =  createBtn(DECREASE);
    controlBtnContainer.append(incBtn, decrBtn);
    const setNewVal = (type) => {
        const curValue = PlotService[`${type}Freq${axis}`]();
        displayValue.innerText = curValue;
        return curValue;
    };
    incBtn.addEventListener('click', () => {
        if(decrBtn.disabled) {
            decrBtn.removeAttribute('disabled');
        }
        const curValue = setNewVal(INCREASE);
        if(curValue === MAX_FREQUENCY) {
            incBtn.disabled = 'disabled';
        }
    });
    decrBtn.addEventListener('click', () => {
        if(incBtn.disabled) {
            incBtn.removeAttribute('disabled');
        }
        const curValue = setNewVal(DECREASE);
        if(curValue === MIN_FREQUENCY) {
            decrBtn.disabled = 'disabled';
        }
    });
    return controlBtnContainer;
}

function createBtn(type) {
    const btn = createDOMElement('button', null,['btn--grey', 'freq-controller__btn']);
    btn.innerHTML = `<i class="fas fa-chevron-${type}"></i>`;
    return btn;
}
