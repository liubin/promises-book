"use strict";
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
    function recordValue(results, value) {
        results.push(value);
        return results;
    }

    // [] 用来保存初始化值
    var pushValue = recordValue.bind(null, []);
    // 返回promise对象的函数的数组
    var tasks = [request.comment, request.people];
    var promise = Promise.resolve();
    // 开始的地方
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        promise = promise.then(task).then(pushValue);
    }
    return promise;
}

module.exports.main = main;
module.exports.request = request;