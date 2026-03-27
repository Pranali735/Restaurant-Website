const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
c = c.replace(/<!-- banner section starts  -->[\s\S]*?<!-- banner section ends -->\s*/, '');
c = c.replace(/<!-- blogs section starts  -->[\s\S]*?<!-- blogs section ends -->\s*/, '');
c = c.replace(/[ \t]*<a href="#blogs">.*<\/a>\s*/g, '\n');
fs.writeFileSync('index.html', c);
