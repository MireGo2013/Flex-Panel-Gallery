
const panelse = document.querySelector('.wrapper_panels');

function toggleOpen(e) {
	if (e.target.classList.contains('open')) {
		e.target.classList.remove('open')
	} else {
		document.querySelector('.open')?.classList.remove('open');
		e.target.classList.add('open');
	}
}

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		e.target.classList.toggle('active');
	}
}

panelse.addEventListener('click', toggleOpen)
document.body.addEventListener('transitionend', toggleActive)


