ttlFn
======

Wraps a function with a time limit. If the function is not called by the specified time it will never call the original function and optionally call a notifier function.

![npm tag](https://nodei.co/npm/ttlfn.png)

Usage
-----

```js
var ttlfn = require('ttlfn');

var myfunc = ttlfn(3000, function() {
  console.log('Hello');
}, function() {
  console.log('Good bye');
});

myfunc()

setTimout(myfunc, 4000);

```

The above example will print.

```
Hello
Good Bye
```
