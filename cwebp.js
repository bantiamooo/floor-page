const webp = require('webp-converter');
const {
  glob,
  globSync,
  globStream,
  globStreamSync,
  Glob,
} = require('glob')

glob('./static/**/*.png').then(files => {
  files.forEach(f => {
    console.log('object :>> ', f.split('.')[0] + ".webp");
    webp.cwebp(f,f.split('.')[0] + ".webp","-q 80",logging="-v");
  })
})

// const result = webp.cwebp("./static/hth.png","./static/hth.webp","-q 80",logging="-v");

// result.then((response) => {
//   console.log(response);
// });