# multilayerlayout3d
# https://github.com/DennisSchwartz/multilayerlayout3d
#
# Copyright (c) 2015, Dennis Schwartz
# Licensed under the MIT license.

test:

	@NODE_ENV=test ./node_modules/mocha/bin/mocha -R spec --ui bdd --colors --recursive -t 8000 ./test/*.spec.js

.PHONY: test