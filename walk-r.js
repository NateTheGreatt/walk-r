let fs = require('fs')
let path = require('path')
let R = require('ramda')

let readDir = dir => fs.readdirSync(dir)

let isFolder = R.test(/^[^\.]*$/) // regex for any character except '.'
let isFile = R.pipe(isFolder, R.not) // isFolder? jk it's not

let getFolders = R.filter(isFolder)
let getFiles = R.filter(isFile)

let prependPath = acc => R.map(f => path.join(acc,f))

let walk = (dir, acc) => {
  acc = acc ? path.join(acc,dir) : dir
  let nodes = readDir(acc)
  let folders = getFolders(nodes)
  let files = R.pipe(getFiles, prependPath(acc))(nodes)
  return R.pipe(
    R.map(f => walk(f,acc)),
    R.append(files),
    R.flatten
  )(folders)
}

module.exports = walk
