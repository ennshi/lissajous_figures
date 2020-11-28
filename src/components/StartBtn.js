import Button from './Button';

export default function (cb) {
    const btn = Button('<i class="fas fa-play"></i>', ['btn--grey', 'btn--top'], cb);
    btn.addEventListener('click', () => {
        btn.innerHTML = btn.innerHTML === '<i class="fas fa-play" aria-hidden="true"></i>' ?
            '<i class="fas fa-stop"></i>' :
            '<i class="fas fa-play"></i>';
    });
    return btn;
}
