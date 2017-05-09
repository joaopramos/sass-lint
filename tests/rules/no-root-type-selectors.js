'use strict';

var lint = require('./_lint');

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no root type selectors - scss', function () {
  var file = lint.file('no-root-type-selectors.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-root-type-selectors': 1
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });

});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no root type selectors - sass', function () {
  var file = lint.file('no-root-type-selectors.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-root-type-selectors': 1
    }, function (data) {
      lint.assert.equal(4, data.warningCount);
      done();
    });
  });


});
