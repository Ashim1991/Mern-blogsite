const router = require('express').Router();
const Recomendblog = require('../models/recomend.model');

   router.get('/', (req, res) => {
    Recomendblog.find()
           .then(blogs => res.json(blogs))
           .catch(err => res.status(400).json('Error: ' + err));
   }
   );
   router.post('/add', (req, res) => {
       const title = req.body.title;
       const content = req.body.content;
       const image = req.body.image;
       const introduction = req.body.introduction;
       const author = req.body.author;
       const slug = req.body.slug;
       const date = req.body.date;
       const likes = req.body.likes;
       const category = req.body.category;
       const comments = req.body.comments;
       const newBlog = new Recomendblog({
           title,
           content,
           image,
           introduction,
           author,
           slug,
           date,
           likes,
           category,
           comments
       });
       newBlog.save()
           .then(() => res.json('Blog added!'))
           .catch(err => res.status(400).json('Error: ' + err));
   }
   );

   router.delete('/:id', (req, res) => {
    Recomendblog.findByIdAndDelete(req.params.id)
           .then(() => res.json('Blog deleted.'))
           .catch(err => res.status(400).json('Error: ' + err));
   }
   );
    router.get('/:id/', (req, res) => {
    Recomendblog.findById(req.params.id)
              .then(blog => res.json(blog))
                .catch(err => res.status(400).json('Error: ' + err));
    }
    );
   router.put('/:id/update', (req, res) => {
    Recomendblog.findById(req.params.id)
           .then(blog => {
               blog.title = req.body.title;
               blog.content = req.body.content;
               blog.image = req.body.image;
               blog.introduction = req.body.introduction;
               blog.author = req.body.author;
               blog.slug = req.body.slug;
               blog.date = req.body.date;
               blog.likes = req.body.likes;
               blog.category = req.body.category;
               blog.comments = req.body.comments;
               blog.save()
                   .then(() => res.json('Blog updated!'))
                   .catch(err => res.status(400).json('Error: ' + err));
           }
           )
           .catch(err => res.status(400).json('Error: ' + err));
   }
   );

   module.exports = router;