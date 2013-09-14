var vows = require('vows'),
	assert = require('assert'),
	analyzer = require('../lib/analyzer');

vows
	.describe('js-analyzer')
	.addBatch({
		'the js-analyzer module' : {
			topic: analyzer,
			'is an object': function(a) {
				assert.isObject(a);
			}
		}
	})
	.export(module);