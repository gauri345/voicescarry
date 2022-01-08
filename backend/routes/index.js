const express = require('express');
const router = express.Router();


router.get('/todo', (req, res) => {
    const todo = [
        {
            "id": 1,
            "todo": "Buy chicken"
        },
        {
            "id": 2,
            "todo": "Cook chicken"
        },
        {
            "id": 3,
            "todo": "Eat chicken"
        }
    ];


    return res.send(todo);

});


module.exports = router;
