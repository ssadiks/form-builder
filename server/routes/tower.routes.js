// Import Tower Controller
var TowerController = require('./../controllers/tower.controller');
// create our router
var express    = require('express');
var router = express.Router();


// middleware to use for all requests
router.use(TowerController.middleware);

// Get message on Root Api
router.route('/').get(TowerController.rootApi);

// Get all Posts
router.route('/towers').get(TowerController.getTowers);
// Create Tower
router.route('/towers').post(TowerController.createTower);

// Get one Tower by id
router.route('/towers/:tower_id').get(TowerController.getTower);
// Update Tower by id
router.route('/towers/:tower_id').put(TowerController.updateTower);
// Delete Tower by id
router.route('/towers/:tower_id').delete(TowerController.deleteTower);

// Create a new Hero
router.route('/towers/:tower_id/heroes').post(TowerController.createHero);

// Get a hero by ids
router.route('/towers/:tower_id/heroes/:hero_id').get(TowerController.getHero);
// Update a hero by ids
router.route('/towers/:tower_id/heroes/:hero_id').put(TowerController.updateHero);
// Delete a hero by ids
router.route('/towers/:tower_id/heroes/:hero_id').delete(TowerController.deleteHero);

//export default router;
module.exports = router;