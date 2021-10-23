const { body, validationResult } = require('express-validator');
const isImageURL = require('image-url-validator').default;

module.exports.postValidationRules = () => [
    body('title', 'Your title is empty').not().isEmpty(),
    body('content', 'Your content is empty').not().isEmpty(),
    body('image', 'Your image is empty').not().isEmpty(),
    body('image').custom( async (value) => {
        const result = await isImageURL(value);
        if(!result) {
            throw new Error('it is not an image');
        }
    }),
    body('categoryId', 'Your categoryId is empty').not().isEmpty(),
    body('categoryId', 'Your categoryId is not a number').isNumeric(),
    body('creation_date', 'Your creation_date is empty').not().isEmpty(),
    body('creation_date', 'creation_date is not a date ').isDate(),
];


module.exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        return next();
    }
    return res.status(422).json({ error: errors.array() });
}