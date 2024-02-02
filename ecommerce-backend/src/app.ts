import express from "express";
import { connectDB } from "./utils/feature.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import {config} from "dotenv";
import morgan from 'morgan';

//Importing Routes
import userRoute from './routes/user.js';
import productRoute from './routes/products.js';
import orderRoute from "./routes/order.js";
import paymentRoute from './routes/payment.js';
import dashboardRoute from './routes/stats.js';

config({
    path:"./.env",
});

const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";

connectDB(mongoURI);

//to store data in ram so that loading same data again nd again takes less time
export const myCache = new NodeCache();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.get("/",(req,res)=>{
    res.send("API woking with /api/v1");
})

//Using Routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/product",productRoute);
app.use("/api/v1/order",orderRoute);
app.use("/api/v1/payment",paymentRoute);
app.use("/api/v1/dashboard",dashboardRoute);

app.use("/uploads",express.static("uploads"));
app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Express is working on http://localhost:${port}`);
}); 