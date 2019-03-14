// //start connection in content script
// let contentPort = chrome.runtime.connect({
// 	name: 'background-content'
// });

// //Append your pageScript.js to "real" webpage. So will it can full access to webpate.
// var s = document.createElement('script');
// s.src = chrome.extension.getURL('pageScript.js');
// (document.head || document.documentElement).appendChild(s);
// //Our pageScript.js only add listener to window object,
// //so we don't need it after it finish its job. But depend your case,
// //you may want to keep it.
// s.parentNode.removeChild(s);

// //Listen for runtime message
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
// 	if (message.action === 'GET_DUCK') {
// 		//fire an event to get duck
// 		let event = new CustomEvent('GET_DUCK');
// 		window.dispatchEvent(event);
// 	}
// });

// window.addEventListener(
// 	'message',
// 	function receiveDuck(event) {
// 		if (event.data.action === 'GOT_DUCK') {
// 			//Remove this listener, but you can keep it depend on your case
// 			window.removeEventListener('message', receiveDuck, false);
// 			contentPort.postMessage({ type: 'GOT_DUCK', payload: event.data.payload });
// 		}
// 	},
// 	false
// );

runInPage(initConfigExtractor);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	switch (msg) {
		case 'toggle':
			toggle();
			return;
		case 'asset_modify_actions':
			window.addEventListener(
				chrome.runtime.id + '-config',
				event => {
					sendResponse(event.detail);
				},
				{ once: true }
			);
			window.dispatchEvent(new Event(chrome.runtime.id));
			return true;
	}
});

function initConfigExtractor(extensionId) {
	window.addEventListener(extensionId, () => {
		window.dispatchEvent(
			new CustomEvent(extensionId + '-config', {
				detail: window.info
			})
		);
	});
}

function runInPage(fn) {
	const script = document.createElement('script');
	document.head.appendChild(script).text =
		'((...args) => (' + fn + ')(...args))(' + JSON.stringify(chrome.runtime.id) + ')';
	script.remove();
}
