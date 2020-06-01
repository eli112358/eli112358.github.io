const code = {
	main: [
		'<div class="modal-content">',
			'<div class="modal-header">',
				'<span id="settings-close" class="close">&times;</span>',
				'<h2>Settings</h2>',
			'</div>',
			'<div class="modal-body">',
				'<div id="settings-color"></div>',
				'<div id="settings-body"></div>',
			'</div>',
			'<div class="modal-footer">',
				'<p>Changes are saved upon closing this</p>',
			'</div>',
		'</div>',
	].join(''),
	color: [
		'Color:<br>',
		'<table>',
			'<tr>',
				'<td>Red:</td>',
				'<td>',
					'<input type="range" id="settings-color-red" value="68">',
				'</td>',
			'</tr>',
			'<tr>',
				'<td>Green:</td>',
				'<td>',
					'<input type="range" id="settings-color-green" value="68">',
				'</td>',
			'</tr>',
			'<tr>',
				'<td>Blue:</td>',
				'<td>',
					'<input type="range" id="settings-color-blue" value="255">',
				'</td>',
			'</tr>',
		'</table>',
	].join(''),
};

export {
	code,
};
