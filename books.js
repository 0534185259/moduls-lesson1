 const  fs=require("fs").promises



class Book {
    id;
    name;
    type;
    borrowed;
    static count = 0;
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
// /*function print(...books) {
//     for (let i = 0; i < books.length; i++) {
//         console.log(books[i].toString());
//     }
// }*/
// async function print()
// {
//     try {

//         const data = await fs.readFile("booksFile.json", "utf8");
//         const booksData = JSON.parse(data);
//         console.log(booksData);

//     }
//     catch(error){
//         console.log(error); 
//     }

// }
// /*function borrow(id){
//     try{
//         b=books.find(x=>x.id===id)
//         if(b!=null)
//           return b
//         else 
//          throw new Error ("errorBook")    
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }*/
// async function borrow(id) 
// {
//     const data = await fs.readFile("booksFile.json", "utf8");
//     const booksData = JSON.parse(data);
//     const book = booksData.find(b => b.id === id);
//     if(book)
//         console.log(book);
//     else{
//         console.log("book not found");

//     }


// }
// async function initBooks() {

//     try {

//         await fs.writeFile("booksFile.json", JSON.stringify(books, null, 2), "utf8");
//         console.log("create success");
//     } catch (error) {
//         console.error( error);
//     }
// }
// print()
// borrow(22)
function initBooks() {
    return new Promise((resolve, reject) => {
        fs.writeFile("booksFile.json", JSON.stringify(books, null, 2), "utf8")
            .then(() => {
                console.log("Books file created successfully.");
                resolve();
            })
            .catch((error) => {
                console.error("Error initializing books:", error);
                reject(error);
            });
    });
}

const print = async () => {
    const data = fs.readFile("booksFile.json", "utf8")
    try {

        const data = await fs.readFile("booksFile.json", "utf8");
        const booksData = JSON.parse(data);
        console.log(booksData);

    }
    catch (error) {
        console.log(error);
    }

}

function borrow(id) {
    return new Promise((resolve, reject) => {
        fs.readFile("booksFile.json", "utf8")
            .then((data) => {
                const booksData = JSON.parse(data);
                const book = booksData.find((b) => b.id === id);
                if (book) {
                    resolve(book);
                    return book
                } else {
                    reject("Book not found");
                }
            })
            .catch((error) => {
                reject(error); // אם יש שגיאה בקוראת הקובץ
            });
    });
  }
  
 module.exports={Book,borrowBook:borrow,printBook:print,initBooks}








