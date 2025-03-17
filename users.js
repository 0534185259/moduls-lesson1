const  fs=require("fs")
class User{
    id;
    name;
    type;
    borrowed;
    static count=0;
    constructor(name, type, borrowed) {
        this.id = User.count++;
        this.name = name;
        this.type = type;
        this.borrowed = borrowed;
    } 

    toString() {
    return `id: ${this.id}, name:${this.name}, type: ${this.type}, borrowed:${this.borrowed}`
}
}
let users = [
    new User('noa', 'drama', 'no'),
    new User('tzipi', 'exciting', 'no'),
    new User('yael', 'tension', 'no')
]
function print(/*...users*/) {
    /*for (let i = 0; i < users.length; i++) {
        console.log(users[i].toString());
    }*/
        const data = fs.readFileSync("usersFile.json", "utf8")
        const users = JSON.parse(data);
        console.log(users);
        
}    

function borrow(id){
    let users;
    try {
        const data = fs.readFileSync("usersFile.json", "utf8"); 
        users=JSON.parse(data); 
    } catch (error) {
        console.error( error);
        users= [];
    }
    try{
        u=users.find(x=>x.id===id)
        if(u!=null)
          return u
        else 
         throw new Error ("errorUser")    
    }
    catch(error){
        console.log(error.message)
    }

}
function initUsers() {
    try {
        
        fs.writeFileSync("usersFile.json", JSON.stringify(users, null, 2), "utf8");
        console.log("create");
    } catch (error) {
        console.error("error:", error);
    }
}
module.exports={User,borrowUser:borrow,printUser:print,initUsers}










