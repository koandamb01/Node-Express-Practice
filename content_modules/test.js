var path = "path/a-long/path/to-my/file.jpg";
var path_splitted = path.split('/');

console.log("path: " + path_splitted);
var extension = path_splitted.pop();

// Here the file will not have extension !
if (extension === path) {
    // The filepath doesn't have . characters, that means doesn't have extension. for example :
    // if you try with : path/to/my/file/thisisafile
    // extension == path/to/my/file/thisisafile
}

// show extension
console.log(extension);