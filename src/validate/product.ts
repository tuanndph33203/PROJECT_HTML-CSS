import Joi from "joi";

export const productValidate = (product: any) => {
    const schema = Joi.object({
        _id:Joi.string(),
        name: Joi.string().required().max(100).min(6),
        tags: Joi.array(),
        attributes: Joi.array(),
        gallery: Joi.array(),
        featured: Joi.boolean(),
        category: Joi.string().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
        discount: Joi.number().required().min(0).max(100),
    });
    return schema.validate(product);
}
