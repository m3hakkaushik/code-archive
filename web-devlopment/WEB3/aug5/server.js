// const { error } = require('console')
const fs = require('fs')


fs.unlink("hello.txt",(err)=>{
    if (err) throw err
    console.log("its working")
})