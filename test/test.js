
describe('detect', function() {

  describe('#canvas()', function() {
    it('should return true if canvas is supported', function() {
      expect(detect.canvas()).to.be(true);
    });
  });

  describe('#webgl()', function() {
    it('should return true if webgl is supported', function() {
      expect(detect.webgl()).to.be(true);
    });
  });

  describe('#transitions()', function() {
    it('should return true if css transitions are supported', function() {
      expect(detect.transitions()).to.be(true);
    });
  });

  describe('#usermedia()', function() {
    it('should return true if getUserMedia is supported', function() {
      expect(detect.usermedia()).to.be(true);
    });
  });

  describe('#mediaqueries()', function() {
    it('should return true if media queries are supported', function() {
      expect(detect.mediaqueries()).to.be(true);
    });
  });

  describe('#requestAnimationFrame()', function() {
    it('should return true if requestAnimationFrame is supported', function() {
      expect(detect.requestAnimationFrame()).to.be(true);
    });
  });

});
