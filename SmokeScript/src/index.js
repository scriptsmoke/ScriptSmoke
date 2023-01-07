// Imports
var fs = require('fs');

// Variables
var error = 'Error: ';
var name = 'SmokeScript';

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

                // The main code
                function code() {

                    // Disable / Enable message viewing in the console
                    if (data.substring().startsWith('%file')) {
                        console.log('Current file: ' + files);
                    }

                    // Print
                    if (data.substring().startsWith('print(')) {

                        // Print String
                        if (data.substring().replace('print(', '').includes("\"")) {
                            console.log(data.substring().replace('print(', '').replace("\"", '').replace("\"", '').slice(0,-1));
    
                        // Print Number
                        } else if (data.substring().replace('print(', '')) {
                            if (data.substring().includes('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9')) {
                                console.log(data.substring().replace('print(', ''));
                            } else {
                                console.log(error + 'Please set your text in a string.');
                            }
                        }
                    }
                }

                // Executing the code
                code();

                // If statement
                if (data.substring().startsWith('if')) {
                    
                    // Getting middle place
                    var middle = data.substring(data.indexOf('(') + 1, data.indexOf(')')).replaceAll('1', '').replaceAll('2', '').replaceAll('3', '').replaceAll('4', '').replaceAll('5', '').replaceAll('6', '').replaceAll('7', '').replaceAll('8', '').replaceAll('9', '').replaceAll(' ', '');

                    // All the middle possibilities
                    switch (middle) {
                        case '<':
                            center = '<';
                        break;

                        case '>':
                            center = '>';
                        break;

                        case '===':
                            center = '===';
                        break;

                        case '!==':
                            center = '!==';
                    }

                    // If is
                    if (data.substring(data.substring(data.indexOf('(') + 1, data.indexOf(')'))).includes(center)) {

                        // Getting the left number
                        var leftNum = data.substring(data.indexOf('(') + 1, data.indexOf(center));

                        // Getting the right number
                        var rightNum = data.substring(data.indexOf(center) + 1, data.indexOf(')'));

                        // Getting inside the if statement
                        /*
                        var inside = dataF.substring(dataF.indexOf('{') + 1, dataF.indexOf('}'));
                        */

                        // If execution with all the middles possible
                        if (center === '<') {
                            if (leftNum < rightNum) {
    
                                // Executing the code | Does not executes
                                code();
                            }
                        }

                        if (center === '>') {
                            if (leftNum > rightNum) {
    
                                // Executing the code | Does not executes
                                code();
                            }
                        }

                        if (center === '===') {
                            if (leftNum === rightNum) {
    
                                // Executing the code | Does not executes
                                code();
                            }
                        }

                        if (center === '!==') {
                            if (leftNum !== rightNum) {
    
                                // Executing the code | Does not executes
                                code();
                            }
                        }
                    }
                }
            });
        });
    });
});