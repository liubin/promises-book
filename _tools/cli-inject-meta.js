#!/usr/bin/env node
// </head> にmetaタグを追加する
function convertNoRobots(html) {
    return html.replace('</head>', '<meta name="robots" content="noindex, nofollow" />\n'
            + '<link rel="canonical" href="http://liubin.github.io/promises-book/" />\n'
            + '</head>'
    );
}
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    process.stdout.write(convertNoRobots(chunk));
});

