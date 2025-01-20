import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import php from 'highlight.js/lib/languages/php';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import plaintext from 'highlight.js/lib/languages/plaintext';
import sql from 'highlight.js/lib/languages/sql';

const doHighlight = () => {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('java', java);
    hljs.registerLanguage('php', php);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('plaintext', plaintext);
    hljs.registerLanguage('sql', sql);
    hljs.highlightAll();
}
//
// document.querySelectorAll('.cda-copy-code').forEach( btnCopy => {
//     btnCopy.addEventListener('click', (e) => {
//         navigator.clipboard.writeText(e.target.dataset.cdaCode);
//     });
// });
//
document.addEventListener('DOMContentLoaded', doHighlight);


