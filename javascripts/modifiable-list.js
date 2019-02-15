function initModifiableList(spec) {
	spec.set(initModule(spec.prefix, ['main', 'list', 'index', 'value', 'add']));
	if (spec.hasOwnProperty('style')) {
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerText = spec.style;
		document.head.appendChild(style);
	}
	spec.get().array = [];
	spec.get().ele.add.onclick = () => {
		spec.get().set({
			'index': spec.get().ele.index.value,
			'value': spec.get().ele.value.value
		});
		spec.get().ele.index.value = '';
		spec.get().ele.value.value = '';
	};
	spec.get().set = (spec1) => {
		if (spec1.hasOwnProperty('value')) {
			spec.get().array[spec1.index] = spec1.value;
		} else {
			spec.get().array.pop(spec1.index);
		}
		spec.get().redraw();
	};
	spec.get().save = () => {
		localStorage[spec.get().ele.list.id] = spec.get().array;
	};
	spec.get().load = () => {
		spec.get().array = localStorage[spec.get().ele.list.id];
		spec.get().redraw();
	};
	spec.get().redraw = () => {
		spec.get().ele.list.innerHTML = '';
		for(var i in spec.get().array) {
			if(!spec.get().array.hasOwnProperty(i)) continue;

			var data = [];
			for (var i = 0; i < 3; i++) {
				data.push(document.createElement('td'));
			}

			data[0].classList.add('close');
			data[0].innerHTML = '&times;';
			data[0].onclick = () => {
				spec.get().set({'index': i});
			};

			data[1].innerText = `${i}:`;

			data[2].classList.add(`${spec.prefix}value`);
			data[2].innerText = spec.get().array[i];

			var row = document.createElement('tr');
			data.forEach((cell) => {row.appendChild(cell)});

			spec.get().ele.list.appendChild(row);
		}
	};
}
