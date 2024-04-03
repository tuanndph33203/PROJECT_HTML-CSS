// import jwt from 'jsonwebtoken';
// import { StatusCodes } from 'http-status-codes';
// import UserModel from '../models/user.js';
// export const CheckPermission = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization?.split(' ')[1];
//         if (!token) {
//             return res.status(401).json({
//                 message: token
//             })
//         }
//         const data = jwt.verify(token, process.env.KEY)
//         if (!data) {
//             return res.status(401).json({
//                 message: "Không có tài khoản !"
//             })
//         }
//         const user = await UserModel.findById(data.user)
//         if (!user) {
//             return res.status(StatusCodes.NOT_FOUND).json({
//                 message: "Not Found!"
//             })
//         }
//         if (user.role !== "admin") {
//             return res.status(StatusCodes.FORBIDDEN).json({
//                 message: "Bạn không có quyền truy cập !"
//             })
//         }
//         console.log(user);
//         next();
//     } catch (error) {
//         res.status(401).json({
//             message: "Không xác định tài khoản !"
//         })
//     }
// }
"use strict";