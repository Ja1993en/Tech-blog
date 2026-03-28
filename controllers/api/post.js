const router = require('express').Router();
// const { User } = require('../../models')
const {Post} = require('../../models')


router.put('/:id', async (req, res) => {

    try {
      
      const post = await Post.findOne({ where: { id: req.params.id } });
      if (post) {
        post.title = req.body.title; // Change the value locally
        post.description = req.body.content;
        await post.save();
  
      }

    
    res.json(post)
      
    } catch (err) {
      res.status(500).json(err);
    }
  
  })
 


  router.post('/create-post', async (req, res) => {
console.log("We hit it ")
    console.log(req.body)
    const createPost = await Post.create(
        { 
          title: req.body.title,
          description:req.body.content,
          author_id: req.session.user_id,
        });

        res.json(createPost)

  }) 

  router.delete('/:id', async (req,res) => {
    const deletePost = await Post.destroy(
        {
           where: {
              id: req.params.id,
            },
         }
      )
  })

  module.exports = router