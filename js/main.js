const panels = document.querySelectorAll('.wrapper_panels .panel');


function toggleOpen() {
	panels.forEach(panel => panel.classList.remove('open'));
	this.classList.add('open');
}


function toggleActive(e) {
	console.log(e.propertyName);
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('active');
	}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

