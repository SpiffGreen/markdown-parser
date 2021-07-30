const { parseMarkdownToHTML, parseHTMLToMarkdown } = require("./Utilities");

// console.log(expect("h"));
describe("Markdown to HTML", () => {
    it("Should contain h1", () => {
        const h1Mark = "# Hello world";
        const parsedH1 = parseMarkdownToHTML(h1Mark);
        expect(parsedH1).toContain("<h1>Hello world</h1>");
    });
    it("Should contain h2", () => {
        const h1Mark = "## Hello world";
        const parsedH1 = parseMarkdownToHTML(h1Mark);
        expect(parsedH1).toContain("<h2>Hello world</h2>");
    });
    it("Should contain h3", () => {
        const h1Mark = "### Hello world";
        const parsedH1 = parseMarkdownToHTML(h1Mark);
        expect(parsedH1).toContain("<h3>Hello world</h3>");
    });
    it("Should contain h4", () => {
        const h1Mark = "#### Hello world";
        const parsedH1 = parseMarkdownToHTML(h1Mark);
        expect(parsedH1).toContain("<h4>Hello world</h4>");
    });
    it("Should contain h5", () => {
        const h1Mark = "##### Hello world";
        const parsedH1 = parseMarkdownToHTML(h1Mark);
        expect(parsedH1).toContain("<h5>Hello world</h5>");
    });
    it("Should contain h6", () => {
        const h1Mark = "###### Hello world";
        const parsedH1 = parseMarkdownToHTML(h1Mark);
        expect(parsedH1).toContain("<h6>Hello world</h6>");
    });
});

describe("HTML to Markdown", () => {
    it("Should contain #", () => {
        const markH1 = "<h1>Hello world</h1>";
        const markParse = parseHTMLToMarkdown(markH1);
        expect(markParse).toContain("# Hello world");
    });
    it("Should contain ##", () => {
        const markH1 = "<h2>Hello world</h2>";
        const markParse = parseHTMLToMarkdown(markH1);
        expect(markParse).toContain("## Hello world");
    });
    it("Should contain ###", () => {
        const markH1 = "<h3>Hello world</h3>";
        const markParse = parseHTMLToMarkdown(markH1);
        expect(markParse).toContain("### Hello world");
    });
    it("Should contain ####", () => {
        const markH1 = "<h4>Hello world</h4>";
        const markParse = parseHTMLToMarkdown(markH1);
        expect(markParse).toContain("#### Hello world");
    });
    it("Should contain #####", () => {
        const markH1 = "<h5>Hello world</h5>";
        const markParse = parseHTMLToMarkdown(markH1);
        expect(markParse).toContain("##### Hello world");
    });
    it("Should contain #####", () => {
        const markH1 = "<h6>Hello world</h6>";
        const markParse = parseHTMLToMarkdown(markH1);
        expect(markParse).toContain("###### Hello world");
    });
    it("Should contain ![alt-text](src)", () => {
        const markH1 = "<img alt='profile photo' src='./profile.png' />";
        const markParse = parseHTMLToMarkdown(markH1);
        expect(markParse).toContain("![profile photo](./profile.png)");
    });
    it("Should contain [innerText](href)", () => {
        const markH1 = "<a href='./about.html'>About</a>";
        const markParse = parseHTMLToMarkdown(markH1);
        expect(markParse).toContain("[About](./about.html)");
    });
    it("Should contain ```code```", () => {
        const markH1 = "<code>console.log('Hello world');</code>";
        const markParse = parseHTMLToMarkdown(markH1);
        expect(markParse).toContain("```console.log('Hello world');```");
    });
});