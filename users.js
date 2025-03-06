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
function print(...users) {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].toString());
    }
}
function borrow(id){
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
module.exports={User,borrowUser:borrow,printUser:print}










