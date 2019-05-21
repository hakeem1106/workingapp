const express = require('express')
const router = express.Router()
const Users = require('../../models/person')


router.get('/',(req, res) => {

});

router.post('/', function(req, res){
    let userData = new Users({
        username: req.body.username,
        password: req.body.password
    });
    userData.save()
    .then(user =>{
        res.status(200).send("I think it worked")
    })
    .catch(err =>{
        res.status(400).send("Try again, you are close")
    })
})
module.exports = router