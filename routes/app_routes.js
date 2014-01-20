var feedback = require('../lib/feedback');

exports.findex = function(req, res){

  feedback.all(function(err, rows){
	if(err){
		res.render('error', { message: err });
		return;
	}
  	jsonRows = JSON.stringify(rows);
    res.render('index', { feedback: jsonRows });
  });
};

exports.fadmin = function(req, res){
  
  feedback.all(function(err, rows){
  	if(err){
		res.render('error', { message: err });
		return;
	}
    res.render('admin', { message: "", rows: rows });
  });
};

exports.fadd = function(req, res){
	res.render('add', {});
}

exports.fadd_post = function(req, res){
	var newData = {
		body: req.param('body'),
		staff: req.param('staff'),
		customer: req.param('customer')
	};

	feedback.add(newData, function(err){
		if(err){
			res.render('error', { message: err });
			return;
		}
		res.redirect('/admin');
	});
};

exports.fedit = function(req, res){
	var id = req.param('_id');

	feedback.get(id, function(err, row){
		if(err){
			res.render('error', { message: err });
			return;
		}
		res.render('edit', { id: id, data: row });
	});
};

exports.fedit_post = function(req, res){
	var id = req.param('_id');

	var newData = {
		body: req.param('body'),
		staff: req.param('staff'),
		customer: req.param('customer')
	};

	feedback.update(id, newData, function(err){
		if(err){
			res.render('error', { message: err });
			return;
		}
		res.redirect('/admin');
	});
};

exports.fdelete = function(req, res){
	var id = req.param('_id');
	
	feedback.delete(id, function(err){
		err = "A problem with delete!";
		if(err){
			res.render('error', { message: err });
			return;
		}
		res.redirect('/admin');
	});
};