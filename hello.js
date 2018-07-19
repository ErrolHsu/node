var {readFile} = require('fs')

readFile('index.html', function (err, data) {
  if (err) throw err;
 
  // return data.toString();
  console.log(data.toString());
});
