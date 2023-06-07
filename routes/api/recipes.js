const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', recipesCtrl.index);

router.post('/', recipesCtrl.create);

router.get('/:id', recipesCtrl.detail);
router.delete('/:id', recipesCtrl.deleteRecipe);
router.put('/:id', recipesCtrl.update)


module.exports = router;