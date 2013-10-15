module.exports = function(limit, fn, afterFn) {
  var killed = false;

  setTimeout(function() {
    killed = true;

    if (afterFn) {
      afterFn();
    }
  }, limit);

  return function() {
    if (killed) {
      // Timeout has been reached
      return
    }

    fn();
  }
}