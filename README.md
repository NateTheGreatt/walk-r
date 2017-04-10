# walk-r
A simple directory walk, written in a declarative style with Ramda.js

Usage:
```
let walk = require('walk-r')
let filePaths = walk('folder')
let files = filePaths.map(f => fs.readFileSync(f))
```

Give a directory name, receive an array of file paths relative to that directory.
