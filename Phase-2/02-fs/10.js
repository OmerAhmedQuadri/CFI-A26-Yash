import fs from 'fs'

let username 

fetch('https://api.github.com/users/1-ux')
    .then(res => {
        console.log(res);
        
        if(!res.ok){
            throw new Error("Something went wrong!");
            return console.log('error');
            
        }
        // console.log(res);
        // console.log(res.json());
        return res.json()
    })
    .then(res => {
        // console.log(res);
        // let res1 = JSON.stringify(res, null, 4)
        res = res
        .filter ( (ele) => {
            if(ele.id % 2 == 0){
                return ele
            }
        })
        .map( (usr) => {
            return {id : usr.id, login : usr.login}
        })
        fs.writeFile('output.json', JSON.stringify(res, null, 2), (error) => {
                if(error) {
                    console.log('Oops:');
                    console.log(error);
                    return
                }
                console.log('Write Success!');
            })
    })
    .catch(err => {
        console.log(err);
    })

