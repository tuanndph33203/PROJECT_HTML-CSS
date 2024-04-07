import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "Trường Name là bắt buộc",
    "string.empty": "Trường Name không được để trống",
    "string.min": "Trường Name phải có ít nhất {#limit} ký tự",
    "string.max": "Trường Name không được vượt quá {#limit} ký tự",
  }),
  tags: Joi.array().min(1).required().messages({
    "any.required": "Attributes là trường bắt buộc.",
    "array.min": "Ít nhất phải có một thuộc tính.",
  }),
  gallery: Joi.array().min(1).required().messages({
    "any.required": "Attributes là trường bắt buộc.",
    "array.min": "Ít nhất phải có một thuộc tính.",
  }),
  attributes: Joi.array().min(1).required().messages({
    "any.required": "Attributes là trường bắt buộc.",
    "array.min": "Ít nhất phải có một thuộc tính.",
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
  category: Joi.string().required().messages({
    "any.required": "Trường Category là bắt buộc",
    "string.empty": "Trường Category không được để trống",
  }),
});

export { productSchema };
