// controllers/register.js

const registerPage = function(req, res) {
  res.render('register', {
    title: 'Register',
    pageHeader: {
    title:'Register',
    strapline: 'Register page'
    }
  });
};

module.exports = {
	registerPage
};