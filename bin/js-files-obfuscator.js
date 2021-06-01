#!/usr/bin/env node

const JavaScriptObfuscator = require("javascript-obfuscator");
const fs = require("fs");
const glob = require("glob");

const obfFilePath = "./staticfiles/bundles/*.js";
const jsObfuscatorOption = {
    compact: false,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    shuffleStringArray: true,
    splitStrings: true,
    stringArrayThreshold: 1
};

glob(obfFilePath, function(er, files) {

    // Read All Files
    files.forEach(function(file) {
        // Read File
        let readFileData = new String();
        try {
            readFileData = fs.readFileSync(file, 'utf8');
            //console.log(readFileData);
        } catch (err) {
            console.error(err);
        }

        // Encrypt JS File
        let jsObfuscatorOutput = JavaScriptObfuscator.obfuscate(readFileData).getObfuscatedCode();
        //console.log(jsObfuscatorOutput);

        // Write File
        fs.writeFile(file, jsObfuscatorOutput, {
                encoding: "utf8",
                flag: "w+",
                mode: 0o666
            },
            (err) => {
                if (err) {
                    console.log(err);
                }
            });
    });
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
})