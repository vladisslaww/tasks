const writeFile = require('fs').writeFile;

const promisify = func => (...args) => new Promise ((resolve, reject) => {
  func(...args, (err, result)=>{
    if (err) reject(err);
    resolve(result);
  })
});

const prWriteFile = promisify(writeFile);


