import {createDOMElement} from '../utils/DOM';
import './Button.scss';

export default function (text, classes, cb) {
    const btn = createDOMElement('button', null, classes);
    btn.innerHTML = text;
    btn.addEventListener('click', cb);
    return btn;
}
