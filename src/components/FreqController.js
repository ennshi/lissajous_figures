import {createDOMElement} from '../utils/DOM';
import './FreqController.scss';

export default (axis) => {
    const prop = `getFreq${axis}`;
    const defaultVal = 1;

    const controlFieldWrapper = createDOMElement('div', null, ['freq-controller__container-wrapper']);
    const controlFieldHeader = createDOMElement('h2');
    controlFieldHeader.innerText = axis.toUpperCase();

    const controlField = createDOMElement('div', null, ['freq-controller__container']);
    const controlBtnContainer = createDOMElement('div', null, ['freq-controller__btn-container']);

    const displayFreq = createDOMElement('span', null, ['freq-controller__value']);
    displayFreq.innerText = defaultVal;
    const setFrequency = () => {};

    const btnIncrease = createBtn('up', () => {});
    const btnDecrease = createBtn('down', () => {});

    controlBtnContainer.append(btnIncrease, btnDecrease);
    controlField.append(displayFreq, controlBtnContainer);
    controlFieldWrapper.append(controlFieldHeader, controlField);

    return controlFieldWrapper;
};

function createBtn(direction, cb) {
    const btn =  createDOMElement('button', null,['btn--grey', 'freq-controller__btn']);
    btn.innerHTML = `<i class="fas fa-chevron-${direction}"></i>`;
    btn.addEventListener('click', cb);
    return btn;
}
