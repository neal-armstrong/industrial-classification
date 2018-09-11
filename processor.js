const traverse = require('traverse')
const jsonfile = require('jsonfile')

test()

async function test() {
  const json = await jsonfile.readFile('./行业分类.json')
  traverse(json).forEach(function (node) {
    if (node.title) {
      console.log(node.title, node.code, this.path)
    }
  })
}
