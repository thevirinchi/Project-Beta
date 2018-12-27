document
	.querySelector('.js-change-theme')
	.addEventListener('click', () => {
    	const body = document.querySelector('body');
		const data = document.querySelector('#data')
		const tabs = document.querySelector('#tabs')
		const menu = document.querySelector("#menu");
		if (body.classList.contains('zk-nWhite')) {
  			body.classList.remove('zk-nWhite');
  			body.classList.add('zk-nBlack');
		}
		else {
 			body.classList.remove('zk-nBlack');
  			body.classList.add('zk-nWhite');
		}
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
		if (menu.classList.contains('light')) {
  			menu.classList.remove('light');
  			menu.classList.add('dark');
		}
		else {
 			menu.classList.remove('dark');
  			menu.classList.add('light');
		}
	});
