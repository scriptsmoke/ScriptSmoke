// Imports
var fs = require('fs');

// Variables
var error = 'Error: ';
var name = 'SmokeScript';
var variableValue;

// Changing the directory's location
var dir = __dirname.replace('\\' + name + '\\src', '');

// Reading the project's directory
fs.readdir(dir + '\\Scripts', 'utf8', function(err, files) {

    // Reading files one by one
    files.forEach(function(files) {

        // Reading all the .sms files
        fs.readFile(dir + '\\Scripts\\' + files, 'utf8', function(err, data) {

            // Reading fully
            var dataF = data;

            // Reading each line
            data.split(/\r?\n/).forEach((data) => {

                // File content
                if (data.startsWith('%fileContent')) {
                    console.log(data);
                }
            });
        });
    });
});