let myplugin = function (Vue) {
  Vue.prototype.fdoufn = function (fn, wait) {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn();
      }, wait);
    };
  };
};
export default myplugin;