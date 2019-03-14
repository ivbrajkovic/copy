window.addEventListener(
	'message',
	handler
	// { once: true }
);

// setTimeout(function() {
console.log('page javascript sending message');
window.postMessage(
	{ type: 'asset_modify_actions', text: "Hello from the page's javascript!" },
	'*' /* targetOrigin: any */
);
// }, 2000);

// console.log(asset_modify_actions);

function handler(event) {
	console.log('injectACS.js got message:', event.data.type);

	if (event.data.type === 'asset_modify_actions_send') {
		console.log('page javascript got message:', event.data.asset_modify_actions);
		window.removeEventListener('message', handler);
	}
}
