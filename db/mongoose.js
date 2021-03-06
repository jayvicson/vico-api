const mongoose = require("mongoose");

// connect to mongo

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fintech-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));
