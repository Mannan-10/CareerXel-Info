const fs = require('fs');

const pages = ['ai', 'candidates', 'colleges', 'employers', 'features', 'pricing', 'resources'];

pages.forEach(p => {
  const filePath = `src/app/${p}/page.tsx`;
  const f = fs.readFileSync(filePath, 'utf8');
  
  // Match the dangerouslySetInnerHTML CSS block
  const m = f.match(/dangerouslySetInnerHTML=\{\{\s*__html:\s*`([\s\S]*?)`\s*\}\}/);
  
  if (m) {
    // Clean up indentation (remove leading 8 spaces)
    const css = m[1].split('\n').map(l => l.replace(/^        /, '')).join('\n').trim();
    const cssPath = `src/app/${p}/${p}.css`;
    fs.writeFileSync(cssPath, `/* ${p} page styles — extracted from dangerouslySetInnerHTML */\n${css}\n`);
    console.log(`OK ${p}.css — ${css.length} bytes`);
  } else {
    console.log(`SKIP ${p} — no dangerouslySetInnerHTML match`);
  }
});
