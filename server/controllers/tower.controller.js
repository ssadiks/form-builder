//Import Tower Model
var Tower     = require('./../models/tower.model');

// middleware to use for all requests
var middleware = function (req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
}

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
var rootApi = function (req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
}

/**
* Create a tower
* @param req
* @param res
* @returns void
*/
var createTower = function (req, res) {
	
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
var getTowers = function(req, res) {
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
var getTower = function (req, res) {
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
var updateTower = function (req, res) {
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
var deleteTower = function (req, res) {
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
var createHero = function (req, res) {
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
var getHero = function (req, res) {
	Tower.findOne({'heroes._id' : req.params.hero_id}, {'heroes.$': 1}, function(err, tower) {
  if(tower) {
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
var deleteHero = function (req, res) {
  Tower.update(
	{"_id" : req.params.tower_id},
	{ $pull : {"heroes" : {"_id" : req.params.hero_id } } },
	function(err, val) {
	  if (err)
		  res.send(err);
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
var updateHero = function (req, res) {
  Tower.update(
	{"_id": req.params.tower_id, "heroes._id" : req.params.hero_id},
	{ $set : {
	  "heroes.$.name" : req.body.name
	}},
	function(err, val) {
	  if (err)
		  res.send(err);
		res.json({ message: 'Hero updated' });
	}
  )
}

module.exports = {
	rootApi,
	middleware,
	getTowers,
	getTower,
	createTower,
	updateTower,
	deleteTower,
	createHero,
	getHero,
	updateHero,
	deleteHero
};