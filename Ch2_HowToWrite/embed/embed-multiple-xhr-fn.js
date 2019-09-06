function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
var request = {
        comment: function getComment() {
            return getURL('http://liubin.github.io/promises-book/json/comment.json');
        },
        people: function getPeople() {
            return getURL('http://liubin.github.io/promises-book/json/people.json');
        }
    };
function main() {
    var results = [];
    var pushValue = Array.prototype.push.bind(results);
    var favValue = fn.bind(null, pushValue);
    return favValue(request.comment()).then(favValue(request.people()));
}