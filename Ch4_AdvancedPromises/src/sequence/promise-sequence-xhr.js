"use strict";
var sequenceTasks = require("../../lib/promise-sequence").sequenceTasks;
var getURL = require("../../../Ch1_WhatsPromises/src/xhr-promise").getURL;
var request = {
    comment: function getComment() {
        return getURL('http://liubin.github.io/promises-book/json/comment.json').then(JSON.parse);
    },
    people: function getPeople() {
        return getURL('http://liubin.github.io/promises-book/json/people.json').then(JSON.parse);
    }
};
function main() {
    return sequenceTasks([request.comment, request.people]);
}

module.exports.main = main;
module.exports.request = request;