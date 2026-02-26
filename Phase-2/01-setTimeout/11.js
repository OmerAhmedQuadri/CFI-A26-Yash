function getUser() {
    setTimeout(function () {
        let userids = [10,20,30,40]
        console.log(userids);
        setTimeout(function (id) {
            let user = {
                name : 'John Doe',
                age : 25
            }
            console.log('User ID:',id,'Username:',user.name,'User Age:',user.age);
            setTimeout((age) => {
                console.log(user);
            },1000,user.age)
            }, 1000, userids[3]);
        }, 1500);
        console.log('I am out');
    } 

function abc(str, cd) {
    console.log(str);
    cd()
}

function def() {
    console.log('I am def');
}

abc("Prash", getUser)
def()