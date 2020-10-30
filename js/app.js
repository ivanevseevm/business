document.addEventListener('DOMContentLoaded', function() {
	//Header
	let navbar = document.querySelector('.header__navbar'),
		navbarMenu = document.querySelector('.header__navbar-menu'),
		navbarMenuButton = document.querySelector('.header__navbar-menu-button');

	navbarMenuButton.addEventListener('click', function() {
		navbar.classList.add('_mobile-active');
		document.addEventListener('click', hideHeaderMenu);
	});

	function hideHeaderMenu(event) {
		if(!navbarMenu.contains(event.target) && !navbarMenuButton.contains(event.target)) {
			navbar.classList.remove('_mobile-active');
			document.removeEventListener('click', hideHeaderMenu);
		}
	}


	//Contacts Form
	const arrowBottom = document.querySelector('.contacts__arrow-bottom'),
		contactsForm = document.querySelector('.contacts__form'),
		contactsClose = document.querySelector('.contacts__close');

	arrowBottom.addEventListener('click', () => {
		if (!arrowBottom.classList.contains('_active')) {
			arrowBottom.classList.add('_active');
			contactsForm.classList.add('_active');
		} else {
			arrowBottom.classList.remove('_active');
			contactsForm.classList.remove('_active');
		}
	});

	contactsClose.addEventListener('click', () => {
		arrowBottom.classList.remove('_active');
		contactsForm.classList.remove('_active');
	})
});
