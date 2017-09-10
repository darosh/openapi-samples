const fs = require('fs')

const path = './specs/markdown/markdown.json'
let json = JSON.parse(fs.readFileSync(path, 'utf8'))
let md = fs.readFileSync('./specs/markdown/README.md', 'utf8')
json.info.description = md
fs.writeFileSync(path, JSON.stringify(json, null, 2))
