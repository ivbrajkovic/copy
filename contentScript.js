window.addEventListener('message', function(event) {
	console.log('content_script.js got message:', event.data.type);
	// check event.type and event.data
	if (event.data.type === 'asset_modify_actions')
		window.postMessage(
			{ type: 'asset_modify_actions_send', asset_modify_actions: windows.asset_modify_actions },
			'*' /* targetOrigin: any */
		);
});

// setTimeout(function() {
// 	console.log('cs sending message');
// 	window.postMessage(
// 		{ type: 'content_script_type', text: 'Hello from content_script.js!' },
// 		'*' /* targetOrigin: any */
// 	);
// }, 1000);
