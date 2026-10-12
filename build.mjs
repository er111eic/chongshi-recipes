import fs from 'node:fs';
import path from 'node:path';
const here=import.meta.dirname;
for(const d of ['content/recipes','content/menus','assets/history','vendor','scripts'])fs.mkdirSync(path.join(here,d),{recursive:true});
for(const f of fs.readdirSync(here)){if(f.startsWith('recipe--'))fs.copyFileSync(path.join(here,f),path.join(here,'content/recipes',f.slice(8)));if(f.startsWith('menu--'))fs.copyFileSync(path.join(here,f),path.join(here,'content/menus',f.slice(6)));}
for(const [a,b] of [['alternatives.md','content/alternatives.md'],['style.css','assets/style.css'],['app.js','assets/app.js'],['curry-shopping-original.png','assets/history/curry-shopping-original.png'],['marked.mjs','vendor/marked.mjs'],['site-build.mjs','scripts/build.mjs'],['site-check.mjs','scripts/check.mjs']])fs.copyFileSync(path.join(here,a),path.join(here,b));
for(const f of fs.readdirSync(here)){if(/^(generated-.*\.png|uploaded-.*\.jpg)$/.test(f))fs.copyFileSync(path.join(here,f),path.join(here,'assets/history',f));}
fs.copyFileSync(path.join(here,'archive-assets.json'),path.join(here,'assets/history/archive-assets.json'));
fs.copyFileSync(path.join(here,'audit.md'),path.join(here,'content/audit.md'));
await import('./scripts/build.mjs');
await import('./scripts/check.mjs');
