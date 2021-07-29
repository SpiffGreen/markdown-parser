// Utilities
function parseMarkdownToHTML(str) {
    return str.replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
    .replace(/^##### (.*$)/gim, "<h5>$1</h5>")
    .replace(/^###### (.*$)/gim, "<h6>$1</h6>")
    .replace(/^\> (.*$)/gim, "<blockquote>$1</blockqoute>")
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    .replace(/__(.*)__/g, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/_(.*)_/g, "<i>$1</i>")
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\`\`\`([.\s\S\d]*)\`\`\`/g, "<code>$1</code>")
    .replace(/<\s*script\s*[^>]*>[.\s\S\d]*<\s*\/\s*script[^>]*>/g, "")
    .replace(/\n$/gim, '<br />').trim();
}

function parseHTMLToMarkdown(str) {
    return str.replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
    .replace(/^##### (.*$)/gim, "<h5>$1</h5>")
    .replace(/^###### (.*$)/gim, "<h6>$1</h6>")
    .replace(/^\> (.*$)/gim, "<blockquote>$1</blockqoute>")
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    .replace(/__(.*)__/g, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/_(.*)_/g, "<i>$1</i>")
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\`\`\`([.\s\S\d]*)\`\`\`/g, "<code>$1</code>")
    .replace(/<\s*script\s*[^>]*>[.\s\S\d]*<\s*\/\s*script[^>]*>/g, "")
    .replace(/\n$/gim, '<br />').trim();
}

module.exports = {
    parseHTMLToMarkdown,
    parseMarkdownToHTML
};