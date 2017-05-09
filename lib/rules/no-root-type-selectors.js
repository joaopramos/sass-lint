'use strict';

var helpers = require('../helpers');

module.exports = {
  'name': 'no-root-type-selectors',
  'defaults': {},
  'detect': function (ast, parser) {
    var result = [];

    ast.eachFor('ruleset', function (ruleset) {
      ruleset.eachFor('selector', function (selector) {
        selector.forEach( function(item) {
          if (item.is('typeSelector')) {
              result = helpers.addUnique(result, {
                'ruleId': parser.rule.name,
                'line': item.start.line,
                'column': item.start.column,
                'message': 'Type selectors are not allowed in the root level',
                'severity': parser.severity
              });
          }
        });
      });
    });

    return result;
  }
};
