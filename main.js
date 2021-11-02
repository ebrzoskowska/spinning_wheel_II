const mobileMenu = document.querySelector(".main-nav__mobile-list");
const mobileMenuBtn = document.querySelector(".main-nav__btn");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("main-nav__btn-active");
  mobileMenu.classList.toggle("slide-out");
  mobileMenu.classList.toggle("slide-in");
  if (mobileMenu.classList.contains("slide-out")) {
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  } else {
    mobileMenu.classList.remove("display-none");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 750) {
    mobileMenu.classList.add("slide-out");
    mobileMenu.classList.remove("slide-in");
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  }
});


	
  const wheel = document.querySelector('.wheel__img');
  const spin_btn = document.querySelector('.nav__spin-btn');
	const score = document.querySelector('.wheel__score');

// set the initial deg and also value of one small wheel part in deg 360/24 parts = 15 deg
  let deg = 0;
	let wheelPartsValueDeg = 15; // deg

	  // the values on the individual parts of the wheel
		const wheelPartsValue = {
			1: 600,
			2: 400,
			3: 150,
			4: 200,
			5: 250,
			6: 400,
			7: "Lost turn",
			8: 450,
			9: 150,
			10: 200,
			11: 100,
			12: "Free speen",
			13: 200,
			14: 300,
			15: 400,
			16: 500,
			17: 100,
			18: 200,
			19: 300,
			20: 250,
			21: 750,
			22: "BANKRUPT",
			23: 300,
			24: 250,
		}

		// the function which display winning value on website
	  const handleWin = (actualDeg) => {
			const winningSymbolNr = Math.ceil(actualDeg / wheelPartsValueDeg);
			score.innerHTML = wheelPartsValue[winningSymbolNr];
		}	

		// this part of code is responsible for listening on click event on 'spin_btn' element, disable btn 
		// while spinning, to prevent from clicking again, calculate rotation using math.random to return
		// random integer (not a whole number) and math.floor to chage it into whole number. 
		// Add styles with transition and rotation and class 'blur'.
		spin_btn.addEventListener('click', () => {
    spin_btn.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 5s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
  });

		// this part of code is responsible for listening when transition has completed, then remove  
		// 'blur' class, make button clickable again, set transition to none (to prevent from rotation)
		// Calculate degree on a 360 degree basis to get the "natural" real rotation
		// Use modulus to get the rest value from 360, because we want to start next rotation from that point.
		// Display winning value.
  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    spin_btn.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
		handleWin(actualDeg);
  });
