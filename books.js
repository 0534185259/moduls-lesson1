class Book{
    id;
    name;
    type;
    borrowed;
    static count=0;
    constructor(name, type, borrowed) {
        this.id = Book.count++;
        this.name = name;
        this.type = type;
        this.borrowed = borrowed;
    } 

    toString() {
    return `id: ${this.id}, name:${this.name}, type: ${this.type}, borrowed:${this.borrowed}`
}
}
let books = [
    new Book('lol', 'drama', 'no'),
    new Book('nana', 'exciting', 'no'),
    new Book('blu blu', 'tension', 'no')
]
function print(...books) {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].toString());
    }
}
function borrow(id){
    try{
        b=books.find(x=>x.id===id)
        if(b!=null)
          return b
        else 
         throw new Error ("errorBook")    
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports={Book,borrowBook:borrow,printBook:print}








