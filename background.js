// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// // Rule for activacte extension
// var rule1 = {
// 	conditions: [
// 		new chrome.declarativeContent.PageStateMatcher({
// 			pageUrl: { hostEquals: '127.0.0.1' }
// 		}),
// 		new chrome.declarativeContent.PageStateMatcher({
// 			pageUrl: { hostEquals: '10.24.129.5' }
// 		}),
// 		new chrome.declarativeContent.PageStateMatcher({
// 			pageUrl: { hostEquals: 'sdisc1p.dc.ht.hr' }
// 		})
// 	],
// 	actions: [new chrome.declarativeContent.ShowPageAction()]
// };

// // On instaled extension event
// chrome.runtime.onInstalled.addListener(function() {
// 	// Set attribute in browser storage
// 	// chrome.storage.sync.set({ color: '#3aa757' }, function() {
// 	// 	console.log('On installed event handler.');
// 	// });

// 	// Activae extention only for pages defined in 'rule1'
// 	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
// 		chrome.declarativeContent.onPageChanged.addRules([rule1]);
// 	});
// });

