const { check } = require("express-validator");


module.exports = [
    check('name')
    .notEmpty().withMessage('Ingresar su nombre de usuario'),

    check('color')
    .notEmpty().withMessage('Indicar un color'),

    check('edad')
    .notEmpty().withMessage('Ingresar su edad')
    .isInt().withMessage('Ingresar un número válido'),

    check('email')
    .notEmpty().withMessage('Ingresar su email').bail()
    .isEmail().withMessage('Email invalido')
]