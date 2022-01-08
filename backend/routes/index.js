const express = require('express');
const router = express.Router();


router.get('/question', (req, res) => {
    const todo = [
        {
            "id": 1,
            "question": "I am doing well at work"
        }
    ];

    return res.send(todo);

});


module.exports = router;
