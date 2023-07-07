require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
  try {
    // Database connection
    await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
    });

    console.log('Database connected 🥳🥳🥳🥳');
  } catch (err) {
    console.error('Connection failed ☹️☹️☹️☹️', err);
  }
}

module.exports = connectDB;