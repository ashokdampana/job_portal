import { body } from 'express-validator';

export const jobValid = [
  body('title')
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),

  body('company')
    .notEmpty().withMessage('Company name is required')
    .isLength({ min: 2 }).withMessage('Company name must be at least 2 characters long'),

  body('description')
    .notEmpty().withMessage('Description is required')
    .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),

  body('skills')
    .isArray({ min: 1 }).withMessage('Skills must be an array with at least one skill'),

  body('location')
    .notEmpty().withMessage('Location is required'),

  body('salary')
    .isNumeric().withMessage('Salary must be a number')
    .isFloat({ min: 0 }).withMessage('Salary must be a positive number')
];
