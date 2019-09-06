#!/usr/bin/env node

var relToAbs = require("rel-to-abs");
function convertRelToAbs(content) {
    return relToAbs.convert(content, "http://liubin.github.io/promises-book")
}

var data = "";
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    data += chunk
});
process.stdin.on('end', function () {
    process.stdout.write(convertRelToAbs(data))
});

