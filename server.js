const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;
const port = process.env.PORT || 3000;

const connectDB = URL => {
  return mongoose.connect(DB)
}

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`App running on port ${port} 👀`)
      console.log(process.env.NODE_ENV, "😎");
    });
  } catch (err) {
    console.log(err);
  }
}

start();
