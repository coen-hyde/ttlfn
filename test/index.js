var should = require('should')
  , ttlfn = require('../');

describe('ttlfn', function() {
  it('should call the original function if wrapped function is called before the timeout', function(done) {
    var called = false;
    
    var modifiedFn = ttlfn(500, function() {
      called = true;
    });

    modifiedFn();
    called.should.equal(true);
    done()
  });

  it('should not call the original function if wrapped function is not called before the timeout', function(done) {
    var called = false;
    
    var modifiedFn = ttlfn(500, function() {
      called = true;
    });

    setTimeout(function() {
      modifiedFn();
      called.should.equal(false);
      done();
    }, 1000);
  });

  it('should call the notifier function once timeout is reached', function(done) {
    var called = false
      , notified = false;
    
    var modifiedFn = ttlfn(500, function() {
      called = true;
    }, function() {
      notified = true;
    });

    setTimeout(function() {
      called.should.equal(false);
      notified.should.equal(true);
      done();
    }, 1000);
  });
})