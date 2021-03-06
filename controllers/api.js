exports.install = function() {
	F.route('/api/report/',     json_report,  ['*Report', 'post'], 20);
	F.route('/api/newsletter/', json_save,    ['*Newsletter', 'post']);
	F.route('/api/contact/',    json_save,    ['*Contact', 'post']);
	F.route('/api/verify/',     json_verify);
};

function json_report() {
	// this.$async(this.callback(), 1).$workflow('reCAPTCHA').$save();
	this.$save(this.callback());
}

function json_verify() {
	$WORKFLOW('Report', 'verify', this.query, this.callback());
}

function json_save() {
	this.$save(this.callback());
}