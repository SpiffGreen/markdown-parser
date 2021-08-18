const serveJS = require("serve-dot-js");
const { parseHTMLToMarkdown, parseMarkdownToHTML, minifyHTML, minifyCSS, minifyJS } = require("./Utilities");
const PORT = process.env.PORT || 5000;

serveJS
    .use(serveJS.json())
    .get("/", (req, res) => res.send(res, "This API allows parsing of markdown to html and from html to markdown"))
    .post("/api/v1/html", sendHtml)
    .post("/api/v1/markdown",sendMarkDown)
    .post("/api/v1/minify-html", sendMinifiedHtml)
    .post("/api/v1/minify-css", sendMinifiedCSS)
    .post("/api/v1/minify-js", sendMinifiedJS)
    .listen(PORT, console.dir(`Server Started on port ${PORT}`));

function sendHtml(req, res) {
    const html = parseMarkdownToHTML(req.body.data);
    res.send(res, html);
}

function sendMarkDown(req, res) {
    const markdown = parseHTMLToMarkdown(req.body.data);
    res.send(res, markdown);
}

function sendMinifiedHtml(req, res) {
    const minifiedHTML = minifyHTML(req.body.data);
    res.send(res, minifiedHTML);
}

function sendMinifiedCSS(req, res) {
    const minifiedCSS = minifyCSS(req.body.data);
    res.send(res, minifiedCSS);
}

function sendMinifiedJS(req, res) {
    const minifiedJS = minifyJS(req.body.data);
    res.send(res, minifiedJS);
}