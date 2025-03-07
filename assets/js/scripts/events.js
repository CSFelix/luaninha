// 	**********************
// 	** Kirby Icon Click **
// 	**********************
const kirbyIcon = document.getElementById('kirbyIcon');

kirbyIcon.addEventListener('click', () => {
	const startContainer = document.getElementById('startContainer');
	const contentContainer = document.getElementById('contentContainer');

	startContainer.style.display = 'none';

	contentContainer.style.display = 'flex';

	setTimeout(() => {
		contentContainer.style.opacity = '1.00';

		const songComponent = document.getElementById('songComponent');
		songComponent.play();
	}, 300);
});

// 	*********************
// 	** Content Buttons **
// 	*********************
document.querySelectorAll('.contentButton').forEach((contentButton, index) => {
	contentButton.addEventListener('click', (event) => {
		const activeContentButton = document.querySelector('.activeContentButton');
		if (activeContentButton) activeContentButton.classList.remove('activeContentButton');

		const target = event.target;
		target.classList.add('activeContentButton');

		const activeContentContainer = document.querySelector('.activeContentContainer');
		if (activeContentContainer) activeContentContainer.classList.remove('activeContentContainer');

		const index = parseInt(target.dataset.index, 10);
		const containers = ['contentMomentsContainer', 'contentGiftsContainer', 'contentFeedbackContainer'];		
		document.getElementById(containers[index]).classList.add('activeContentContainer');
	});
});

// 	*************************
// 	** Content Gifts Cards **
// 	*************************
const handleGiftCardClick = (contentGiftCardBack, index) => {
	contentGiftCardBack.style.animation = 'spin 5.00s ease';
	contentGiftCardBack.classList.remove('contentGiftCardBack');

	const contentGiftCardIcon = contentGiftCardBack.querySelector('.contentGiftCardIcon');
	contentGiftCardIcon.style.opacity = 0.01;
	setTimeout(() => {
		// ***---- Content Gift Card Icon ----***
		if (index === 0) contentGiftCardIcon.textContent = '🥰';
		else if (index === 1) contentGiftCardIcon.textContent = '🍫';
		else contentGiftCardIcon.textContent = '🍿';

		contentGiftCardIcon.style.opacity = 1.00;

		// ***---- Content Gift Card Description ----***
		const contentGiftCardDescription = document.createElement('span');
		contentGiftCardDescription.classList.add('contentGiftCardDescription');

		if (index === 0) contentGiftCardDescription.textContent = 'Beijinhos';
		else if (index === 1) contentGiftCardDescription.textContent = 'Chocolatinho';
		else contentGiftCardDescription.textContent = 'Filminho';

		contentGiftCardBack.appendChild(contentGiftCardDescription);
	}, 500);
};

document.querySelectorAll('.contentGiftCardBack').forEach((contentGiftCardBack, index) => {
	const handleClickGiftCardWrapper = (event) => {
		handleGiftCardClick(contentGiftCardBack, index);
		contentGiftCardBack.removeEventListener('click', handleClickGiftCardWrapper);
	};

    contentGiftCardBack.addEventListener('click', handleClickGiftCardWrapper);
});