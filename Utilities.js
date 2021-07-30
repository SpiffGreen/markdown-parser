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
    return str.replace(/<\s*h1[^>]*>(.*)\s*<\s*\/\s*h1\s*>/gim, "# $1")
    .replace(/<\s*h2[^>]*>(.*)\s*<\s*\/\s*h2\s*>/gim, "## $1")
    .replace(/<\s*h3[^>]*>(.*)\s*<\s*\/\s*h3\s*>/gim, "### $1")
    .replace(/<\s*h4[^>]*>(.*)\s*<\s*\/\s*h4\s*>/gim, "#### $1")
    .replace(/<\s*h5[^>]*>(.*)\s*<\s*\/\s*h5\s*>/gim, "##### $1")
    .replace(/<\s*h6[^>]*>(.*)\s*<\s*\/\s*h6\s*>/gim, "###### $1")
    .replace(/<\s*blockquote\s*(.*)\s*<\/blockquote>/gim, "> $1")
    .replace(/<\s*b\s*>\s*(.*)\s*<\s*\/\s*b\s*>/gim, '**$1**')
    .replace(/<\s*b\s*>\s*(.*)\s*<\s*\/\s*b\s*>/gim, "__$1__")
    .replace(/<\s*i\s*>\s*(.*)\s*<\s*\/\s*i\s*>/gim, '*$1*')
    .replace(/<\s*b\s*>\s*(.*)\s*<\s*\/\s*b\s*>/g, "_$1_")
    .replace(/<\s*img alt='(.*)'\s+src='(.*)'\s*\/\s*>/gim, "![$1]($2)")
    .replace(/<a href='(.*)'\s*>(.*)<\s*\/s*a\s*>/gim, "[$2]($1)")
    .replace(/<code>([.\s\S\d]*)<\/code>/g, "\`\`\`$1\`\`\`")
    .replace(/<\s*script\s*[^>]*>[.\s\S\d]*<\s*\/\s*script[^>]*>/g, "")
    .replace(/<\s*br\s*\/\s*>/gim, "\n").trim();
}

module.exports = {
    parseHTMLToMarkdown,
    parseMarkdownToHTML
};