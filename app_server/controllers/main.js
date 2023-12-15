/*Get home page */

const request = require('request');
const { response } = require('../../app');
const apiOptions = {
	server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
	apiOptions.server = 'https render link'
} 


const _renderHomepage = function(req, res, responceBody) {
	res.render('Moive', {
		title: 'MovieInfo - find all types of movie information',
		pageHeader: {
			         title: 'MovieInfo', // Use a lowercase "t" here
			         strapline: 'Find good movies to watch!'
			      },
		  		movies: [{
		  			name: 'Monty python and the life of brian',
		  			rating: 3,
		  			cast: ['Terry Jones','Eric Idle','Jhon Cleese'],
			  		directors: ['Terry Jones'],
			  		runtime: 94
			  	},{
			  		name: 'Monty python and the holy grail',
			  		rating: 1,
			  		cast: ['Terry Gilliam','Graham Chapman','Michael Palin'],
			  		directors: ['Terry Gilliam','Terry Jones'],
			  		runtime: 91	
			  	},{
			  		name: 'Creed',
			  		rating: 2,
			  		cast: ['Michael B. Jordan','Sylvester Stallone','Tessa Thompson'],
			  		directors: ['Ryan coogler'],
			  		runtime: 133
			  	},{
			  		name: 'Avengers infinity war',
			  		rating: 5,
			  		cast: ['Robert Downey JR','Chris Hemsworth','Scarlett Johansson'],
			  		directors: ['Anthony Russo','Joe Russo'],
			  		runtime: 149
			  	}]
			  });
		  };

		  const movielist = function(req, res) {
			const path = '/api/main';
			const requestOptions = {
				url : apiOptions.server + path,
				method : 'GET',
				json : {},
			};
			request(requestOptions, (err, response, body) => {
				_renderHomepage(req, res, body);
			})
		  };



//const movielist = function(req, res) {
  //  res.render('Movie', {
  //      title: 'MovieInfo - find all types of movie information',
  //      pageHeader: {
  //          title: 'MovieInfo', // Use a lowercase "t" here
  //          strapline: 'Find good movies to watch!'
  //      },
//		movies: [{
//			name: 'Monty python and the life of brian',
//			rating: 3,
///			cast: ['Terry Jones','Eric Idle','Jhon Cleese'],
	//		directors: ['Terry Jones'],
	//		runtime: 94
	//	},{
	//		name: 'Monty python and the holy grail',
	//		rating: 1,
	//		cast: ['Terry Gilliam','Graham Chapman','Michael Palin'],
	//		directors: ['Terry Gilliam','Terry Jones'],
	//		runtime: 91	
	//	},{
	//		name: 'Creed',
	//		rating: 2,
	//		cast: ['Michael B. Jordan','Sylvester Stallone','Tessa Thompson'],
	//		directors: ['Ryan coogler'],
	//		runtime: 133
	//	},{
	//		name: 'Avengers infinity war',
	//		rating: 5,
	//		cast: ['Robert Downey JR','Chris Hemsworth','Scarlett Johansson'],
	//		directors: ['Anthony Russo','Joe Russo'],
	//		runtime: 149
	//	}]
  //  });
//};



module.exports = {
	movielist
};
