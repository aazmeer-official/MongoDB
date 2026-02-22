const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Connection Succesful")
})
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

let User = mongoose.model("User",userSchema)

// const user1 = new User({
//     name:"Muhammad Aazdmeer",
//     email:"aazmeer.officials@gmail.com",
//     age:189
// })


// Delete User by ID
User.findByIdAndDelete("699a334c53143163ab726dde")
.then((res)=>{
    console.log(res)
})

// Update User

// User.updateOne({
// name:"Muhammad Aazmeer"
// },{
//     name:"Muhammad Shees"
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })



// user1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// })

// Getting Data on Filter
// User.find(({age:{$gte:100}})).then((res)=>{
//     console.log(res)
// })


// Finding By ID
User.findById({_id : "699a334c53143163ab726dde"}).then((res)=>{
    console.log(res)
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}