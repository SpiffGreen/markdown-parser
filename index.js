const serveJS = require("serve-dot-js");
const { parseHTMLToMarkdown, parseMarkdownToHTML } = require("./Utilities");
const PORT = process.env.PORT || 5000;

serveJS
    .use(serveJS.json())
    .get("/", (req, res) => res.send("This API allows parsing of markdown to html and from html to markdown"))
    .post("/api/v1/html", sendHtml)
    .post("/api/v1/markdown",sendMarkDown)
    .listen(PORT, console.dir(`Server Started on port ${PORT}`));

function sendHtml(req, res) {
    const html = parseMarkdownToHTML(req.body);
    res.send(html);
}

function sendMarkDown(req, res) {
    const markdown = parseHTMLToMarkdown(req.body);
    res.send(markdown);
}