const fs = require('fs');

let file = fs.readFileSync('src/App.tsx', 'utf-8');

file = file.replace(/text-slate-200/g, 'text-text-muted');
file = file.replace(/text-slate-300/g, 'text-text-muted');
file = file.replace(/text-slate-400/g, 'text-text-muted');
file = file.replace(/text-slate-600/g, 'opacity-50'); 
file = file.replace(/bg-slate-700\/50/g, 'bg-text-muted/20');
file = file.replace(/bg-slate-700/g, 'bg-text-muted/40');
file = file.replace(/document\.body\.classList/g, 'document.documentElement.classList');
file = file.replace(/min-h-screen bg-black-deep/g, 'min-h-screen transition-colors duration-500 ease-in-out');
file = file.replace(/bg-black-deep\/80/g, 'bg-[var(--bg-color)]/80');
file = file.replace(/bg-black-deep\/95/g, 'bg-[var(--bg-color)]/95');

fs.writeFileSync('src/App.tsx', file);
console.log('Fixed App.tsx text colors and theme toggle!');
