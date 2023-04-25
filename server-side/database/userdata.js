const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect('mongodb+srv://9620junaidahmed:Aj7LtoNVzYQtSBSG@cluster0.37fjngf.mongodb.net/sampledata?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error(err));

  const userDetailSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: String
  },{ collection: 'userdetail' });
  
const UserDetail = mongoose.model('UserDetail', userDetailSchema);

module.exports = UserDetail
