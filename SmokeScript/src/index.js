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
            dataF = data;

            // Reading each line
            data.split(/\r?\n/).forEach((data) => {

                // The main code
                function exeCode(code) {

                    code.split(/\r?\n/).forEach((code) => {

                        // Comments
                        if (code.substring()) {
                            var code = code.replaceAll(/^.*##.*$/mg, '');
                        }

                        // Variables
                        // Var
                        if (code.substring().startsWith('var ')) {
                            varVariables = code.split('=')[1].replaceAll(' ', '');
                            varVariablesI = code.substring(code.indexOf('var ') + 4, code.indexOf('=')).replaceAll(' ', '');
                        } else {
                        }

                        // Disable / Enable message viewing in the console
                        if (code.substring().startsWith('%file')) {
                            console.log('Current file: ' + files);
                        }

                        // Print
                        if (code.substring().startsWith('print(')) {

                            // Print String
                            if (code.substring().replace('print(', '').includes("\"")) {
                                console.log(code.substring().replace('print(', '').replace("\"", '').replace("\"", '').slice(0,-1));
    
                            // Print Number
                            } else if (code.substring().replace('print(', '')) {
                                if (code.substring().includes('0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9')) {
                                    console.log(code.substring().replace('print(', ''));
                                
                                // Print Variable
                                } else {
                                    if (varVariables.includes('"')) {
                                        console.log(varVariables.substring(1).slice(0, - 1))
                                    } else {
                                        console.log(varVariables);
                                    }
                                }
                            }
                        }
                    });
                }

                // Executing the code
                exeCode(data);

                // Functions
                var functionss;
                if (data.substring().startsWith('void ')) {
                    // Getting functions name
                    name = data.substring(data.indexOf('void ') + 5, data.indexOf('{')).replaceAll(' ', '');
                    // Getting the code that is in the function
                    var codeInFunc = dataF.substring(dataF.indexOf('{') + 1, dataF.indexOf('}'));
                    // The function
                    functionss = function (variables) {
                        exeCode(codeInFunc);
                    }
                    // Running the function | If statement not working
                    if (data.includes('run: ' + name.replaceAll(' ', ''))) {
                        var variablesInside = name.substring(name.indexOf('(') + 1, name.indexOf(')'));
                        functionss(variablesInside);
                    }
                }

                // If statement
                if (data.substring().startsWith('if')) {
                    
                    // Getting middle place
                    var center = data.substring(data.indexOf('(') + 1, data.indexOf(')')).replaceAll('1', '').replaceAll('2', '').replaceAll('3', '').replaceAll('4', '').replaceAll('5', '').replaceAll('6', '').replaceAll('7', '').replaceAll('8', '').replaceAll('9', '').replaceAll(' ', '');
                    
                    // Replacing variable for numbers
                    var dt2 = data;
                    var dt = data.replaceAll(varVariablesI, varVariables);
                    var data = data.replace(dt2, dt);
                    
                    // If is
                    if (data.substring(data.substring(data.indexOf('(') + 1, data.indexOf(')'))).includes(center)) {

                        // Getting the left number
                        var leftNum = data.substring(data.indexOf('(') + 1, data.indexOf(center)).replaceAll(' ', '');
                        var leftNum = parseInt(leftNum);

                        // Getting the right number
                        var rightNum = data.substring(data.indexOf(center) + 1, data.indexOf(')')).replaceAll(' ', '');
                        var rightNum = parseInt(rightNum);

                        // Getting inside the if statement
                        /*
                        var inside = dataF.substring(dataF.indexOf('{') + 1, dataF.indexOf('}'));
                        */

                        // If execution with all the middles possible
                        if (center === '<') {
                            if (leftNum < rightNum) {

                                // Executing the code inside if
                                var ifInside = dataF.substring(dataF.indexOf('{') + 1, dataF.indexOf('}')).replaceAll(' ', '');
                                exeCode(ifInside);
                            }
                        }

                        if (center === '>') {
                            if (leftNum > rightNum) {
                                
                                // Executing the code inside if
                                var ifInside = dataF.substring(dataF.indexOf('{') + 1, dataF.indexOf('}')).replaceAll(' ', '');
                                exeCode(ifInside);
                            }
                        }

                        if (center === '===') {
                            if (leftNum === rightNum) {

                                // Executing the code inside if
                                var ifInside = dataF.substring(dataF.indexOf('{') + 1, dataF.indexOf('}')).replaceAll(' ', '');
                                exeCode(ifInside);
                            }
                        }

                        if (center === '!==') {
                            if (leftNum !== rightNum) {

                                // Executing the code inside if
                                var ifInside = dataF.substring(dataF.indexOf('{') + 1, dataF.indexOf('}')).replaceAll(' ', '');
                                exeCode(ifInside);
                            }
                        }
                    }
                }
            });
        });
    });
});