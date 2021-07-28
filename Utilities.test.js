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

// describe("HTML to Markdown", () => {

// });