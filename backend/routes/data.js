const router = require('express').Router();
const Data = require('../models/data.model');


router.get('/', (req, res) => {
    Data.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
}
);
router.post('/add', (req, res) => {
    const title  = req.body.title;
    const content = req.body.content;
    const image = req.body.image;

    const newData = new Data({
        title,
        content,
        image
    });
    newData.save()
        .then(() => res.json('Data added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);
router.get('/:id', (req, res) => {
    Data.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));   
}
);
router.delete('/:id', (req, res) => {
    Data.findByIdAndDelete(req.params.id)
        .then(() => res.json('Data deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);
router.put('/:id/update', (req, res) => {
    Data.findById(req.params.id)
        .then(data => {
            data.title = req.body.title;
            data.content = req.body.content;
            data.image = req.body.image;
        }
        )
        .then(() => res.json('Data updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);
module.exports = router;
