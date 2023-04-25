const User = require('../database/userdata');

const income = async (req, res) => {
    try {
      const users = await User.find({$and: [
        { car: { $in: ["BMW", "Mercedes"] } },
        { income: { $lt: "$5.00" } }
      ]});
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
}

const phoneprice = async (req, res) => {
    try {
      const users = await User.find({
       $and:[{ gender: 'Male'},
       { phone_price: { $gt: 10000 }}]
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
}

const lastname =  async (req, res) => {
    try {
      const users = await User.find({
     $and:[
      {last_name: /^M/},
      {quote: { $regex: /.{16,}/ }},
      {email: { $regex: new RegExp("\\b" + "M", "i") }}
     ]
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
}

const carbrand =  async (req, res) => {
    try {
      const users = await User.find({
     $and:[
      {car: { $in: ["BMW", "Mercedes", "Audi"] }},
      {email: { $not: /\d/ }}
     ]
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
}

const topcities =  async (req, res) => {
    try {
      const users = await User.aggregate([
        {
          $group: {
            _id: "$city",
            userCount: { $sum: 1 },
            avgIncome: { $avg: { $toDouble: { $substrCP: [ "$income", 1, { $strLenCP: "$income" } ] } } }
          }
        },
        {
          $project: {
            city: "$_id",
            userCount: 1,
            avgIncome: 1,
            _id: 0
          }
        },
        { $sort: { userCount: -1 } }
      ])
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
}



module.exports = {income, phoneprice, lastname, carbrand, topcities}