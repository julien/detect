/**
 * Minimal browser feature detection
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['detect'], factory);
  } else {
      // Browser globals
      root.detect = factory(root.detect);
  }
}(this, function (detect) {

  var vendors = ['moz', 'webkit', 'o', 'ms'];
  
  return {

    canvas: function () {
      var e = document.createElement('canvas');
      return (!!e && !!e.getContext('2d'));
    },

    webgl: function () {
      var e = document.createElement('canvas');
      return (!!e && !!(e.getContext('experimental-webgl') || e.getContext('webgl')));
    },

    transitions: function () {
      var el = document.createElement('div')
        , style = el.style
        , prop = 'transition'
        , vendors = ['Moz', 'Webkit', 'O', 'ms']
        , it = vendors.length;

      if (typeof style[prop] === 'string') {
        return true;
      } 

      prop = prop.chartAt(0).toUpperCase() + prop.substr(1);

      while ((it -= 1) >= 0) {
        if (typeof style[vendors[i] + prop] === 'string') {
          return true;
        }
      }
      return false;
    },

    usermedia: function () {
      var it = vendors.length;

      while((it -= 1) >= 0) {
        if (typeof navigator[vendors[it] + 'GetUserMedia'] === 'function') {
          return true;
        }
      }
      return false;
    },

    mediaqueries: function () {
      return (!!window.matchMedia || !!window.msMatchMedia);
    },

    // TODO: change name? animationFrame() ? raf() ?
    requestAnimationFrame: function () {
      var it = vendors.length;

      if ('requestAnimationFrame' in window) {
        return true;
      }

      while((it -= 1) >= 0) {
        if (typeof window[vendors[it] + 'RequestAnimationFrame'] === 'function') {
          return true;
        }
      }
      return false;
    }
    
  };
}));
