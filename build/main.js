(function() {
  var MockElement,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MockElement = (function() {
    function MockElement() {
      this.addEventListener = bind(this.addEventListener, this);
      this.clientWidth = 0;
      this.clientHeight = 0;
    }

    MockElement.prototype.addEventListener = function() {};

    return MockElement;

  })();

  window.MockElement = MockElement;

}).call(this);
