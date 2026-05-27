const fs = require('fs');

let file = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace references
file = file.replace(/text-white/g, 'text-text-main');
file = file.replace(/hover:text-white/g, 'hover:text-text-main');
file = file.replace(/text-cyan/g, 'text-purple');
file = file.replace(/bg-cyan/g, 'bg-purple');
file = file.replace(/border-cyan/g, 'border-purple');
file = file.replace(/border-l-cyan/g, 'border-l-purple');
file = file.replace(/hover:border-purple/g, 'hover:border-purple/30'); // if it was cyan/60 etc

fs.writeFileSync('src/App.tsx', file);
console.log('Done!');
