// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Rule for activacte extension
var rule1 = {
	conditions: [
		// localhost
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: '127.0.0.1' }
		}),
		// Jasper
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: 'sdisc1p.dc.ht.hr' }
		}),

		// BAS ZG
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: '10.24.129.5' }
		}),
		// BAS RI
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: '10.23.129.5' }
		}),
		// ACS
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: 'kacs-lb.ip.t-com.hr' }
		})
	],
	actions: [new chrome.declarativeContent.ShowPageAction()]
};

// On instaled extension event
chrome.runtime.onInstalled.addListener(function() {
	// Set attribute in browser storage
	// chrome.storage.sync.set({ color: '#3aa757' }, function() {
	// 	console.log('On installed event handler.');
	// });
	// Activae extention only for pages defined in 'rule1'
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([rule1]);
	});
});

//background script is always running unless extension
//is disabled

// //Wait for some one connect to it
// let contentPort;
// chrome.runtime.onConnect.addListener(function(portFrom) {
// 	if (portFrom.name === 'background-content') {
// 		//This is how you add listener to a port.
// 		portFrom.onMessage.addListener(function(message) {
// 			//Do something to duck
// 			console.log(message);
// 			msg = message;
// 		});
// 	}
// });

// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
// 	//Send a message to a tab which has your content script injected
// 	chrome.tabs.sendMessage(tabs[0].id, { action: 'GET_DUCK' });
// });
