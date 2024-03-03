const mongoose = require('mongoose');
const urldb = 'mongodb+srv://losmar2k4:Baolamok123@cluster0.iemea17.mongodb.net/Kmin-shop?retryWrites=true&w=majority&appName=Cluster0'

// Kết nối tới cơ sở dữ liệu MongoDB
mongoose.connect(urldb)
.then(() => {
  console.log('Connected to MongoDB');
})

// prodcuts
var count = 0; // Dùng để đếm id

const products = new mongoose.Schema({
  "idProduct": {
    type: Number,
    unique: true,
    required: true,
    default: ++count,
  },
  "nameProduct": {
    type: String,
    unique: true,
    required : true,
  },
  "typeProduct":{
    type: String,
    required: true
  },
  "SKU": String,
  "price":{
    type: Number,
    required: true,
  },
  "discount": Number,
  "priceDiscount":{
    type: Number,
    default: '"price" - ("price" * "discount")'
  },
  "description": {
    "des1": String,
    "des2": String,
    "des3": String,
  },
});

const Product = mongoose.model('products', products);

// const testDoc = new Product({
//   "nameProduct": "abc",
//   "typeProduct": "Skin care",
//   "SKU": "832585",
//   "price": 90,
//   "discount": 0.3,
//   "priceDiscount": 43,
//   "description": {
//     "des1": String,
//     "des2": String,
//     "des3": String,
//   },
// });

// testDoc.save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.error(err);
// })

// username


// const user = new mongoose.Schema({
//   "idUser": {
//     type: Number,
//     unique: true,
//     required: true,
//     default: ++count,
//   },
//   "username": {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   "password": {
//     type: String,
//     required: true,
//     unique: true,
//     max: 7,
//   },
//   "userType": {
//     type: String,
//     enum: ['user', 'admin' , ]
//   }
// })