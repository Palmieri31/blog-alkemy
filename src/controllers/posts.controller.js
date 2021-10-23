const Post = require('../models/Post');
const Category = require('../models/Category');

module.exports.getPosts = async (req, res, next) => {
    try {
        const result = await Post.findAll( {
            include: [
                {
                    model: Category,
                }
            ]
        });
        if(!result) {
            res.status(404).json({message: 'No posts found'});
            return;
        }

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'An internal server error ocurred' });
    }
};

module.exports.getPostById = async (req, res, next) => {
    try{
        const { id } = req.params;

        const result = await Post.findOne({
            where: { id }, include:[{ model: Category }],
        });
        
        if(!result) {
            res.status(404).json({ message: 'no post found' });
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({ message: 'An internal server error ocurred' });
    }
}