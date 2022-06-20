function subPage(fn, delay) {
    let timer;
    return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
        fn();
    }, delay);
    };
}
export default subPage