document
	.querySelector('.js-change-theme')
	.addEventListener('click', () => {
    	const body = document.querySelector('body');
		const data = document.querySelector('#data')
		const tabs = document.querySelector('#tabs')
		const menu = document.querySelector("#menu");
		const formField = document.querySelector('#formField1');
		/* Main body theme toggle */
		if (body.classList.contains('zk-nWhite')) {
  			body.classList.remove('zk-nWhite');
  			body.classList.add('zk-nBlack');
		}
		else {
 			body.classList.remove('zk-nBlack');
  			body.classList.add('zk-nWhite');
		}
		/* profile page theme toggle */
		if (data.classList.contains('data-light')){
			data.classList.remove('data-light');
			tabs.classList.remove('tabs-light');
			data.classList.add('data-dark');
			tabs.classList.add('tabs-dark');
		}
		else{
			data.classList.remove('data-dark');
			tabs.classList.remove('tabs-dark');
			data.classList.add('data-light');
			tabs.classList.add('tabs-light');
		}
		/* Mobile menu theme toggle */
		if (menu.classList.contains('light')) {
  			menu.classList.remove('light');
  			menu.classList.add('dark');
		}
		else {
 			menu.classList.remove('dark');
  			menu.classList.add('light');
		}
		/* Profile form theme toggle */
		if(formField.classList.contains('field-light')){
			formField.classList.remove('field-light');
			formField.classList.add('field-dark');
		}
		else{
			formField.classList.remove('field-dark');
			formField.classList.add('field-light');
		}
	});
