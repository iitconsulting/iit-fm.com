function main() {
	let headerNav = document.querySelector('header nav')
	headerNav.querySelector('.close a').addEventListener('click', function () {
		headerNav.classList.add('closed')
	})
	document.querySelector('header .nav-trigger').addEventListener('click', function () {
		headerNav.classList.remove('closed')
	})
}