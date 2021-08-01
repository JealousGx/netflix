const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/Users");
const movieRoute = require("./Routes/Movies");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth/", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/movies/", movieRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
