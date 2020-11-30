import Button from './Button';
import PlotAnimService from "./PlotAnimService";

export default function () {
    const btn = Button('<i class="fas fa-play"></i>',
        ['btn--grey', 'btn--top'],
        () => {
        if(PlotAnimService.getStart()) {
            btn.innerHTML = '<i class="fas fa-play"></i>';
            return PlotAnimService.stopAnimation();
        }
        btn.innerHTML = '<i class="fas fa-stop"></i>';
        PlotAnimService.startAnimation();
    });
    return btn;
}
