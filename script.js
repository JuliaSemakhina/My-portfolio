const menuBtn = document.querySelector('.nav-button');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');
const sideBar = document.querySelector('.sidebar');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if(!showMenu) {
		sideBar.classList.add('close');
		menuBtn.classList.add('show');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBrand.classList.add('show');
		navItems.forEach(item=> {
			item.classList.add('show')
		});

		showMenu = true;
	} else {
		sideBar.classList.remove('close');
		menuBtn.classList.remove('show');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBrand.classList.remove('show');
		navItems.forEach(item=> {
			item.classList.remove('show')
		});

		showMenu = false;
	}
}

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		sideBar.classList.remove('close');
		menuBtn.classList.remove('show');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBrand.classList.remove('show');
		navItems.forEach(item=> {
			item.classList.remove('show')
		});
		showMenu = false;
	})
})