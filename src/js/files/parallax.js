/* <section class="parallax">
	<div class="parallax__images">
		<div class="parallax__item">
			<div class="el1"></div>
		</div>
		<div class="parallax__item">
			<div class="el2"></div>
		</div>
		<div class="parallax__item">
			<div class="el3"></div>
		</div>
	</div>
</section>
<section class="nextBlock">
	
</section> */

window.onload = function() {
	const parallax = document.querySelector('.parallax');

	if (parallax) {
		const el1 = document.querySelector('.el1');
		const el2 = document.querySelector('.el2');
		const el3 = document.querySelector('.el3');

		// coefficient
		const forEl1 = 40;
		const forEl2 = 20;
		const forEl3 = 10;

		// speed animation
		const speed = 0.15;

		let positionX = 0, positionY = 0;
		let coordXpercent = 0, coordYpercent = 0;

		// mouse parallax
		function setMouseParallaxStyle() {
			const distX = coordXpercent - positionX;
			const distY = coordYpercent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			el1.style.cssText = `transform: translate(${positionX / forEl1}%,${positionY / forEl1}%);`;
			el2.style.cssText = `transform: translate(${positionX / forEl2}%,${positionY / forEl2}%);`;
			el3.style.cssText = `transform: translate(${positionX / forEl3}%,${positionY / forEl3}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}

		setMouseParallaxStyle();

		parallax.addEventListener('mousemove', function(e) {
			// getting blocks height and weight 
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			// null in the center
			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			// getting percents
			coordXpercent = coordX / parallaxWidth * 100
			coordYpercent = coordY / parallaxHeight * 100
		})

		// scroll parallax 
		let thresholdSets = [];
		for (let i = 0; i <= 1.0; i += 0.005) {
			thresholdSets.push(i)
		}

		const callback = function(entries, observer) {
			const scrollTopPercent = window.pageYOffset / parallax.offsetHeight * 100;
			setParallaxItemsStyle(scrollTopPercent);
		};

		const observer = new IntersectionObserver(callback, {
			threshold: thresholdSets
		});

		observer.observe(document.querySelector('.nextBlock'));

		function setParallaxItemsStyle(scrollTopPercent) {
			el1.parentElement.style.cssText = `transform: translate(0%, -${scrollTopPercent / 6}%);`;
			el2.parentElement.style.cssText = `transform: translate(0%, -${scrollTopPercent / 3}%);`;
			el3.parentElement.style.cssText = `transform: translate(0%, -${scrollTopPercent / 1.5}%);`;
		}

	}
}