const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/Users");
const movieRoute = require("./Routes/Movies");
const listRoute = require("./Routes/Lists");

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
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api/auth/", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/movies/", movieRoute);
app.use("/api/lists/", listRoute);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running!");
});
=======
const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/Users");
const movieRoute = require("./Routes/Movies");
const listRoute = require("./Routes/Lists");

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
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api/auth/", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/movies/", movieRoute);
app.use("/api/lists/", listRoute);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running!");
});
>>>>>>> 166de513f133fb43311405fd26a337f455f32c81
