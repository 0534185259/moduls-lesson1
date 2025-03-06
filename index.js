const {borrowBook,printBook}=require('./books')
const {borrowUser,printUser}=require('./users')

const b=borrowBook(0)
const u=borrowUser(1)

console.log(u);
console.log(b);

if(b.type!==u.type&&b.borrowed=='no'&&u.borrowed=='no')
{
   b.borrowed='yes';
   u.borrowed='yes';
   console.log("success");
}
else
   console.log("failure");
   
   console.log(u);
   console.log(b);
