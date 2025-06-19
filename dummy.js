/**
 * prettifyApiText(rawText)  ➜  returns HTML string
 * ---------------------------------------------------------------------------
 *  • Turns "\n" / "\t" escape-sequences into real characters
 *  • Collapses consecutive blanks
 *  • Builds <p> paragraphs and <ul><li> bullet-lists
 *  • Safe-by-default: text is HTML-escaped before output
 *
 *  Usage:
 *      const readable = prettifyApiText(apiDump);
 *      document.querySelector('#output').innerHTML = readable;
 */
function prettifyApiText(rawText) {
  if (!rawText || typeof rawText !== 'string') return '';

  // 1. Un-escape common sequences (\n, \t, \")
  const unescaped = rawText
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '    ')          // 4 spaces for \t
    .replace(/\\"/g, '"');            // optional: un-escape quotes

  // 2. Split into trimmed lines we can examine
  const lines = unescaped.split('\n').map(l => l.trim());

  // 3. Helper for HTML-escaping
  const escape = s =>
    s.replace(/[&<>"]/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));

  // 4. Walk line-by-line and build structured blocks
  const out = [];
  let buffer = [];           // collects sentence lines for <p>
  let inList = false;        // are we inside a <ul>?

  const flushParagraph = () => {
    if (buffer.length) {
      out.push('<p>' + escape(buffer.join(' ')) + '</p>');
      buffer = [];
    }
  };

  const closeList = () => {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  };

  lines.forEach(line => {
    if (!line) {                     // blank line  → paragraph break
      flushParagraph();
      closeList();
      return;
    }

    const bulletMatch = line.match(/^(?:[-*•]|->)\s+(.*)/);
    if (bulletMatch) {               // bullet line
      if (!inList) {                 // open a new <ul> if needed
        flushParagraph();
        out.push('<ul>');
        inList = true;
      }
      out.push('<li>' + escape(bulletMatch[1]) + '</li>');
    } else {                         // normal sentence line
      closeList();
      buffer.push(line);
    }
  });

  flushParagraph();
  closeList();

  return out.join('\n');
}
<script>
  // Imagine `apiResponse` holds the raw text you pasted
  const apiResponse = `The Get Trips API is a service that\\nPurpose\\nReturns complete trip information ...`;
  const html = prettifyApiText(apiResponse);
  document.getElementById('output').innerHTML = html;   // <div id="output"></div>
</script>
