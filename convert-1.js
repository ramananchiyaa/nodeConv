const sharp = require('sharp')
// [...]
sharp('input.jpg')
.rotate()
.toFile('output.png', (err, info) => {
  console.log(info)
})