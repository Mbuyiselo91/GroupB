// Sources of snippets and inspiration: 
// Button style & interaction https://codepen.io/bosworthco/pen/RjErEj
// Card flip https://codepen.io/supah/pen/OMdPpW
// Apple too, i guess
// I know jquery is old fashioned, but i'm more of a UX/UI designer these days 

// // tilts the buttons on hover
// $('.primary-cta, .secondary-cta').tilt({ scale: 1.1, speed: 1000 });

// //flip the card to the back and change UI
// $('#btn-card-flip').click(function() { // 'customise' button is pressed
//   $('.card').addClass('flip'); // card flips over
// 	$("input:text:visible:first").focus(); //first field of form in auto-focus
// 	$('#btn-card-flip').addClass('hidden'); // 'customise' button goes invisible//
// 	$('.secondary-cta').removeClass('hidden'); // 'secondary' button appear //
// });
	
// //send the card
// $('#btn-card-send').click(function() { // 'send' button is pushed
// 	$('.card').addClass('whoosh'); // slides card up out of view
// 	$('.confirmation').addClass('visible'); // show success message
// 		setTimeout(function(){ 
// 			$('input:text').val(''); }, 300);//scrub the input fields when card when is off canvas 
// 		setTimeout(function(){ 
// 			$('.card').removeClass('whoosh');}, 2400);//resets for the next send 
// 			setTimeout(function(){ 
// 			$('.confirmation').removeClass('visible');}, 1600);//resets for the next send
// 			$("input:text:visible:first").focus(); //first field of form in auto-focus
// 	});

// //flip the card to the front and change UI
// $('#close').click(function() { // 'close' button is pressed
//   $('.card').removeClass('flip'); // card flips over
// 	$('#btn-card-flip').removeClass('hidden'); 
    
//     // 'customise' button becomes visible //
// 	$('.secondary-cta').addClass('hidden'); 
    
//     // 'send/close' buttons go invisible //

// });


// let btnCheckout = document.getElementById('checkout');

// function showBack() {

//     let card = document.querySelector('.giftcard')
//     card.classList.add('show-back');
//     card.classList.remove('show-front');
// }

// function showFront() {


//     let card = document.querySelector('.giftcard')
//     card.classList.remove('show-back');
//     card.classList.add('show-front');
// }

// function buy() {

//     showBack();
// }

// function checkw() {

//     showFront();
    
// }



// export { buy, checkw }


const present = document.querySelector('.present')
present.onclick = () => present.classList.toggle('open')




;(function () {
	'use strict'

	const canvas = document.querySelector('canvas')
	const ctx = canvas.getContext('2d')

	let width, height, lastNow
	let snowflakes
	let maxSnowflakes = 100

	function init() {
		snowflakes = []
		resize()
		render(lastNow = performance.now())
	}

	function render(now) {
		requestAnimationFrame(render)

		const elapsed = now - lastNow
		lastNow = now

		ctx.clearRect(0, 0, width, height)
		if (snowflakes.length < maxSnowflakes)
			snowflakes.push(new Snowflake())

		ctx.fillStyle = ctx.strokeStyle = 'rgba(255, 255, 255, .5)'

		snowflakes.forEach(snowflake => snowflake.update(elapsed, now))
	}

	function pause() {
		cancelAnimationFrame(render)
	}
	function resume() {
		lastNow = performance.now()
		requestAnimationFrame(render)
	}


	class Snowflake {
		constructor() {
			this.spawn()
		}

		spawn(anyY = false) {
			this.x = rand(0, width)
			this.y = anyY === true
				? rand(-50, height + 50)
				: rand(-50, -10)
			this.xVel = rand(-.05, .05)
			this.yVel = rand(.02, .1)
			this.angle = rand(0, Math.PI * 2)
			this.angleVel = rand(-.001, .001)
			this.size = rand(7, 12)
			this.sizeOsc = rand(.01, .5)
		}

		update(elapsed, now) {
			const xForce = rand(-.001, .001);

			if (Math.abs(this.xVel + xForce) < .075) {
				this.xVel += xForce
			}

			this.x += this.xVel * elapsed
			this.y += this.yVel * elapsed
			this.angle += this.xVel * 0.05 * elapsed //this.angleVel * elapsed

			if (
				this.y - this.size > height ||
				this.x + this.size < 0 ||
				this.x - this.size > width
			) {
				this.spawn()
			}

			this.render()
		}

		render() {
			ctx.save()
			const { x, y, angle, size } = this
			ctx.beginPath()
			ctx.arc(x, y, size * 0.2, 0, Math.PI * 2, false)
			ctx.fill()
			ctx.restore()
		}
	}

	// Utils
	const rand = (min, max) => min + Math.random() * (max - min)

	function resize() {
		width = canvas.width = window.innerWidth
		height = canvas.height = window.innerHeight
		maxSnowflakes = Math.max(width / 10, 100)
	}

	window.addEventListener('resize', resize)
	window.addEventListener('blur', pause)
	window.addEventListener('focus', resume)
	init()

}())
