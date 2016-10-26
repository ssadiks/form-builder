// ROUTES FOR OUR API
// =============================================================================

// create our router
var express    = require('express');
var router = express.Router();

var Tower     = require('./../models/tower.model');
var Hero     = require('./../models/hero.model');

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// on routes that end in /towers
// ----------------------------------------------------
router.route('/towers')

	// create a tower (accessed at POST http://localhost:8080/towers)
	.post(function(req, res) {
		
		var tower = new Tower();		// create a new instance of the Tower model
		tower.title = req.body.title;  // set the towers name (comes from the request)
		//console.log(req.body.heroes);
    
		var heroes = tower.heroes = req.body.heroes;
    heroes.forEach(createHero);    
    function createHero(element) {
      var hero = new Hero();
      hero.name = element.name;
      hero.save(function(err) {
			if (err)
				res.send(err);

		});
      
      console.log('creation du hero ' + element.name);
    }
		tower.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Tower created!' });
		});

		
	})

	// get all the towers (accessed at GET http://localhost:8080/api/towers)
	.get(function(req, res) {
		Tower.find(function(err, towers) {
			if (err)
				res.send(err);

			res.json(towers);
		});
	});

// on routes that end in /towers/:tower_id
// ----------------------------------------------------
router.route('/towers/:tower_id')

	// get the tower with that id
	.get(function(req, res) {
		Tower.findById(req.params.tower_id, function(err, tower) {
			if (err)
				res.send(err);
			res.json(tower);
		});
	})

	// update the tower with this id
	.put(function(req, res) {
		Tower.findById(req.params.tower_id)
         .populate('heroes')
         .exec(function(err, tower) {

			if (err)
				res.send(err);

			tower.title = req.body.title;
			tower.heroes = req.body.heroes;
			tower.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Tower updated!' });
			});

		});
	})

	// delete the tower with this id
	.delete(function(req, res) {
		Tower.remove({
			_id: req.params.tower_id
		}, function(err, tower) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

module.exports = router;