import express from "express";
import bodyParser from "body-parser";
import mongoose, { Mongoose } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import generalRoutes from "./routes/general.js";

/** CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/** ROUTES */

app.use("/general", generalRoutes);

/**MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port:  ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
