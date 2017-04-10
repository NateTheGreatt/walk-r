# walk-r
A simple directory walk, written in a declarative style with Ramda.js

Usage:
```
let walk = require('walk-r')
let files = walk('folder')
```

Give a directory name, receive an array of file paths relative to that directory.
