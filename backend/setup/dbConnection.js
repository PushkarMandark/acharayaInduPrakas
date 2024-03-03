const { default: mongoose } = require("mongoose");

const ConnectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://pushkaripf:bharat123@cluster0.41yqovq.mongodb.net/aip"
    );
    console.log("connect Done", connect.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDb;
