var fs = require('fs');

/*fs.writeFile('test.txt', 'This is the FS module of node', function (err) {
    if (err) throw err;
    console.log('File Created Successfully.')
})*/

/*fs.appendFile('myappend.js','This is append file.\n',function(err){
    if(err)throw err;
    console.log('The file appended successfully')
})*/

/*fs.readFile('myappend.js','utf-8', function(err,data){
    if(err) throw err;
    console.log(data);
})

fs.readFile('db.json','utf-8', function(err,data){
    if(err) throw err;
    console.log(data);
})
*/

/*fs.unlink('myappend.js', function(err){
    if(err) throw err;
    console.log('File Delete Successfully.')
})*/

fs.rename('test.txt','mytest.txt',function(err){
    if(err) throw err;
    console.log('File Renamed.')
})