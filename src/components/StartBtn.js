import Button from './Button';
import PlotAnimService from "./PlotAnimService";

export default function () {
    const btn = Button('<i class="fas fa-play"></i>',
        ['btn--green', 'btn--top'],
        () => {
        if(PlotAnimService.getStart()) {
            return PlotAnimService.stopAnimation();
        }
        PlotAnimService.startAnimation();
    });
    btn.setAttribute('id', 'start-btn');
    return btn;
}
