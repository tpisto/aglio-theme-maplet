var assert, theme;

assert = require('assert');
theme = require('../theme');

describe('Options', function () {
  it('Should provide valid API Blueprint versions', function () {
    assert.ok(theme.getConfig().formats);
  });

  it('Should provide a list of options', function () {
    options = theme.getConfig().options;

    assert.ok(options);

    // Each option should have a name
    for (var i = 0; i < options.length; i++) {
      assert.ok(options[i].name);
    }
  });
});

describe('Rendering', function () {
  it('Should support custom option values', function (done) {
    // Normally you would load an API Blueprint using Protagonist
    // here, but we are just going to use `{}` as an empty AST
    // and test the HTML output.
    theme.render({}, {themeName: 'foo'}, function (err, html) {
      if (err) return done(err);

      assert(html.indexOf('foo') >= 0);

      done();
    });
  });
});
