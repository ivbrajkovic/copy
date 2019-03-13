window.addEventListener(
	'GET_DUCK',
	function getDuckInPage(event) {
		//You can also use dispatchEvent
		window.postMessage({ action: 'GOT_DUCK', payload: info }, '*');
	},
	false
);
