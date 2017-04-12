# walk-r
A simple directory walk which returns an array of file paths, written in a declarative style with Ramda.js

Usage:
```
let walk = require('walk-r')
let absoluteFilePaths = walk(path.join(__dirname, 'folder'))
let files = filePaths.map(f => fs.readFileSync(f))

let relativeFilePaths = walk('folder')
```

Give an absolute directory name, receive an array of absolute filepaths.
Give a relative directory name, recieve an array of relative filepaths.
