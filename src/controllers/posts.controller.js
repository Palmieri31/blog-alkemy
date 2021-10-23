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

module.exports.addPost = async (req, res, next) => {
    try {
        const { 
            title, 
            content, 
            image, 
            categoryId, 
            creation_date, 
        } = req.body;

        const post = await Post.create({
            title,
            content,
            image,
            categoryId,
            creation_date,
        });

        res.status(200).json({ message: 'the post was added successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'An internal server error ocurred' });
    }
}

module.exports.updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;

        const { 
            title, 
            content, 
            image, 
            categoryId, 
            creation_date, 
        } = req.body;

        const post = await Post.update({ 
            title, 
            content, 
            image, 
            categoryId, 
            creation_date, 
        },
        { where: { id } });
        
        if(!post) {
            res.status(404).json({ message: 'The requested post was not found'});
            return;
        }

        res.status(200).json({ message: 'the post was updated successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'An internal server error ocurred' });
    }
}