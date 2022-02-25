const http=require('http');
const color=require('colors');
const data=require('./api')


const server=http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();

    
    
    
}   ).listen(3000,()=>{
    
    console.log('Escuchando en el puerto 3000'.green);
});