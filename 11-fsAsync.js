const {readFile,writeFile} = require('fs');
readFile('./first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }else {
        const first = result;
        readFile('./second.txt','utf-8',(err,result)=>{
            if(err){
                console.log(err);
                return;
            }else {
                const second = result;
                writeFile('./resultAsync.txt',`Here is the result:${first} ${second}`,(err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }else{
                        console.log(result);
                    }
                })

            }
        })
    }
})
