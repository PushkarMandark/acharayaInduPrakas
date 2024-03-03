const { default: mongoose } = require("mongoose");

const ConnectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MOGODBURL);
    console.log("connect Done", connect.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDb;
