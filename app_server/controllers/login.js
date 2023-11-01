const loginPage = function(req, res){
	res.render('login', {
	title: 'Login',
  pageHeader: {
	title:'Login',
	strapline: 'Login page'
  }
   });
  };



module.exports = {
	loginPage
};