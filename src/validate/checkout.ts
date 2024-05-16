import Joi from "joi";

export const checkoutValidate = (checkout: any) => {
    const schema = Joi.object({
        userId: Joi.string().required(),
        firstName: Joi.string().required().min(2).max(30),
        lastName: Joi.string().required().min(2).max(30),
        company: Joi.string().allow('').optional(),
        country: Joi.string().required(),
        streetAddress: Joi.string().required(),
        city: Joi.string().required(),
        zipCode: Joi.string().required(),
        phone: Joi.string().required().pattern(/^[0-9]{10,15}$/),
        email: Joi.string().required(),
        additionalInfo: Joi.string().allow('').optional(),
        total: Joi.number().required().greater(0),
        items: Joi.array().required().min(1)
    });
    
    return schema.validate(checkout,{ abortEarly: false });
}
