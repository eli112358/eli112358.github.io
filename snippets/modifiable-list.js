function getCode(prefix) {
	return [
		`<div id="${prefix}-main">`,
			`<form id="${prefix}-form">`,
				`<input id="${prefix}-index" type="number">`,
				`<input id="${prefix}-value">`,
				'<input type="submit" value="Add">',
			'</form>',
			'<br/>',
			`<table id="${prefix}-list"></table>`,
		'</div>'
	].join('');
}

export {
	getCode,
};
