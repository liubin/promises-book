"use strict";
var getURL = require("../../Ch1_WhatsPromises/src/xhr-promise").getURL;
var request = {
    comment: function getComment() {
        return getURL("http://liubin.github.io/promises-book/json/comment.json");
    },
    people: function getPeople() {
        return getURL("http://liubin.github.io/promises-book/json/people.json");
    }
};

function main() {
    var results = [];
    var pushValue = Array.prototype.push.bind(results);
    var favValue = fn.bind(null, pushValue);
    return favValue(request.comment())
        .then(favValue(request.people()));
}

module.exports.main = main;
module.exports.request = request;