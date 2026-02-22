const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Connection Succesful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        unique:true,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        min:[1, "Price is too Low"]
    }
});

const Book = mongoose.model("Book",bookSchema);

let book2 = new Book({
    title: "Matdxh",
    author:"Custom Value",
    price:-1,
})
book2.save().then((res)=>{console.log(res)})
.catch((err)=>{
    console.log(err.errors.price.properties.message)
})
Book.find({}).then((res)=>{
    console.log(res)
})