import Button from "./Button";
import {createDOMElement} from "../utils/DOM";
import {helpText} from "../utils/helpText";

export default (function () {
    const mainBlock = document.getElementById('root');
    const helpBlock = document.getElementById('help-block');
    const hide = () => {
        helpBlock.classList.add('hidden');
        mainBlock.classList.remove('hidden');
    };
    const createContent = () => {
        const closeBtn = Button('X',
            ['btn--transparent', 'btn--close'],
            () => hide()
        );
        const header = createDOMElement('h1');
        header.innerText = 'Help';
        const textContainer = createDOMElement('div',
            null,
            ['help__text-container']
        );
        textContainer.innerHTML = helpText;
        helpBlock.append(closeBtn, header, textContainer);
    };
    createContent();
    const show = () => {
        mainBlock.classList.add('hidden');
        helpBlock.classList.remove('hidden');
    };
    return {
        show
    }
})();
