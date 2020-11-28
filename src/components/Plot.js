import {createDOMElement} from '../utils/DOM';
import './Plot.scss';

export default (function () {
    const plot = createDOMElement('div', {id: 'plot'},['plot']);
    return {plot};
})();
