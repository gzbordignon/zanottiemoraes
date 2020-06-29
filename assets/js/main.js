window.onscroll = () => {
  const nav = document.querySelector('#main-nav');
  if(this.scrollY <= 10) 
  	nav.classList.remove('navbar-scroll');
  else 
  	nav.classList.add('navbar-scroll');
};


window.onload = () => {
	buttons = document.querySelectorAll('.button-icon');


	function hide(id) {
		boxContent = document.getElementById(id);
		boxContent.classList.add('hide');
	}

	function show(id) {
		boxContent = document.getElementById(id);
		boxContent.classList.remove('hide');
	}

	function toggleContent(id) {
		boxContent = document.getElementById(id);
		if (boxContent.classList.contains('hide')) {
			show(id);
		}
		else {
			hide(id);
		}
	}

	function toggleIcon(id) {
		icon = document.querySelector("[data-button=" + id + "]");
		if (icon.classList.contains("fa-plus")) {
			icon.classList.remove('fa-plus');
			icon.classList.add('fa-minus');
		}
		else {
			icon.classList.remove('fa-minus');
			icon.classList.add('fa-plus');
		}
	}

	buttons.forEach(button => button.addEventListener('click', () => {
		// boxContent = document.getElementById(button.dataset.button);
		// if (boxContent.classList.contains('hide')) {
		// 	show(button.dataset.button);
		// }
		// else {
		// 	hide(button.dataset.button);
		// }
		toggleContent(button.dataset.button);
		toggleIcon(button.dataset.button);
	}));

};