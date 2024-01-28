import { TryCatch } from "../middlewares/error.js";
import { Coupon } from "../models/coupon.js";
export const newCoupon = TryCatch(async (req, res, next) => {
    const { code, amount } = req.body;
    await Coupon.create({ code, amount });
});
