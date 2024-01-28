import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getSingleProduct, getlatestProducts, newProduct, updateProduct } from "../controllers/products.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();


app.post("/new",adminOnly,singleUpload,newProduct);

app.get("/all",getAllProducts);

app.get("/latest",getlatestProducts);

app.get("/categories",getAllCategories);

app.get("/admin-products",getAdminProducts);

app.route("/:id").get(getSingleProduct).put(singleUpload,updateProduct).delete(deleteProduct);

export default app;