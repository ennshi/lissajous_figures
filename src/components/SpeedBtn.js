import Button from './Button';

export default function (cb) {
    const btn = Button('X2', ['btn--grey', 'btn--top'], cb);
    btn.addEventListener('click', () => {
        let speed = '';
        switch (btn.innerHTML) {
            case 'X2':
                speed = 'X4';
                break;
            case 'X4':
                speed = 'X8';
                break;
            default:
                speed = 'X2'
        }
        btn.innerHTML = speed;
    });
    return btn;
}
