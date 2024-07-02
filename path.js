//    !Path Module 
// let path = require("path");
// If we want to work on file or directory we can go with path module.

// There ara global variables, wr can acccess it derectly.
//  we can access path of current file
// console.log(__filename);//path.js
// console.log(__dirname)// modules


//  basename provides the last part of the address
// console.log(path.basename(__dirname)); //path.js
// console.log(path.basename(__filename));//LocalModule


// extname ==> provides extention of the current file

// console.log(path.extname(__dirname)) .js
// console.log(path.extname(__filename))

// parse == it returns address of the file as an object
// console.log(path.parse(__dirname))
// console.log(path.parse(__filename))


// format == it is used to convert back the address to string format

// console.log(path.format(path.parse(__dirname)));
// console.log(path.format(path.parse(__filename)))

//  isabsolute()== checks wether the path is absolute or relative
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("fs"))


// join=== it simply concatenates the path given
// console.log(path.join("f1","index.html"))

//  Note== if there is ../ in the path 