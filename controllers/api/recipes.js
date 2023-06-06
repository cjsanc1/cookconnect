const Recipe = require('../../models/recipe');

module.exports = {
  index
};

async function index(req, res) {
  try{
    const recipes = await Recipe.find();
    res.status(200).json(recipes)
  }
  catch(err){
    res.status(400).json(err)
  }
}