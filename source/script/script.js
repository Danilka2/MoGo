$(document).ready(function () {
  $(".slider").slick();
});

const accordions = document.querySelectorAll('.accordion__header');

accordions.forEach(clickOnAccordion);

function clickOnAccordion(accordion) {
	accordion.addEventListener('click', () => {
		if (accordion.nextElementSibling.classList.contains('active')) {
			accordion.nextElementSibling.classList.remove('active');
			accordion.querySelector('.accordion__righticon').innerHTML = 'expand_more';
		} else {
			accordions.forEach((accordion) => {
				accordion.nextElementSibling.classList.remove('active');
				accordion.querySelector('.accordion__righticon').innerHTML = 'expand_more';
			})

			accordion.nextElementSibling.classList.add('active');
			accordion.querySelector('.accordion__righticon').innerHTML = 'expand_less';
		}
	})
}