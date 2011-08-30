RegExt
======

RegExt is trying to fill a missing feature for javascript regular expressions.
It adds some flavor to classic javascript RegExp expressions to support named
capturing groups.


Install
-------

``` javascript
$ npm install regext
```

Doc
---
RegExt module extends global String class with method 'regext' which accepts an
extended regexp pattern as first argument. While classic javascript regexp capturing
groups uses '(...)' syntax, RegExt named capturing groups should be defined as '(P\<param_name\>...)'.

``` javascript
String.prototype.regext = function (extRegex, callback);

```

The second argument is a callback function which carries captured named groups object
and raw regexp result object.

``` javascript
callback = function (namedCaptures, rawCaptures);
```

Usage
-----

``` javascript
require('regext');

'Hello, World'.regext(/Hello,\s(P<subject>\w+)/, function(capture) {
	
	console.log(capture.subject);
	
});
```

Disclaimer
----------

Currently RegExt is not very well tested, please use it at your own risk.

More tests are very welcome.

Licence
-------
Copyright (c) 2011 Kadir Pekel.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.