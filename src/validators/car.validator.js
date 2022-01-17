import Joi from "joi";

export const carValidator = Joi.object( {
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇґҐ]{1,20}$')).required().messages({
        'string.empty':'"Model" не може бути пустим',
        'string.pattern.base':'Тільки букви, довжина мін 1 макс 20'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base':'Ціна має бути від 1 до 1 000 000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':'Рік має бути від 1900 до теперешнього'
    })
})