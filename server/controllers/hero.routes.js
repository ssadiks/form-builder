// ROUTES FOR OUR API
// =============================================================================

// create our router
var express    = require('express');
var router = express.Router();

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

// on routes that end in /heros
// ----------------------------------------------------
router.route('/heroes')

	// create a hero (accessed at POST http://localhost:8080/heros)
	.post(function(req, res) {
		
		var hero = new Hero();		// create a new instance of the Hero model
		hero.name = req.body.name;  // set the heros name (comes from the request)

		hero.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Hero created!' });
		});

		
	})

	// get all the heros (accessed at GET http://localhost:8080/api/heros)
	.get(function(req, res) {
		Hero.find(function(err, heros) {
			if (err)
				res.send(err);

			res.json(heros);
		});
	});

// on routes that end in /heros/:hero_id
// ----------------------------------------------------
router.route('/heros/:hero_id')

	// get the hero with that id
	.get(function(req, res) {
		Hero.findById(req.params.hero_id, function(err, hero) {
			if (err)
				res.send(err);
			res.json(hero);
		});
	})

	// update the hero with this id
	.put(function(req, res) {
		Hero.findById(req.params.hero_id, function(err, hero) {

			if (err)
				res.send(err);

			hero.name = req.body.name;
			hero.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Hero updated!' });
			});

		});
	})

	// delete the hero with this id
	.delete(function(req, res) {
		Hero.remove({
			_id: req.params.hero_id
		}, function(err, hero) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

module.exports = router;