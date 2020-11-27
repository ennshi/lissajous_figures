import UI from './UI';
export default (function () {
    const start = () => {
        console.log('Start');
        UI.render();
    };
    return {
        start
    };
})();
