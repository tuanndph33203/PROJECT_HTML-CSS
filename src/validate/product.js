import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "any.required": "Trường Name là bắt buộc",
        "string.empty": "Trường Name không được để trống",
        "string.min": "Trường Name phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Name không được vượt quá {#limit} ký tự",
    }),
    price: Joi.number().min(1000).max(999999999).required().messages({
        "any.required": "Trường Price là bắt buộc",
        "number.empty": "Trường Price không được để trống",
        "number.min": "Trường Price phải có giá trị tối thiểu {#limit}",
        "number.max": "Trường Price không được vượt quá {#limit}",
    }),
    image: Joi.string().required().messages({
        "any.required": "Trường Image là bắt buộc",
        "string.empty": "Trường Image không được để trống",
    }),
    discount: Joi.number().min(0).max(100).required().messages({
        "any.required": "Trường Discount là bắt buộc",
        "number.empty": "Trường Discount không được để trống",
        "number.min": "Trường Discount phải có giá trị tối thiểu {#limit}",
        "number.max": "Trường Discount không được vượt quá {#limit}",
    }),
    description: Joi.string().required().messages({
        "any.required": "Trường Description là bắt buộc",
        "string.empty": "Trường Description không được để trống",
    }),
    stock: Joi.number().min(0).required().messages({
        "any.required": "Trường Stock là bắt buộc",
        "number.empty": "Trường Stock không được để trống",
        "number.min": "Trường Stock phải có giá trị tối thiểu {#limit}",
    }),
    category: Joi.string().required().messages({
        "any.required": "Trường Category là bắt buộc",
        "string.empty": "Trường Category không được để trống",
    })
});

export { productSchema };