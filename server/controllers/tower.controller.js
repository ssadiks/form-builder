//Import Tower Model
var Tower     = require('./../models/tower.model');

// middleware to use for all requests
var middleware = function (req, res, next) {
	// do logging
	console.log('Something is happening.');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        //res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        //res.header("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept");
        //res.header("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
        //res.header("Pragma", "no-cache"); // HTTP 1.0.
        //res.addDateHeader("Expires", 0); // Proxies.
	next();
}

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
var rootApi = function (req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
}

/**
* Create a tower
* @param req (Tower Object)
* @param res
* @returns void
*/
var createTower = function (req, res) {
	
	var tower = new Tower();		// create a new instance of the Tower model
	tower.title = req.body.title;  // set the towers name (comes from the request)
  /*var dateNow = Date.now();
  console.log(dateNow);
	tower.date_created = dateNow;*/ // changement d'heure pas pris en compte
	
	function createHero(element) {
	  //if(element.name !== '')
		tower.heroes.push(element);
	}    
	var heroes = req.body.heroes;
	heroes.forEach(createHero);

	tower.save(function(err, tower) {
	  if (err)
      res.status(500).send(err);
	
	  res.json(tower);
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
* @param req (Tower object)
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
* @param req (Array of Hero Object or Hero Object)
* @param res
* @returns void
*/
var createHero = function (req, res) {
  Tower.findById(req.params.tower_id, function(err, tower) {
	function insertHero(element) {
		if(element.name === undefined)
			return res.json({message: "Error : Waiting for a Hero Object"});
		
		tower.heroes.push(element);
	}
	if(tower) {
		// Check if Post is an array of object are just an object
		if(Array.isArray(req.body)) {
			(req.body).forEach(insertHero);
		} else {
			if(req.body.name === undefined)
				return res.json({message: "Error : Waiting for a Hero Object"});
			
			tower.heroes.push(req.body);
		}				
		tower.save(function(err) {
		  if (err)
        res.send(err);
    // send last hero in the array
		res.json(tower.heroes[tower.heroes.length-1]);
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
* @param req (Object Hero)
* @param res
* @returns void
*/
var updateHero = function (req, res) {
	// If name is undefined
	if(req.body.name === undefined)
		return res.json({ message: 'Error : Waiting for a Hero Object' });
		
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