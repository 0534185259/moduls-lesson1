const {borrowBook,printBook,initBooks,printCB}=require('./books')
const {borrowUser,printUser, initUsers}=require('./users')

/*const b=borrowBook(0)
const u=borrowUser(1)*/
const[,,bookCode,userCode]=process.argv
console.log(bookCode);
console.log(userCode);
// /*initUsers()*/
// initBooks()

/*console.log(u);
console.log(b);*/

/*if(b.type!==u.type&&b.borrowed=='no'&&u.borrowed=='no')
{
   b.borrowed='yes';
   u.borrowed='yes';
   console.log("success");
}
else
   console.log("failure");
   
   console.log(u);
   console.log(b);*/
 
   
   async function main() {
       
       await initUsers();
       await initBooks();
   
       
       console.log("Users:");
       printUser();
   
       console.log("\nBooks:");
        await printBook(printCB);
   
       
       const user = borrowUser(1); 
       if (user) {
           console.log("\nUser borrowed:", user);
       }
       await borrowBook(1,0)
       const book = await borrowBook(1,1); 
       if (book) {
           console.log("\nBook borrowed:", book);
       }
   }
   
   main();
   