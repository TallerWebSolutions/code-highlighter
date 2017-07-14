const highlight = require('pygments')
const path = require('path')
const fs = require('fs')

const filesJS = [
  'ramda',
]

const filesJSON = [
  // 'test',
]

const files = [].concat(
  filesJS.map(file => file + '.js'),
  filesJSON.map(file => file + '.json')
)

files.forEach((file) => {
  const filePath = path.join(__dirname, '../' + file)
  const data = fs.readFileSync(filePath)
  highlight(data, 'js', (err, html) => {
    if (err) throw err
    const destination = path.join(__dirname, '../html/' + file + '.html')
    const style = '<link href="../css/styles.css" rel="stylesheet">'
    const script = '<script src="../node_modules/clipboard-js/clipboard.js"></script>'
    const script2 = '<script src="../js/clipboard.js"></script>'
    const button = '<button>Copy</button>'
    fs.writeFileSync(destination, style + script + script2 + button + html)
  })
})
