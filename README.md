# Multilayerlayout3d [![Build Status](https://secure.travis-ci.org/DennisSchwartz/multilayerlayout3d.png?branch=master)](http://travis-ci.org/DennisSchwartz/multilayerlayout3d) [![NPM version](https://badge-me.herokuapp.com/api/npm/multilayerlayout3d.png)](http://badges.enytc.com/for/npm/multilayerlayout3d)

> A multilayer layout for ngraph.three

## Getting Started
Install the module with: `npm install multilayerlayout3d`

```javascript
var multilayerlayout3d = require('multilayerlayout3d');
multilayerlayout3d.awesome(); // "hello "
```

## Documentation

#### .awesome(name)

**Parameter**: `name`
**Type**: `String`
**Example**: `Livia`

<<<<<<< Updated upstream
The 'awesome' method is responsible for showing a name.

How to use this method

```javascript
multilayerlayout3d.awesome('livia'); // "hello livia"
=======
You can also specify the distance between layers in the options, passed as an additional input value/

```javascript

/*
    Set options
*/
var options = {
    interLayerDistance: 100
};

/*
    Initialize ngraph.three
 */
var graphics = nthree(this.graph, {
    container: document.body,
    layout: mplexLayout(this.graph, physicsSettings, options)
});
>>>>>>> Stashed changes
```

## Contributing

Please submit all issues and pull requests to the [DennisSchwartz/multilayerlayout3d](https://github.com/DennisSchwartz/multilayerlayout3d) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/DennisSchwartz/multilayerlayout3d/issues).

## License 

The MIT License

Copyright (c) 2015, Dennis Schwartz

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

