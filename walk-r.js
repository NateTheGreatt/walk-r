let R = require('ramda')

let readDir = dir => fs.readdirSync(dir)

let isFolder = R.test(/^[^\.]*$/) // regex for any character except '.'
let isFile = R.pipe(isFolder, R.not) // isFolder? jk it's not

let getFolders = R.filter(isFolder)
let getFiles = R.filter(isFile)

let prependPath = path => R.map(f => path+'/'+f)

let walk = (dir, path) => {
  path = path ? path+'/'+dir : dir
  let nodes = readDir(path)
  let folders = getFolders(nodes)
  let files = R.pipe(getFiles, prependPath(path))(nodes)
  return R.pipe(
    R.map(f => walk(f,path)),
    R.append(files),
    R.flatten
  )(folders)
}

module.exports = walk
