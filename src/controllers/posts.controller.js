const Post = require('../models/Post');
const Category = require('../models/Category');

module.exports.getPosts = async (req, res, next) => {
    try {
        const result = await Post.findAll( {
            include: [
                {
                    model: Category,
                    as:'category'
                }
            ]
        });
        if(!result) {
            res.status(404).json({message: 'No posts found'});
        }

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'An internal server error ocurred' });
    }
};