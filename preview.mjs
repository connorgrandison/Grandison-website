import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');let file=path.resolve(root,'.'+decodeURIComponent(url.pathname));if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}if(!path.extname(file))file=path.join(file,'index.html');const data=await readFile(file);res.writeHead(200,{'Content-Type':({'.html':'text/html; charset=utf-8','.css':'text/css','.webp':'image/webp','.png':'image/png','.xml':'application/xml','.txt':'text/plain'})[path.extname(file)]||'application/octet-stream'});res.end(data);}catch{res.writeHead(404);res.end('Page not found');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173/about/'));
