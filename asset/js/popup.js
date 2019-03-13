let btnCopy = document.getElementById('btnCopy');
let btnPaste = document.getElementById('btnPaste');

// console.log(changeColor);
// changeColor.addEventListener('click', () => {
// 	console.log('click');
// });
// chrome.storage.sync.get('color', function(data) {
// 	changeColor.style.backgroundColor = data.color;
// 	changeColor.setAttribute('value', data.color);
// });

// let obj;

// Paste button event handler
btnPaste.onclick = function(element) {
	// Get active tab id
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		// Inject file in active tab
		console.log(tabs);
		chrome.tabs.executeScript(tabs[0].id, { file: '/asset/js/inject2.js' });
	});
};

// Copy button event handler
btnCopy.onclick = function(element) {
	// Get active tab id
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{
				// code: 'document.body.style.backgroundColor = "' + color + '";'
				file: '/asset/js/inject1.js'
				// code: 'var x = 10; x'
			}
			// ,
			// function(data) {
			// 	// Save returned object to local storage
			// 	chrome.storage.sync.set({ data: data[0] }, function() {
			// 		// console.log('Set storage data: ', data[0]);
			// 	});
			// }
		);
	});
};
