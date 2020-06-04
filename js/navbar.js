const mainNav = document.getElementById('main-nav');

function navHandler() {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	if (scrollTop > 5) {
		mainNav.classList.add('sc-bg-dark');
		mainNav.style.borderBottom = '1px solid #000000';
	} else {
		mainNav.classList.remove('sc-bg-dark');
		mainNav.style.borderBottom = '';
	}
}

window.onresize = () => {
	navHandler();
};

window.onscroll = () => {
	navHandler();
};

window.onload = () => {
	navHandler();
};
