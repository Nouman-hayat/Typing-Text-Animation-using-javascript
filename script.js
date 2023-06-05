const dynamictext = document.querySelector(".dynamic-text");

const typingtext = () => {
	setTimeout(() => {
		dynamictext.textContent = "Freelancer";
	}, 0);

	setTimeout(() => {
		dynamictext.textContent = "Graphic Designer";
	}, 4000);
	setTimeout(() => {
		dynamictext.textContent = "Web Developer";
	}, 8000);
	
};

typingtext();
setInterval(typingtext, 12000);
