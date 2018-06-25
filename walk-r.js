let fs = require('fs')
let path = require('path')
let R = require('ramda')

let readDir = dir => fs.readdirSync(dir)
let isDir = path => fs.lstatSync(path).isDirectory()
let isFile = path => fs.lstatSync(path).isFile()
let spy = R.forEach(x => console.log(x))

let getFolders = R.filter(isDir)
let getFiles = R.filter(isFile)

let prependPath = acc => R.map(f => path.join(acc,f))

let walk = (dir) => {
  let nodes = R.pipe(readDir, prependPath(dir))(dir)
  let folders = getFolders(nodes)
  let files = getFiles(nodes)
  return R.pipe(
    R.map(walk),
    R.append(files),
    R.flatten
  )(folders)
}

module.exports = walk
