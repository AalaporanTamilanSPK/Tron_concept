var {createAccount} = require('tronweb');
var account = createAccount();

var express =require('express')
var app=express()

console.log(account);

app.listen(3000,()=>{
    console.log('server running')
})