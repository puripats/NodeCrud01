const express = require('express')
const router = express.Router()
const movieController =   require('../controllers/movie.controller');
// Retrieve all employees
router.get('/', movieController.findAll);

router.get('/fetchAll', movieController.fetchAll)
router.get('/search', movieController.searchByTitle)
// Create a new employee
module.exports = router