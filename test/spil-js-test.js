var vows = require('vows'),
    assert = require('assert'),
    analyzer = require('../lib/spil');

vows
    .describe('spil-js')
    .addBatch({
        'the spil-js module' : {
            topic: analyzer,
            'is an object': function(a) {
                assert.isObject(a);
            }
        }
    })
    .export(module);