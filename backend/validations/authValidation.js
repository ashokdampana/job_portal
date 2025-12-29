
import { body } from 'express-validator';

export const registerValid = [
    body('name').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email is required'),
    body('password').isLength({ min: 6}).withMessage('Password must be atleast 6 char')
];

export const loginValid = [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').isLength({ min: 6}).withMessage('Password must be atleast 6 char')
]

