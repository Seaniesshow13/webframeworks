/*Get home page */

const index = function(reg, res){
	res.render('index',{title: 'MyProject' });
};
module.exports = {
	index
};