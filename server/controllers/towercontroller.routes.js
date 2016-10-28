// ROUTES FOR OUR API
// =============================================================================

// create our router
var express    = require('express');
var router = express.Router();

var Tower     = require('./../models/tower.model');
//var Hero     = require('./../models/hero.model');

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


/**
* Create a tower
* @param req
* @param res
* @returns void
*/
export function createTower(req, res) {
	
	var tower = new Tower();		// create a new instance of the Tower model
	tower.title = req.body.title;  // set the towers name (comes from the request)
	
	function createHero(element) {
	  if(element.name !== '')
		tower.heroes.push(element);
	}    
	var heroes = req.body.heroes;
	heroes.forEach(createHero);

	tower.save(function(err) {
	  if (err)
		res.send(err);
	
	  res.json({ message: 'Tower created!' });
	});  
}

/**
* Get all towers
* @param req
* @param res
* @returns void
*/
export function getTowers(req, res) {
	Tower.find(function(err, towers) {
		if (err)
			res.send(err);

		res.json(towers);
	});
}

/**
* Get a tower
* @param req
* @param res
* @returns tower
*/
export function getTower(req, res) {
	Tower.findById(req.params.tower_id, function(err, tower) {
		if (err)
			res.send(err);
		res.json(tower);
	});
}

/**
* Update Tower
* @param req
* @param res
* @returns void
*/
export function updateTower(req, res) {
	Tower.findById(req.params.tower_id, function(err, tower) {

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
}


/**
* Delete Tower
* @param req
* @param res
* @returns void
*/
export function deleteTower(req, res) {
	Tower.remove({
		_id: req.params.tower_id
	}, function(err, tower) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted' });
	});
}
  

/**
* Create Hero
* @param req
* @param res
* @returns void
*/
export function createHero(req, res) {
  Tower.findById(req.params.tower_id, function(err, tower) {
	function insertHero(element) {
	  if(element.name !== '')
		tower.heroes.push(element);
	}
	if(tower) {
	  (req.body).forEach(insertHero);
	  
	  tower.save(function(err) {
		if (err)
		  res.send(err);
  
		res.json({ message: 'Heroes created!' });
	  });
	} else {
	  res.json({ message: 'Tower doesn\'t exists' });
	}
	  });
	
}
    
/**
* Get Hero
* @param req
* @param res
* @returns Hero
*/
export function getHero(req, res) {
	Tower.findOne({'heroes._id' : req.params.hero_id}, {'heroes.$': 1}, function(err, tower) {
  if(tower) {
	console.log(tower.heroes[0]._id);
	if (err)
	  res.send(err);
	res.json(tower.heroes);
  } else {
	res.json({ message: 'Hero doesn\'t exists' });
  }
	});
}
  
/**
* Delete Hero
* @param req
* @param res
* @returns void
*/ 
export function deleteHero(req, res) {
  Tower.update(
	{"_id" : req.params.tower_id},
	{ $pull : {"heroes" : {"_id" : req.params.hero_id } } },
	function(err, val) {
	  if (err)
		  res.send(err);
		console.log('val');
		res.json({ message: 'Hero deleted' });
	}
  )
}
  
/**
* Update Hero
* @param req
* @param res
* @returns void
*/
export function updateHero(req, res) {
  console.log(req.body);
  Tower.update(
	{"_id": req.params.tower_id, "heroes._id" : req.params.hero_id},
	{ $set : {
	  "heroes.$.name" : req.body.name
	}},
	function(err, val) {
	  if (err)
		  res.send(err);
		console.log('val');
		res.json({ message: 'Hero updated' });
	}
  )
}

