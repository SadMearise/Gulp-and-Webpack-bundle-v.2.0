export function isWebp() {
	function textWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function() {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	textWebP(function(support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
}

export function ibg() {
    let ibg = document.querySelectorAll(".ibg");
	window.addEventListener("load", function(event) {
		let checkWebp = document.documentElement.classList.contains('webp');
		for (let i = 0; i < ibg.length; i++) {
			if (checkWebp) {
				if (ibg[i].querySelector('source')) ibg[i].style.backgroundImage = `url(${ibg[i].querySelector('source').getAttribute('srcset')})`;
			} else {
				if (ibg[i].querySelector('img')) ibg[i].style.backgroundImage = `url(${ibg[i].querySelector('img').getAttribute('src')})`;
			}
		}
	});
}

export function toggleClassActive() {
	var el = document.querySelector('.icon-menu');
	if(el) {
		document.querySelector('.icon-menu').addEventListener('click', () => {
			document.querySelector('.icon-menu').classList.toggle('active')
			document.querySelector('.menu__body').classList.toggle('active')
			document.querySelector('body').classList.toggle('lock')
		})
	}
}
