/*
 * multilayerlayout3d
 * https://github.com/DennisSchwartz/multilayerlayout3d
 *
 * Copyright (c) 2015, Dennis Schwartz
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var multilayerlayout3d = require('../lib/multilayerlayout3d.js');

describe('multilayerlayout3d module', function() {
    describe('#awesome()', function() {
        it('should return a hello', function() {
            expect(multilayerlayout3d.awesome('livia')).to.equal('hello livia');
        });
    });
});
